// Central translation dictionary for the Target Startup Championship page.
// Structure mirrors each section/component so translations stay easy to
// locate. Add a new top-level key per component, keep the same shape
// across uz / ru / en so useLanguage()'s t() lookups never dead-end.

export const LANGUAGES = [
  { code: "uz", label: "UZ" },
  { code: "ru", label: "RU" },
  { code: "en", label: "EN" },
];

export const DEFAULT_LANGUAGE = "uz";

const translations = {
  uz: {
    nav: {
      brand: "Target Startup",
      links: {
        tracks: "Yo'nalishlar",
        prizes: "Sovrinlar",
        timeline: "Jarayon",
        faq: "Savollar",
      },
      cta: "Ro'yxatdan o'tish",
    },
    hero: {
      eyebrow: "Target International School taqdim etadi",
      headline: "Target International School Startup Championship",
      subtitle: "G'oyangizni biznesga aylantiring, nufuzli investorlar va ekspertlar oldida o'z loyihangizni himoya qiling!",
      ctaPrimary: "Chempionatda qatnashish",
      ctaSecondary: "Platformani ko'rish",
      countdownLabel: "Yakuniy pitch kunigacha qoldi",
    },
    countdown: {
      days: "Kun",
      hours: "Soat",
      minutes: "Daqiqa",
      seconds: "Soniya",
    },
    dashboardMockup: {
      titleText: "Startup Chempionati — Boshqaruv paneli",
      searchPlaceholder: "Buyruq yoki loyiha qidirish…",
      rows: {
        submit: { title: "Loyihani yuborish", meta: "EdTech · 12-jamoa" },
        mentor: { title: "Mentor bilan uchrashuv", meta: "Bootcamp · Hafta 3" },
        pitch: { title: "Pitch-deck yuklash", meta: "Grand Final tayyorgarligi" },
        team: { title: "Jamoa a'zolarini boshqarish", meta: "3-5 ta a'zo faol" },
        results: { title: "Baholash natijalari", meta: "Selection bosqichi" },
      },
    },
    metrics: {
      eyebrow: "Chempionat haqida",
      title: "Raqamlarda miqyos",
      desc: "Target International School Startup Championship — maktab o'quvchilari uchun O'zbekistondagi eng yirik tadbirkorlik tanlovi.",
      items: {
        prizePool: {
          value: "22.000.000 so'm",
          label: "Umumiy mukofot jamg'armasi",
          desc: "1, 2 va 3-o'rin jamoalari orasida taqsimlanadi.",
        },
        participants: {
          value: "150 - 250 ta ishtirokchi",
          label: "Kutilayotgan ishtirokchilar",
          desc: "Asosiy tadbir maydonida jamlanadigan startap ishtirokchilari.",
        },
        teams: {
          value: "50 ta jamoa (har bir jamoada 3–5 nafardan ishtirokchi)",
          label: "Raqobatdosh jamoalar",
          desc: "Saralovdan o'tib asosiy tadbirda ishtirok etadigan jamoalar.",
        },
      },
    },
    tracks: {
      eyebrow: "Yo'nalishlar",
      title: "Loyihangiz uchun trek tanlang",
      desc: "To'rtta asosiy kategoriya bo'yicha g'oyangizni taqdim eting va mos mentorlar bilan ishlang.",
      items: {
        edtech: { title: "EdTech", desc: "Ta'lim jarayonini raqamlashtiruvchi va o'qishni yanada samarali qiluvchi yechimlar." },
        greentech: { title: "GreenTech", desc: "Ekologik barqarorlik va resurslarni tejashga qaratilgan innovatsion loyihalar." },
        ai: { title: "AI Solutions", desc: "Sun'iy intellekt asosida real muammolarni hal qiluvchi mahsulotlar." },
        social: { title: "Social Impact", desc: "Jamiyatga ijtimoiy foyda keltiruvchi va muammolarni hal qiluvchi startaplar." },
      },
    },
    requirements: {
      eyebrow: "Talablar",
      title: "Qatnashish shartlari",
      desc: "Chempionatda ishtirok etish uchun quyidagi 3 ta shartga rioya qilish zarur.",
      items: {
        ageLimit: {
          label: "Yosh chegarasi",
          desc: "Ishtirokchilar Target maktabining 5-sinfidan 10-sinfgacha bo'lgan o'quvchilari bo'lishi lozim.",
        },
        teamSize: {
          label: "Jamoa tarkibi",
          desc: "Ro'yxatdan o'tishdan oldin jamoada qat'iy ravishda 3 nafar ishtirokchi shakllantirilgan bo'lishi kerak.",
        },
        codingSkill: {
          label: "Dasturlash ko'nikmasi",
          desc: "Jamoa a'zolaridan kamida bir kishi coding (dasturlash) qobiliyatiga ega bo'lishi shart.",
        },
      },
    },
    prizes: {
      eyebrow: "Asosiy Yutuqlar",
      title: "G'olib jamoalarni kutmoqda",
      desc: "Final bosqichida g'olib bo'lgan jamoalar quyidagi pul mukofotlari, diplom va sertifikatlar bilan taqdirlanadi.",
      items: {
        first: { place: "1-o'rin jamoasi uchun", amount: "10.000.000 so'm" },
        second: { place: "2-o'rin jamoasi uchun", amount: "7.000.000 so'm" },
        third: { place: "3-o'rin jamoasi uchun", amount: "5.000.000 so'm" },
      },
      incentiveBefore: "Barcha qolgan ishtirokchilarga Target IT kurslariga ",
      incentiveBold: "30% chegirma",
      incentiveAfter: " taqdim etiladi!",
    },
    timeline: {
      eyebrow: "Tadbir Yo'l Xaritasi",
      title: "3 bosqichda g'oyadan g'alabagacha",
      desc: "Ro'yxatdan tortib Grand Finalgacha — har bir bosqichda sizni nima kutayotganini bilib oling.",
      stages: {
        stage1: {
          number: "I bosqich",
          title: "Onlayn — Ro'yxatga olish va saralash",
          badge: "Ochiq va bepul ro'yxatdan o'tish",
          tasks: {
            t1: "Rasmiy veb-sayt orqali onlayn ariza topshirish oson va tezkor.",
            t2: "Loyihangizni tanishtiruvchi qisqa video orqali g'oyangizni namoyish eting.",
            t3: "Barcha yangiliklar va e'lonlar rasmiy Telegram kanalida e'lon qilinadi.",
            t4: "Savol va takliflaringiz uchun qo'llab-quvvatlash jamoasi doim yordamga tayyor.",
            t5: "Ekspertlar hay'ati barcha arizalarni chuqur tahlil qilib, eng munosib jamoalarni saralaydi.",
          },
        },
        stage2: {
          number: "II bosqich",
          title: "Asosiy Tadbir — Bootcamp va Saralash Kuni",
          badge: "150 ishtirokchi, 50 jamoa",
          tasks: {
            t1: "Barcha ishtirokchilarga maxsus Target brendli badge va tadbir materiallari taqdim etiladi.",
            t2: "Zamonaviy va qulay tadbir maydonida barcha ishtirokchilarni kutib olamiz.",
            t3: "Ro'yxatdan o'tish va yo'naltirish uchun mehmondo'st jamoa har doim yordamga tayyor.",
            t4: "Barcha texnik jarayonlar barqaror va uzluksiz internet aloqasi bilan ta'minlanadi.",
            t5: "Tadbir davomida ishtirokchilarga yo'l-yo'riq ko'rsatib boradigan shaxsiy tutorlar biriktiriladi.",
            t6: "Tajribali IT va biznes ekspertlaridan tashkil topgan mentorlar jamoangiz bilan bevosita ishlaydi.",
            t7: "Barcha startap jamoasi a'zolariga rasmiy ishtirok sertifikati taqdim etiladi.",
            t8: "Har bir ishtirokchi Target logotipli maxsus esdalik sovg'asini qo'lga kiritadi.",
            t9: "IT va startap sohasining yetakchi vakillari mehmon spiker sifatida chiqish qiladi.",
            t10: "Eng kuchli 10 ta jamoa Grand Finalga yo'llanma oladi.",
            t11: "Saralangan jamoalar uchun 1 oylik \"Start-up Hub\" akseleratsiya dasturi tashkil etiladi.",
            t12: "Kun davomida to'yimli ovqatlanish va kofe-breyklar tashkil etiladi.",
            t13: "Networking uchun maxsus vaqt ajratilib, boshqa jamoalar va mentorlar bilan tanishish imkoniyati yaratiladi.",
          },
        },
        stage3: {
          number: "III bosqich",
          title: "Final — Taqdimot va Taqdirlash",
          badge: "Demo Day & Grand Ceremony",
          tasks: {
            t1: "Eng yaxshi 10 ta jamoa o'z startap loyihalarini nufuzli hakamlar hay'ati oldida taqdim etadi.",
            t2: "Barcha mehmonlar va ishtirokchilar uchun yuqori darajadagi qulay tadbir muhiti tashkil etiladi.",
            t3: "Hakamlar hay'ati aniq mezonlar asosida g'oliblarni adolatli tanlaydi.",
            t4: "G'olib jamoalar qimmatli pul mukofotlari, diplom, sertifikat va maxsus sovg'alar bilan taqdirlanadi.",
            t5: "Tadbir taniqli mehmon spikerlarning ilhomlantiruvchi nutqlari bilan yakunlanadi.",
          },
        },
      },
    },
    register: {
      eyebrow: "Ro'yxatdan o'tish",
      title: "Jamoangizni ro'yxatga oling",
      desc: "Ariza 3 daqiqa vaqt oladi. Tasdiqlangandan so'ng operatorlarimiz siz bilan bog'lanadi.",
      fields: {
        fullName: { label: "To'liq ism", placeholder: "Aliyev Vali" },
        phone: { label: "Telefon raqami", placeholder: "+998 __ ___-__-__" },
        telegramUsername: { label: "Telegram foydalanuvchi nomi (Username)", placeholder: "@username yoki ism_familiya" },
        whyStartup: { label: "Nima uchun startup qurmoqchisiz?", placeholder: "G'oyangiz va maqsadingiz haqida qisqacha yozing..." },
        expectations: { label: "Target Hackathondan nimalarni kutyapsiz?", placeholder: "Tajriba, mentorlik, tarmoq... nimani kutasiz?" },
        teamSize: { label: "Jamoa a'zolari soni", placeholder: "Masalan, 4" },
      },
      errorText: "Arizani yuborishda xatolik yuz berdi. Internet aloqasini tekshirib, qaytadan urinib ko'ring.",
      submit: "Arizani yuborish",
      submitLoading: "Yuborilmoqda...",
      successTitle: "Ariza qabul qilindi",
      successDesc: "Tez orada operatorlarimiz siz bilan bog'lanadi.",
    },
    faq: {
      eyebrow: "Savol-javob",
      title: "Ko'p beriladigan savollar",
      items: {
        q1: { question: "Kimlar ishtirok eta oladi?", answer: "O'zbekistondagi istalgan maktab yoki akademik litsey o'quvchilaridan iborat 2–6 kishilik jamoalar ishtirok etishi mumkin." },
        q2: { question: "Ishtirok bepulmi?", answer: "Ha, chempionatda ishtirok etish to'liq bepul. Barcha bootcamp va mentorlik dasturlari tashkilotchilar tomonidan qoplanadi." },
        q3: { question: "Loyiha g'oyasi tayyor bo'lishi shartmi?", answer: "Yo'q. Boshlang'ich g'oya yetarli — bootcamp davomida mentorlar bilan birgalikda uni to'liq mahsulotga aylantirasiz." },
        q4: { question: "Qanday hujjatlar talab qilinadi?", answer: "Ro'yxatdan o'tishda jamoa a'zolarining ismi, maktab nomi va loyiha qisqacha tavsifi kifoya qiladi." },
      },
    },
    footer: {
      columns: {
        championship: {
          title: "Chempionat",
          links: { tracks: "Yo'nalishlar", timeline: "Jarayon", prizes: "Sovrinlar", register: "Ro'yxatdan o'tish" },
        },
        participants: {
          title: "Ishtirokchilar",
          links: { rules: "Qoidalar", criteria: "Baholash mezonlari", mentors: "Mentorlar", bootcamp: "Bootcamp" },
        },
        organizers: {
          title: "Tashkilotchilar",
          links: { school: "Target International School", partners: "Hamkorlar", media: "Media uchun", volunteers: "Ko'ngillilar" },
        },
        resources: {
          title: "Resurslar",
          links: { pitchDeck: "Pitch-deck shabloni", budget: "Byudjet shabloni", faq: "FAQ", contact: "Aloqa" },
        },
        legal: {
          title: "Huquqiy",
          links: { terms: "Foydalanish shartlari", privacy: "Maxfiylik siyosati", cookies: "Cookie siyosati" },
        },
        contact: {
          title: "Aloqa",
          links: { email: "info@targetschool.uz", phone: "+998 71 200-00-00", address: "Toshkent, O'zbekiston" },
        },
      },
      rightsReserved: "Barcha huquqlar himoyalangan.",
    },
  },

  ru: {
    nav: {
      brand: "Target Startup",
      links: {
        tracks: "Направления",
        prizes: "Призы",
        timeline: "Процесс",
        faq: "Вопросы",
      },
      cta: "Регистрация",
    },
    hero: {
      eyebrow: "Представлено Target International School",
      headline: "Чемпионат стартапов Target International School",
      subtitle: "Превратите свою идею в бизнес и защитите свой проект перед влиятельными инвесторами и экспертами!",
      ctaPrimary: "Участвовать в чемпионате",
      ctaSecondary: "Посмотреть платформу",
      countdownLabel: "Осталось до финального питча",
    },
    countdown: {
      days: "Дни",
      hours: "Часы",
      minutes: "Минуты",
      seconds: "Секунды",
    },
    dashboardMockup: {
      titleText: "Чемпионат стартапов — Панель управления",
      searchPlaceholder: "Поиск команды или проекта…",
      rows: {
        submit: { title: "Отправить проект", meta: "EdTech · Команда 12" },
        mentor: { title: "Встреча с ментором", meta: "Буткемп · Неделя 3" },
        pitch: { title: "Загрузить питч-дек", meta: "Подготовка к Grand Final" },
        team: { title: "Управление командой", meta: "3–5 активных участников" },
        results: { title: "Результаты оценки", meta: "Этап отбора" },
      },
    },
    metrics: {
      eyebrow: "О чемпионате",
      title: "Масштаб в цифрах",
      desc: "Target International School Startup Championship — крупнейший конкурс предпринимательства в Узбекистане для школьников.",
      items: {
        prizePool: {
          value: "22 000 000 сум",
          label: "Общий призовой фонд",
          desc: "Распределяется между командами 1, 2 и 3 места.",
        },
        participants: {
          value: "150–250 участников",
          label: "Ожидаемые участники",
          desc: "Участники стартап-мероприятия на основной площадке.",
        },
        teams: {
          value: "50 команд (по 3–5 участников в каждой)",
          label: "Команды-участницы",
          desc: "Команды, прошедшие отбор для участия в основном мероприятии.",
        },
      },
    },
    tracks: {
      eyebrow: "Направления",
      title: "Выберите трек для своего проекта",
      desc: "Представьте свою идею по одной из четырёх основных категорий и работайте с подходящими менторами.",
      items: {
        edtech: { title: "EdTech", desc: "Решения, которые оцифровывают образовательный процесс и делают обучение эффективнее." },
        greentech: { title: "GreenTech", desc: "Инновационные проекты, направленные на экологическую устойчивость и экономию ресурсов." },
        ai: { title: "AI Solutions", desc: "Продукты на основе искусственного интеллекта, решающие реальные проблемы." },
        social: { title: "Social Impact", desc: "Стартапы, приносящие пользу обществу и решающие социальные проблемы." },
      },
    },
    requirements: {
      eyebrow: "Требования",
      title: "Условия участия",
      desc: "Чтобы принять участие в чемпионате, необходимо соответствовать следующим 3 условиям.",
      items: {
        ageLimit: {
          label: "Возрастное ограничение",
          desc: "Участниками должны быть учащиеся школы Target с 5-го по 10-й класс.",
        },
        teamSize: {
          label: "Состав команды",
          desc: "Перед регистрацией в команде должно быть строго сформировано 3 участника.",
        },
        codingSkill: {
          label: "Навыки программирования",
          desc: "Как минимум один член команды должен обладать навыками кодинга (программирования).",
        },
      },
    },
    prizes: {
      eyebrow: "Главные призы",
      title: "Победителей ждут призы",
      desc: "Команды-победители финального этапа получат следующие денежные призы, дипломы и сертификаты.",
      items: {
        first: { place: "За 1-е место", amount: "10 000 000 сум" },
        second: { place: "За 2-е место", amount: "7 000 000 сум" },
        third: { place: "За 3-е место", amount: "5 000 000 сум" },
      },
      incentiveBefore: "Всем остальным участникам предоставляется ",
      incentiveBold: "скидка 30%",
      incentiveAfter: " на курсы Target IT!",
    },
    timeline: {
      eyebrow: "Дорожная карта мероприятия",
      title: "От идеи к победе за 3 этапа",
      desc: "От регистрации до Grand Final — узнайте, что вас ждёт на каждом этапе.",
      stages: {
        stage1: {
          number: "I этап",
          title: "Онлайн — Регистрация и отбор",
          badge: "Открытая и бесплатная регистрация",
          tasks: {
            t1: "Подать заявку через официальный сайт легко и быстро.",
            t2: "Продемонстрируйте свою идею с помощью короткого видео о проекте.",
            t3: "Все новости и объявления публикуются в официальном Telegram-канале.",
            t4: "Команда поддержки всегда готова помочь с вашими вопросами и предложениями.",
            t5: "Экспертная комиссия внимательно рассматривает все заявки и отбирает самые достойные команды.",
          },
        },
        stage2: {
          number: "II этап",
          title: "Основное мероприятие — Буткемп и день отбора",
          badge: "150 участников, 50 команд",
          tasks: {
            t1: "Все участники получают именной бейдж Target и материалы мероприятия.",
            t2: "Мы встречаем всех участников на современной и комфортной площадке.",
            t3: "Дружелюбная команда всегда готова помочь с регистрацией и навигацией.",
            t4: "Все технические процессы обеспечены стабильным и бесперебойным интернет-соединением.",
            t5: "На протяжении мероприятия участников сопровождают персональные тьюторы.",
            t6: "Опытные менторы из сферы IT и бизнеса работают напрямую с вашей командой.",
            t7: "Все участники стартап-команд получают официальный сертификат участия.",
            t8: "Каждый участник получает памятный подарок с логотипом Target.",
            t9: "Ведущие представители IT и стартап-индустрии выступят в качестве приглашённых спикеров.",
            t10: "10 сильнейших команд выходят в Grand Final.",
            t11: "Для отобранных команд организуется месячная акселерационная программа \"Start-up Hub\".",
            t12: "В течение дня организовано полноценное питание и кофе-брейки.",
            t13: "Выделяется специальное время для нетворкинга и знакомства с другими командами и менторами.",
          },
        },
        stage3: {
          number: "III этап",
          title: "Финал — Презентация и награждение",
          badge: "Demo Day & Grand Ceremony",
          tasks: {
            t1: "10 лучших команд представят свои стартап-проекты перед авторитетным жюри.",
            t2: "Для всех гостей и участников создаётся комфортная атмосфера высокого уровня.",
            t3: "Жюри честно определяет победителей на основе чётких критериев.",
            t4: "Команды-победители награждаются ценными денежными призами, дипломами, сертификатами и специальными подарками.",
            t5: "Мероприятие завершается вдохновляющими речами известных приглашённых спикеров.",
          },
        },
      },
    },
    register: {
      eyebrow: "Регистрация",
      title: "Зарегистрируйте свою команду",
      desc: "Заявка занимает 3 минуты. После подтверждения наши операторы свяжутся с вами.",
      fields: {
        fullName: { label: "Полное имя", placeholder: "Алиев Вали" },
        phone: { label: "Номер телефона", placeholder: "+998 __ ___-__-__" },
        telegramUsername: { label: "Имя пользователя Telegram (Username)", placeholder: "@username или имя_фамилия" },
        whyStartup: { label: "Почему вы хотите создать стартап?", placeholder: "Кратко расскажите о своей идее и цели..." },
        expectations: { label: "Чего вы ожидаете от Target Hackathon?", placeholder: "Опыт, менторство, нетворкинг... чего вы ждёте?" },
        teamSize: { label: "Количество участников команды", placeholder: "Например, 4" },
      },
      errorText: "Произошла ошибка при отправке заявки. Проверьте подключение к интернету и попробуйте снова.",
      submit: "Отправить заявку",
      submitLoading: "Отправка...",
      successTitle: "Заявка принята",
      successDesc: "Наши операторы скоро свяжутся с вами.",
    },
    faq: {
      eyebrow: "Вопросы и ответы",
      title: "Часто задаваемые вопросы",
      items: {
        q1: { question: "Кто может участвовать?", answer: "Участвовать могут команды из 2–6 человек, состоящие из учащихся любой школы или академического лицея Узбекистана." },
        q2: { question: "Участие бесплатное?", answer: "Да, участие в чемпионате полностью бесплатное. Все буткемпы и менторские программы оплачиваются организаторами." },
        q3: { question: "Обязательно ли иметь готовую идею проекта?", answer: "Нет. Достаточно начальной идеи — во время буткемпа вы вместе с менторами превратите её в полноценный продукт." },
        q4: { question: "Какие документы требуются?", answer: "При регистрации достаточно указать имена участников команды, название школы и краткое описание проекта." },
      },
    },
    footer: {
      columns: {
        championship: {
          title: "Чемпионат",
          links: { tracks: "Направления", timeline: "Процесс", prizes: "Призы", register: "Регистрация" },
        },
        participants: {
          title: "Участникам",
          links: { rules: "Правила", criteria: "Критерии оценки", mentors: "Менторы", bootcamp: "Буткемп" },
        },
        organizers: {
          title: "Организаторы",
          links: { school: "Target International School", partners: "Партнёры", media: "Для СМИ", volunteers: "Волонтёры" },
        },
        resources: {
          title: "Ресурсы",
          links: { pitchDeck: "Шаблон питч-дека", budget: "Шаблон бюджета", faq: "FAQ", contact: "Контакты" },
        },
        legal: {
          title: "Правовая информация",
          links: { terms: "Условия использования", privacy: "Политика конфиденциальности", cookies: "Политика cookie" },
        },
        contact: {
          title: "Контакты",
          links: { email: "info@targetschool.uz", phone: "+998 71 200-00-00", address: "Ташкент, Узбекистан" },
        },
      },
      rightsReserved: "Все права защищены.",
    },
  },

  en: {
    nav: {
      brand: "Target Startup",
      links: {
        tracks: "Tracks",
        prizes: "Prizes",
        timeline: "Process",
        faq: "FAQ",
      },
      cta: "Register",
    },
    hero: {
      eyebrow: "Presented by Target International School",
      headline: "Target International School Startup Championship",
      subtitle: "Turn your idea into a business and pitch your project to influential investors and experts!",
      ctaPrimary: "Join the Championship",
      ctaSecondary: "View the Platform",
      countdownLabel: "Time left until the final pitch",
    },
    countdown: {
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      seconds: "Seconds",
    },
    dashboardMockup: {
      titleText: "Startup Championship — Dashboard",
      searchPlaceholder: "Search for a command or project…",
      rows: {
        submit: { title: "Submit project", meta: "EdTech · Team 12" },
        mentor: { title: "Meet with a mentor", meta: "Bootcamp · Week 3" },
        pitch: { title: "Upload pitch deck", meta: "Grand Final preparation" },
        team: { title: "Manage team members", meta: "3–5 active members" },
        results: { title: "Evaluation results", meta: "Selection stage" },
      },
    },
    metrics: {
      eyebrow: "About the Championship",
      title: "Scale in numbers",
      desc: "Target International School Startup Championship — the largest entrepreneurship competition in Uzbekistan for school students.",
      items: {
        prizePool: {
          value: "22,000,000 UZS",
          label: "Total prize pool",
          desc: "Split between the 1st, 2nd, and 3rd place teams.",
        },
        participants: {
          value: "150–250 participants",
          label: "Expected participants",
          desc: "Startup participants gathering at the main event venue.",
        },
        teams: {
          value: "50 teams (3–5 members each)",
          label: "Competing teams",
          desc: "Teams that pass selection to compete at the main event.",
        },
      },
    },
    tracks: {
      eyebrow: "Tracks",
      title: "Choose a track for your project",
      desc: "Pitch your idea in one of four core categories and work with matching mentors.",
      items: {
        edtech: { title: "EdTech", desc: "Solutions that digitize education and make learning more effective." },
        greentech: { title: "GreenTech", desc: "Innovative projects focused on environmental sustainability and resource efficiency." },
        ai: { title: "AI Solutions", desc: "AI-powered products that solve real-world problems." },
        social: { title: "Social Impact", desc: "Startups that bring social benefit and solve community problems." },
      },
    },
    requirements: {
      eyebrow: "Requirements",
      title: "Participation Requirements",
      desc: "To take part in the championship, you must meet the following 3 requirements.",
      items: {
        ageLimit: {
          label: "Age Limit",
          desc: "Participants must be Target School students from 5th to 10th grade.",
        },
        teamSize: {
          label: "Team Composition",
          desc: "A team of strictly 3 participants must be formed prior to registration.",
        },
        codingSkill: {
          label: "Programming Skills",
          desc: "At least one team member must have coding/programming skills.",
        },
      },
    },
    prizes: {
      eyebrow: "Main Prizes",
      title: "Awaiting the winning teams",
      desc: "Teams that win the final stage will be awarded the following cash prizes, diplomas, and certificates.",
      items: {
        first: { place: "For 1st place", amount: "10,000,000 UZS" },
        second: { place: "For 2nd place", amount: "7,000,000 UZS" },
        third: { place: "For 3rd place", amount: "5,000,000 UZS" },
      },
      incentiveBefore: "All remaining participants receive a ",
      incentiveBold: "30% discount",
      incentiveAfter: " on Target IT courses!",
    },
    timeline: {
      eyebrow: "Event Roadmap",
      title: "From idea to victory in 3 stages",
      desc: "From registration to the Grand Final — find out what awaits you at every stage.",
      stages: {
        stage1: {
          number: "Stage I",
          title: "Online — Registration & Selection",
          badge: "Open and free registration",
          tasks: {
            t1: "Submitting an application via the official website is quick and easy.",
            t2: "Showcase your idea with a short video introducing your project.",
            t3: "All news and announcements are posted in the official Telegram channel.",
            t4: "Our support team is always ready to help with your questions.",
            t5: "The expert panel carefully reviews every application and selects the most deserving teams.",
          },
        },
        stage2: {
          number: "Stage II",
          title: "Main Event — Bootcamp & Selection Day",
          badge: "150 participants, 50 teams",
          tasks: {
            t1: "All participants receive a branded Target badge and event materials.",
            t2: "We welcome all participants at a modern, comfortable venue.",
            t3: "A friendly team is always on hand to help with check-in and orientation.",
            t4: "All technical processes are backed by stable, uninterrupted internet access.",
            t5: "Participants are paired with personal tutors who guide them throughout the event.",
            t6: "Experienced IT and business mentors work directly with your team.",
            t7: "All startup team members receive an official certificate of participation.",
            t8: "Every participant receives a special Target-branded keepsake gift.",
            t9: "Leading figures from the IT and startup industry appear as guest speakers.",
            t10: "The strongest 10 teams advance to the Grand Final.",
            t11: "Selected teams join a 1-month \"Start-up Hub\" acceleration program.",
            t12: "Full meals and coffee breaks are provided throughout the day.",
            t13: "Dedicated networking time lets you connect with other teams and mentors.",
          },
        },
        stage3: {
          number: "Stage III",
          title: "Final — Pitch & Awards",
          badge: "Demo Day & Grand Ceremony",
          tasks: {
            t1: "The top 10 teams pitch their startup projects to a distinguished panel of judges.",
            t2: "A premium, comfortable environment is set up for all guests and participants.",
            t3: "The judging panel fairly selects winners based on clear criteria.",
            t4: "Winning teams are awarded valuable cash prizes, diplomas, certificates, and special gifts.",
            t5: "The event closes with inspiring speeches from renowned guest speakers.",
          },
        },
      },
    },
    register: {
      eyebrow: "Registration",
      title: "Register your team",
      desc: "The application takes 3 minutes. Our team will reach out once it's confirmed.",
      fields: {
        fullName: { label: "Full name", placeholder: "Aliyev Vali" },
        phone: { label: "Phone number", placeholder: "+998 __ ___-__-__" },
        telegramUsername: { label: "Telegram username", placeholder: "@username or first_last" },
        whyStartup: { label: "Why do you want to build a startup?", placeholder: "Briefly share your idea and motivation..." },
        expectations: { label: "What are your expectations from Target Hackathon?", placeholder: "Experience, mentorship, networking... what are you hoping for?" },
        teamSize: { label: "Team size", placeholder: "e.g., 4" },
      },
      errorText: "Something went wrong while submitting. Please check your connection and try again.",
      submit: "Submit application",
      submitLoading: "Submitting...",
      successTitle: "Application received",
      successDesc: "Our team will contact you shortly.",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Frequently asked questions",
      items: {
        q1: { question: "Who can participate?", answer: "Teams of 2–6 students from any school or academic lyceum in Uzbekistan can take part." },
        q2: { question: "Is participation free?", answer: "Yes, taking part in the championship is completely free. All bootcamps and mentorship programs are covered by the organizers." },
        q3: { question: "Do I need a ready project idea?", answer: "No. An early-stage idea is enough — during the bootcamp you'll develop it into a full product together with mentors." },
        q4: { question: "What documents are required?", answer: "At registration, just the team members' names, school name, and a short project description are enough." },
      },
    },
    footer: {
      columns: {
        championship: {
          title: "Championship",
          links: { tracks: "Tracks", timeline: "Process", prizes: "Prizes", register: "Register" },
        },
        participants: {
          title: "Participants",
          links: { rules: "Rules", criteria: "Judging criteria", mentors: "Mentors", bootcamp: "Bootcamp" },
        },
        organizers: {
          title: "Organizers",
          links: { school: "Target International School", partners: "Partners", media: "For media", volunteers: "Volunteers" },
        },
        resources: {
          title: "Resources",
          links: { pitchDeck: "Pitch deck template", budget: "Budget template", faq: "FAQ", contact: "Contact" },
        },
        legal: {
          title: "Legal",
          links: { terms: "Terms of use", privacy: "Privacy policy", cookies: "Cookie policy" },
        },
        contact: {
          title: "Contact",
          links: { email: "info@targetschool.uz", phone: "+998 71 200-00-00", address: "Tashkent, Uzbekistan" },
        },
      },
      rightsReserved: "All rights reserved.",
    },
  },
};

export default translations;
