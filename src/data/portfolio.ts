import type { PortfolioData } from "@/types/portfolio";

const fallbackSiteUrl = "https://www.heshamali.com";

export const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || fallbackSiteUrl,
).origin;

export const personId = `${siteUrl}/#person`;
export const websiteId = `${siteUrl}/#website`;

const whatsappMessage =
  "مرحبًا هشام، لدي متجر على سلة وأرغب في مراجعة تصميمه وتطويره. رابط المتجر: ";

export const portfolio: PortfolioData = {
  person: {
    name: "هشام علي",
    shortName: "هشام",
    role: "Salla Store Designer & Developer",
    location: "الإسكندرية، مصر",
    email: "heshamali.dev@gmail.com",
    whatsapp: {
      number: "+20 102 724 7079",
      url: `https://wa.me/201027247079?text=${encodeURIComponent(whatsappMessage)}`,
      label: "أرسل رابط متجرك",
      ariaLabel: "أرسل رابط متجرك لهشام على واتساب — يفتح في نافذة جديدة",
    },
    linkedInUrl: "https://www.linkedin.com/in/hesham-ali-dev/",
    githubUrl: "https://github.com/hesham0ali",
    cvUrl: "/hesham-ali-cv.pdf",
  },
  navigation: [
    { label: "الرئيسية", href: "/" },
    { label: "الخدمات", href: "/services" },
    { label: "الأعمال", href: "/projects" },
    { label: "عني", href: "/about" },
    { label: "تواصل", href: "/#contact" },
  ],
  hero: {
    eyebrow: "مطور متاجر سلة",
    headline: "أصمم وأطوّر متاجر سلة من البداية للنهاية.",
    description:
      "من تصميم الواجهة وتجهيز المتجر، إلى تخصيص الثيم وتحسين تجربة التصفح والشراء على الجوال.",
    supportingText:
      "لو عندك متجر قائم، ابعت رابطه واذكر التعديلات اللي محتاجها. ولو لسه بتبدأ، نحدد المطلوب قبل التنفيذ.",
  },
  proof: [
    { value: "من البداية للنهاية", label: "تصميم وتطوير كامل" },
    { value: "CSS وJavaScript", label: "تخصيص الثيم" },
    { value: "بعد الإطلاق", label: "متابعة وصيانة مستمرة" },
  ],
  about: {
    heading: "هشام علي",
    paragraphs: [
      "مطور متاجر سلة.",
      "أركز على تصميم وتطوير متاجر سلة، من بناء الواجهة وتجهيز المتجر إلى تخصيص الثيم والتعديلات الفنية حسب احتياج المشروع.",
    ],
  },
  expertise: [
    {
      number: "01",
      title: "إنشاء وتجهيز متاجر سلة",
      label: "Store Setup",
      description:
        "تجهيز متجر سلة من البداية، ضبط الإعدادات الأساسية، تنظيم الصفحات، وتهيئة تجربة شراء واضحة قبل الإطلاق.",
      capabilities: [
        "ضبط الإعدادات الأساسية",
        "تنظيم الصفحات والتصنيفات",
        "رفع وتنظيم المنتجات",
        "إعداد خيارات الدفع والشحن",
      ],
      inquiryTemplate: `مرحبًا هشام، أرغب في الاستفسار عن خدمة إنشاء وتجهيز متجر سلة.

تفاصيل المشروع:
`,
      href: "/services/salla-store-design",
      ctaLabel: "تفاصيل الخدمة",
    },
    {
      number: "02",
      title: "تصميم وتخصيص متاجر سلة",
      label: "Store Design & Customization",
      description:
        "تصميم واجهة المتجر وتخصيص الثيم بما يناسب هوية البراند ويحسن وضوح المحتوى وتجربة التصفح والشراء.",
      capabilities: [
        "تصميم واجهة وصفحة المتجر الرئيسية",
        "تخصيص الثيم والهوية البصرية",
        "تصميم الأقسام والمحتوى البصري",
        "تحسين التجربة على الجوال",
      ],
      inquiryTemplate: `مرحبًا هشام، أرغب في الاستفسار عن خدمة تصميم وتخصيص متجر سلة.

رابط المتجر إن وجد:
تفاصيل المطلوب:
`,
      href: "/services/salla-store-design#customization-heading",
      ctaLabel: "تفاصيل الخدمة",
    },
    {
      number: "03",
      title: "تطوير ثيمات سلة",
      label: "Salla Theme Development",
      description:
        "تطوير أو تعديل ثيمات سلة وSections مخصصة عندما يحتاج المشروع مستوى أعلى من التخصيص.",
      capabilities: [
        "تطوير وتخصيص الثيم",
        "Custom Sections وTwilight",
        "Frontend Development",
        "تخصيص CSS وJavaScript",
      ],
      inquiryTemplate: `مرحبًا هشام، أرغب في الاستفسار عن خدمة تطوير ثيم سلة.

رابط المتجر:
تفاصيل التطوير المطلوب:
`,
      href: "/services/salla-theme-customization",
      ctaLabel: "تفاصيل الخدمة",
    },
    {
      number: "04",
      title: "التطوير والتكاملات",
      label: "Development & Integrations",
      description:
        "تنفيذ خصائص Frontend إضافية أو ربط خدمات خارجية عندما تكون الإمكانيات التقنية والتكاملات المناسبة متاحة.",
      capabilities: [
        "Custom Store Features",
        "External Integrations",
        "API Integration",
        "Automation حسب إمكانيات المشروع",
      ],
      inquiryTemplate: `مرحبًا هشام، أرغب في الاستفسار عن خدمة التطوير والتكاملات لمتجر سلة.

رابط المتجر:
التكامل أو الخاصية المطلوبة:
`,
      href: "/services/salla-theme-customization#integrations-heading",
      ctaLabel: "تفاصيل الخدمة",
    },
    {
      number: "05",
      title: "Google وSEO وTracking",
      label: "SEO & Tracking",
      description:
        "تجهيز أساسيات Google Analytics وSearch Console وMerchant Center وSEO والتتبع بدون وعود بنتائج مضمونة.",
      capabilities: [
        "Google Analytics",
        "Google Search Console",
        "Google Merchant Center",
        "Basic Technical SEO والتتبع",
      ],
      inquiryTemplate: `مرحبًا هشام، أرغب في الاستفسار عن خدمة Google وSEO والتتبع لمتجر سلة.

رابط المتجر:
الخدمة المطلوبة:
`,
      href: "/services/salla-store-design#google-seo-heading",
      ctaLabel: "تفاصيل الخدمة",
    },
    {
      number: "06",
      title: "تطوير ودعم المتاجر القائمة",
      label: "Optimization & Support",
      description:
        "مراجعة متجر سلة قائم، تحسين الواجهة وتجربة الاستخدام، حل مشاكل Frontend، وتنفيذ تطويرات إضافية حسب الحاجة.",
      capabilities: [
        "Store Audit",
        "Store Redesign وUX Improvements",
        "Frontend وTheme Bug Fixing",
        "تطوير ودعم مستمر حسب الحاجة",
      ],
      inquiryTemplate: `مرحبًا هشام، أرغب في تطوير أو تحسين متجر سلة قائم.

رابط المتجر:
المشكلة أو التحسين المطلوب:
`,
      href: "/services/salla-store-design#support-heading",
      ctaLabel: "تفاصيل الخدمة",
    },
  ],
  spotlight: [],
  experience: {
    role: "مطور متاجر سلة",
    company: "عملاء ومشروعات مباشرة",
    period: "تصميم · تطوير · صيانة",
    description:
      "تنفيذ متاجر سلة وتجهيزها بما يناسب احتياج كل مشروع، مع مراجعة تجربة الاستخدام على الجوال وسطح المكتب.",
    responsibilities: [],
    environment: ["Salla", "HTML", "CSS", "JavaScript"],
  },
  stack: [],
  principles: [
    {
      number: "01",
      title: "نفهم المتجر",
      description: "أراجع المتجر، المنتجات وتجربة الاستخدام الحالية.",
    },
    {
      number: "02",
      title: "نحدد المطلوب",
      description: "نحدد التصميم، التعديلات والأولويات قبل التنفيذ.",
    },
    {
      number: "03",
      title: "ننفّذ",
      description: "أبدأ التصميم والتطوير والتخصيص داخل سلة.",
    },
    {
      number: "04",
      title: "نراجع ونسلّم",
      description:
        "نختبر المتجر على Desktop وMobile ونتأكد إن كل حاجة شغالة بشكل سليم.",
    },
  ],
  education: {
    degree: "Business Information Systems",
    institution: "Egyptian Institute of Alexandria Academy",
    graduation: "2027",
    description: "",
  },
  contact: {
    heading: "عندك متجر على سلة؟",
    description:
      "ابعتلي رابط متجرك وخليني أشوف إيه اللي ممكن نشتغل عليه.",
  },
};
