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
    { label: "الأعمال", href: "/projects" },
    { label: "الخدمات", href: "#service" },
    { label: "عني", href: "/about" },
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
      capabilities: [],
      href: "/services/salla-store-design",
      ctaLabel: "عرض تفاصيل الخدمة",
    },
    {
      number: "02",
      title: "تصميم وتخصيص متاجر سلة",
      label: "Store Design & Customization",
      description:
        "تصميم واجهة المتجر وتخصيص الثيم بما يناسب هوية البراند ويحسن وضوح المحتوى وتجربة التصفح والشراء.",
      capabilities: [],
      href: "/services/salla-store-design#customization-heading",
      ctaLabel: "اكتشف الخدمة",
    },
    {
      number: "03",
      title: "تطوير ثيمات سلة",
      label: "Salla Theme Development",
      description:
        "تطوير أو تعديل ثيمات سلة وSections مخصصة عندما يحتاج المشروع مستوى أعلى من التخصيص.",
      capabilities: [],
      href: "/services/salla-theme-customization",
      ctaLabel: "عرض تفاصيل الخدمة",
    },
    {
      number: "04",
      title: "التطوير والتكاملات",
      label: "Development & Integrations",
      description:
        "تنفيذ خصائص Frontend إضافية أو ربط خدمات خارجية عندما تكون الإمكانيات التقنية والتكاملات المناسبة متاحة.",
      capabilities: [],
      href: "/services/salla-theme-customization#integrations-heading",
      ctaLabel: "ناقش مشروعك",
    },
    {
      number: "05",
      title: "Google وSEO وTracking",
      label: "SEO & Tracking",
      description:
        "تجهيز أساسيات Google Analytics وSearch Console وMerchant Center وSEO والتتبع بدون وعود بنتائج مضمونة.",
      capabilities: [],
      href: "/services/salla-store-design#google-seo-heading",
      ctaLabel: "اكتشف الخدمة",
    },
    {
      number: "06",
      title: "تطوير ودعم المتاجر القائمة",
      label: "Optimization & Support",
      description:
        "مراجعة متجر سلة قائم، تحسين الواجهة وتجربة الاستخدام، حل مشاكل Frontend، وتنفيذ تطويرات إضافية حسب الحاجة.",
      capabilities: [],
      href: "/services/salla-store-design#support-heading",
      ctaLabel: "عرض التفاصيل",
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
