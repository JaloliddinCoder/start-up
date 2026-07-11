import { useState } from "react";
import { motion } from "framer-motion";
import { Link, Send } from "lucide-react";
import IllusionAsset from "./IllusionAsset";
import styles from "./RegistrationForm.module.css";

const PHONE_PREFIX = "+998 ";

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
    "🚨 *YANGI ARIZA: Target International School Startup Championship* 🚨",
    "",
    `👤 *Ism va Familiya:* ${form.fullName}`,
    `📞 *Telefon:* ${form.phone}`,
    `📱 *Telegram:* ${form.telegramUsername}`,
    `💡 *Loyiha nomi:* ${form.projectTitle}`,
    `🌐 *Loyiha sayti:* ${form.projectUrl}`,
    `👥 *Jamoa a'zolari:* ${form.teamSize}`,
    `📝 *G'oya qisqacha:* —`,
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

const INITIAL_STATE = {
  fullName: "",
  phone: PHONE_PREFIX,
  telegramUsername: "",
  projectTitle: "",
  projectUrl: "",
  teamSize: "",
};

export default function RegistrationForm() {
  const [form, setForm] = useState(INITIAL_STATE);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

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

    try {
      await sendToTelegramGroup(form);
      setStatus("success");
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="register" className="section">
      <div className="shell">
        <div className={styles.registerGrid}>
          <div className={styles.wrapper}>
            <div className="section__head">
              <div className="section__eyebrow eyebrow">Ro'yxatdan o'tish</div>
              <h2 className="section__title">Jamoangizni ro'yxatga oling</h2>
              <p className="section__desc">
                Ariza 3 daqiqa vaqt oladi. Tasdiqlangandan so'ng operatorlarimiz siz bilan bog'lanadi.
              </p>
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
                  <h3 className={styles.successTitle}>Ariza qabul qilindi</h3>
                  <p className={styles.successDesc}>
                    Tez orada operatorlarimiz siz bilan bog'lanadi.
                  </p>
                </div>
              ) : (
                <form className={styles.form} onSubmit={handleSubmit}>
                  <label className={styles.field}>
                    <span className={styles.label}>To'liq ism</span>
                    <input
                      className={styles.input}
                      type="text"
                      name="fullName"
                      placeholder="Aliyev Vali"
                      value={form.fullName}
                      onChange={handleChange("fullName")}
                      disabled={isLoading}
                      required
                    />
                  </label>

                  <label className={styles.field}>
                    <span className={styles.label}>Telefon raqami</span>
                    <input
                      className={styles.input}
                      type="tel"
                      name="phone"
                      placeholder="+998 __ ___-__-__"
                      value={form.phone}
                      onChange={handlePhoneChange}
                      disabled={isLoading}
                      required
                    />
                  </label>

                  <label className={styles.field}>
                    <span className={styles.label}>Telegram foydalanuvchi nomi (Username)</span>
                    <span className={styles.inputWrap}>
                      <Send className={styles.inputIcon} size={16} strokeWidth={2} aria-hidden="true" />
                      <input
                        className={`${styles.input} ${styles.inputWithIcon}`}
                        type="text"
                        name="telegramUsername"
                        placeholder="@username yoki ism_familiya"
                        value={form.telegramUsername}
                        onChange={handleChange("telegramUsername")}
                        disabled={isLoading}
                        required
                      />
                    </span>
                  </label>

                  <label className={styles.field}>
                    <span className={styles.label}>Loyiha nomi</span>
                    <input
                      className={styles.input}
                      type="text"
                      name="projectTitle"
                      placeholder="Loyihangiz nomini kiriting"
                      value={form.projectTitle}
                      onChange={handleChange("projectTitle")}
                      disabled={isLoading}
                      required
                    />
                  </label>

                  <label className={styles.field}>
                    <span className={styles.label}>Loyiha saytining havolasi (URL)</span>
                    <span className={styles.inputWrap}>
                      <Link className={styles.inputIcon} size={16} strokeWidth={2} aria-hidden="true" />
                      <input
                        className={`${styles.input} ${styles.inputWithIcon}`}
                        type="url"
                        name="projectUrl"
                        placeholder="https://loyiha-nomi.uz"
                        value={form.projectUrl}
                        onChange={handleChange("projectUrl")}
                        disabled={isLoading}
                        required
                      />
                    </span>
                  </label>

                  <label className={styles.field}>
                    <span className={styles.label}>Jamoa a'zolari soni</span>
                    <input
                      className={styles.input}
                      type="number"
                      name="teamSize"
                      placeholder="Masalan, 4"
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
                      <p className={styles.errorText}>
                        Arizani yuborishda xatolik yuz berdi. Internet aloqasini
                        tekshirib, qaytadan urinib ko'ring.
                      </p>
                    </div>
                  )}

                  <button
                    type="submit"
                    className={`btn-pill btn-pill--full ${styles.submit}`}
                    disabled={isLoading}
                  >
                    {isLoading ? "Yuborilmoqda..." : "Arizani yuborish"}
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
