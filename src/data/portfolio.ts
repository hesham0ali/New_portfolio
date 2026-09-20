import type { PortfolioData } from "@/types/portfolio";

const fallbackSiteUrl = "https://www.heshamali.com";

export const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || fallbackSiteUrl,
).origin;

const whatsappMessage =
  "أهلًا هشام، عندي متجر على سلة وعايز أراجع تصميمه وتطويره. رابط المتجر: ";

export const portfolio: PortfolioData = {
  person: {
    name: "هشام علي",
    shortName: "هشام",
    role: "مطور سلة متخصص في تصميم وتطوير متاجر سلة",
    location: "الإسكندرية، مصر",
    email: "heshamali.dev@gmail.com",
    whatsapp: {
      number: "+20 102 724 7079",
      url: `https://wa.me/201027247079?text=${encodeURIComponent(whatsappMessage)}`,
      label: "ابعت رابط متجرك",
      ariaLabel: "ابعت رابط متجرك لهشام على واتساب — يفتح في نافذة جديدة",
    },
    linkedInUrl: "https://www.linkedin.com/in/hesham-ali-dev/",
    githubUrl: "https://github.com/hesham0ali",
    cvUrl: "/hesham-ali-cv.pdf",
  },
  navigation: [
    { label: "أعمالي", href: "#work" },
    { label: "الخدمة", href: "#service" },
    { label: "عني", href: "#about" },
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
      title: "تصميم واجهة المتجر",
      description:
        "تصميم وترتيب الـ Homepage والأقسام بحيث تكون أوضح وأسهل للعميل.",
      capabilities: [],
    },
    {
      number: "02",
      title: "تجهيز وتنظيم المتجر",
      description:
        "تنظيم الأقسام، القوائم، المنتجات وتجربة التصفح داخل المتجر.",
      capabilities: [],
    },
    {
      number: "03",
      title: "تخصيص الثيم",
      description:
        "تعديلات CSS وJavaScript وتخصيص واجهة المتجر حسب الاحتياج.",
      capabilities: [],
    },
    {
      number: "04",
      title: "تحسين تجربة المتجر",
      description:
        "تحسين تجربة الموبايل، عرض المنتجات، الـ Navigation والمتابعة والصيانة عند الحاجة.",
      capabilities: [],
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
