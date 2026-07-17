import { useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Lightbulb, School, Send, Sparkles } from "lucide-react";
import IllusionAsset from "./IllusionAsset";
import { useLanguage } from "../i18n/LanguageContext";
import styles from "./RegistrationForm.module.css";

const PHONE_PREFIX = "+998 ";

const GRADE_OPTIONS = ["grade5", "grade6", "grade7", "grade8", "grade9", "grade10",];

// --- Telegram Bot API credentials -------------------------------------
// Replace these with your live bot's credentials. Never hardcode real
// secrets directly in source — set them in a local .env file instead
// (see .env.example) as VITE_TELEGRAM_BOT_TOKEN / VITE_TELEGRAM_CHAT_ID.
// TELEGRAM_BOT_TOKEN: token issued by @BotFather for your bot.
// TELEGRAM_CHAT_ID: the target group/channel id the bot should post to
//   (add the bot to the group as admin, then read the id via getUpdates
//   or a helper bot like @RawDataBot).
const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;
// -----------------------------------------------------------------------

// --- Google Sheets webhook ----------------------------------------------
// IMPORTANT: a normal Google Sheets document link (the one you open in your
// browser to view/edit rows) can NOT receive HTTP POST requests — Google
// Sheets has no built-in endpoint for that. To actually collect leads into
// this sheet you must deploy a Google Apps Script "Web App" bound to it:
//   1. Open the sheet → Extensions → Apps Script.
//   2. Paste a doPost(e) handler that reads e.postData.contents (JSON)
//      and appends a row via SpreadsheetApp.
//   3. Deploy → New deployment → Web app → execute as "Me", access
//      "Anyone" → copy the generated URL (it ends in /exec).
//   4. Paste that /exec URL below in place of the document link.
// Until that's done, this request will fail — the code already handles
// that failure gracefully (see handleSubmit) so the Telegram delivery
// still goes through and the user still sees a success state.
const GOOGLE_SHEETS_WEBHOOK_URL = import.meta.env.VITE_GOOGLE_SHEETS_WEBHOOK_URL;
 
// -----------------------------------------------------------------------

function formatPhone(rawValue) {
  const digits = rawValue.replace(/\D/g, "").slice(3, 12);
  const parts = [digits.slice(0, 2), digits.slice(2, 5), digits.slice(5, 7), digits.slice(7, 9)];
  const [group, prefix1, mid, tail] = parts;
  let formatted = group;
  if (prefix1) formatted += ` ${prefix1}`;
  if (mid) formatted += `-${mid}`;
  if (tail) formatted += `-${tail}`;
  return PHONE_PREFIX + formatted;
}

function buildTelegramMessage(form) {
  return [
    "🚨 *TARGET STARTUP CHAMPIONSHIP* 🚨",
    "",
    `👤 *Ism va Familiya:* ${form.fullName}`,
    `🏫 *Maktabi:* ${form.schoolName}`,
    `📚 *Sinfi:* ${form.grade}`,
    `📞 *Telefon:* ${form.phone}`,
    `📱 *Telegram:* ${form.telegramUsername}`,
    `👥 *Jamoa a'zolari:* ${form.teamSize}`,
    `❓ *Nima uchun startup qurmoqchisiz:* ${form.whyStartup}`,
    `❓ *Target Hackathondan kutilmalar:* ${form.expectations}`,
  ].join("\n");
}

async function sendToTelegramGroup(form) {
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: TELEGRAM_CHAT_ID,
      text: buildTelegramMessage(form),
      parse_mode: "Markdown",
    }),
  });

  if (!response.ok) {
    throw new Error(`Telegram API error: ${response.status}`);
  }

  return response.json();
}

function buildLeadPayload(form) {
  return {
    name: form.fullName,
    schoolName: form.schoolName,
    grade: form.grade,
    phone: form.phone,
    telegramUsername: form.telegramUsername,
    teamSize: form.teamSize,
    whyStartup: form.whyStartup,
    expectations: form.expectations,
  };
}

async function sendToGoogleSheets(form) {
  // Apps Script Web Apps don't answer the CORS preflight (OPTIONS) request
  // with an Access-Control-Allow-Origin header, so a POST with
  // Content-Type: application/json gets blocked by the browser before it
  // ever reaches doPost — that's the "No 'Access-Control-Allow-Origin'
  // header" error. Also, /exec responses go through a redirect to
  // script.googleusercontent.com that frequently drops CORS headers too,
  // even on requests that skip preflight.
  //
  // The reliable workaround: send as a no-cors, text/plain request. Apps
  // Script still receives the raw body via e.postData.contents and can
  // JSON.parse() it there (Content-Type is metadata, not a schema check).
  // The tradeoff is we can't read the response back — with mode: "no-cors"
  // the response is opaque, so this call is fire-and-forget. Verify rows
  // are actually landing by checking the sheet itself or the Apps Script
  // project's Executions log, not by trusting a resolved promise here.
  await fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(buildLeadPayload(form)),
  });
}

const INITIAL_STATE = {
  fullName: "",
  schoolName: "",
  grade: "",
  phone: PHONE_PREFIX,
  telegramUsername: "",
  whyStartup: "",
  expectations: "",
  teamSize: "",
};

export default function RegistrationForm() {
  const [form, setForm] = useState(INITIAL_STATE);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const { t } = useLanguage();

  const isLoading = status === "loading";

  const handleChange = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handlePhoneChange = (event) => {
    setForm((prev) => ({ ...prev, phone: formatPhone(event.target.value) }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("loading");

    // Route the lead to both destinations in parallel. We only surface a
    // hard error if BOTH deliveries fail — if just one platform is down
    // (e.g. the Sheets webhook isn't deployed yet) we still show success
    // so the applicant isn't blocked by a backend that's mid-setup.
    const [telegramResult, sheetsResult] = await Promise.allSettled([
      sendToTelegramGroup(form),
      sendToGoogleSheets(form),
    ]);

    if (telegramResult.status === "rejected") {
      console.error("Telegram delivery failed:", telegramResult.reason);
    }
    if (sheetsResult.status === "rejected") {
      console.error("Google Sheets delivery failed:", sheetsResult.reason);
    }

    if (telegramResult.status === "rejected" && sheetsResult.status === "rejected") {
      setStatus("error");
    } else {
      setStatus("success");
    }
  };

  return (
    <section id="register" className="section">
      <div className="shell">
        <div className={styles.registerGrid}>
          <div className={styles.wrapper}>
            <div className="section__head">
              <div className="section__eyebrow eyebrow">{t("register.eyebrow")}</div>
              <h2 className="section__title">{t("register.title")}</h2>
              <p className="section__desc">{t("register.desc")}</p>
            </div>

            <motion.div
              className={`${styles.formCard} gradient-border`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
            >
              {status === "success" ? (
                <div className={styles.success}>
                  <span className={styles.successMark}>✓</span>
                  <h3 className={styles.successTitle}>{t("register.successTitle")}</h3>
                  <p className={styles.successDesc}>{t("register.successDesc")}</p>
                </div>
              ) : (
                <form className={styles.form} onSubmit={handleSubmit}>
                  <label className={styles.field}>
                    <span className={styles.label}>{t("register.fields.fullName.label")}</span>
                    <input
                      className={styles.input}
                      type="text"
                      name="fullName"
                      placeholder={t("register.fields.fullName.placeholder")}
                      value={form.fullName}
                      onChange={handleChange("fullName")}
                      disabled={isLoading}
                      required
                    />
                  </label>

                  <label className={styles.field}>
                    <span className={styles.label}>{t("register.fields.schoolName.label")}</span>
                    <span className={styles.inputWrap}>
                      <School className={styles.inputIcon} size={16} strokeWidth={2} aria-hidden="true" />
                      <input
                        className={`${styles.input} ${styles.inputWithIcon}`}
                        type="text"
                        name="schoolName"
                        placeholder={t("register.fields.schoolName.placeholder")}
                        value={form.schoolName}
                        onChange={handleChange("schoolName")}
                        disabled={isLoading}
                        required
                      />
                    </span>
                  </label>

                  <label className={styles.field}>
                    <span className={styles.label}>{t("register.fields.grade.label")}</span>
                    <span className={styles.inputWrap}>
                      <GraduationCap className={styles.inputIcon} size={16} strokeWidth={2} aria-hidden="true" />
                      <select
                        className={`${styles.input} ${styles.inputWithIcon} ${styles.select}`}
                        name="grade"
                        value={form.grade}
                        onChange={handleChange("grade")}
                        disabled={isLoading}
                        required
                      >
                        <option value="" disabled>
                          {t("register.fields.grade.placeholder")}
                        </option>
                        {GRADE_OPTIONS.map((option) => (
                          <option key={option} value={t(`register.fields.grade.options.${option}`)}>
                            {t(`register.fields.grade.options.${option}`)}
                          </option>
                        ))}
                      </select>
                    </span>
                  </label>

                  <label className={styles.field}>
                    <span className={styles.label}>{t("register.fields.phone.label")}</span>
                    <input
                      className={styles.input}
                      type="tel"
                      name="phone"
                      placeholder={t("register.fields.phone.placeholder")}
                      value={form.phone}
                      onChange={handlePhoneChange}
                      disabled={isLoading}
                      required
                    />
                  </label>

                  <label className={styles.field}>
                    <span className={styles.label}>{t("register.fields.telegramUsername.label")}</span>
                    <span className={styles.inputWrap}>
                      <Send className={styles.inputIcon} size={16} strokeWidth={2} aria-hidden="true" />
                      <input
                        className={`${styles.input} ${styles.inputWithIcon}`}
                        type="text"
                        name="telegramUsername"
                        placeholder={t("register.fields.telegramUsername.placeholder")}
                        value={form.telegramUsername}
                        onChange={handleChange("telegramUsername")}
                        disabled={isLoading}
                        required
                      />
                    </span>
                  </label>

                  <label className={styles.field}>
                    <span className={styles.label}>{t("register.fields.whyStartup.label")}</span>
                    <span className={styles.textareaWrap}>
                      <Lightbulb className={styles.textareaIcon} size={16} strokeWidth={2} aria-hidden="true" />
                      <textarea
                        className={`${styles.input} ${styles.textarea}`}
                        name="whyStartup"
                        placeholder={t("register.fields.whyStartup.placeholder")}
                        value={form.whyStartup}
                        onChange={handleChange("whyStartup")}
                        disabled={isLoading}
                        rows={4}
                        required
                      />
                    </span>
                  </label>

                  <label className={styles.field}>
                    <span className={styles.label}>{t("register.fields.expectations.label")}</span>
                    <span className={styles.textareaWrap}>
                      <Sparkles className={styles.textareaIcon} size={16} strokeWidth={2} aria-hidden="true" />
                      <textarea
                        className={`${styles.input} ${styles.textarea}`}
                        name="expectations"
                        placeholder={t("register.fields.expectations.placeholder")}
                        value={form.expectations}
                        onChange={handleChange("expectations")}
                        disabled={isLoading}
                        rows={4}
                        required
                      />
                    </span>
                  </label>

                  <label className={styles.field}>
                    <span className={styles.label}>{t("register.fields.teamSize.label")}</span>
                    <input
                      className={styles.input}
                      type="number"
                      name="teamSize"
                      placeholder={t("register.fields.teamSize.placeholder")}
                      min="1"
                      max="10"
                      value={form.teamSize}
                      onChange={handleChange("teamSize")}
                      disabled={isLoading}
                      required
                    />
                  </label>

                  {status === "error" && (
                    <div className={styles.errorBox} role="alert">
                      <span className={styles.errorMark}>!</span>
                      <p className={styles.errorText}>{t("register.errorText")}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    className={`btn-pill btn-pill--full ${styles.submit}`}
                    disabled={isLoading}
                  >
                    {isLoading ? t("register.submitLoading") : t("register.submit")}
                  </button>
                </form>
              )}
            </motion.div>
          </div>

          <div className={styles.registerVisual}>
            <IllusionAsset variant="loop" />
          </div>
        </div>
      </div>
    </section>
  );
}
