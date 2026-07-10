import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "lucide-react";
import IllusionAsset from "./IllusionAsset";
import styles from "./RegistrationForm.module.css";

const PHONE_PREFIX = "+998 ";

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

const INITIAL_STATE = {
  fullName: "",
  phone: PHONE_PREFIX,
  projectTitle: "",
  projectUrl: "",
  teamSize: "",
};

export default function RegistrationForm() {
  const [form, setForm] = useState(INITIAL_STATE);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handlePhoneChange = (event) => {
    setForm((prev) => ({ ...prev, phone: formatPhone(event.target.value) }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
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
                Ariza 3 daqiqa vaqt oladi. Tasdiqlangandan so'ng platformaga
                kirish ma'lumotlari email orqali yuboriladi.
              </p>
            </div>

            <motion.div
              className={`${styles.formCard} gradient-border`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
            >
              {submitted ? (
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
                      required
                    />
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
                      required
                    />
                  </label>

                  <button type="submit" className={`btn-pill btn-pill--full ${styles.submit}`}>
                    Arizani yuborish
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
