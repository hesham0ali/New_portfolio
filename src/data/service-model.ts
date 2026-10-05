export const primaryServices = [
  {
    id: "store-design",
    number: "01",
    label: "Salla Store Design & Setup",
    title: "تصميم وتجهيز متجر سلة",
    audience: "لمتجر جديد يحتاج إلى تجهيز واضح، أو متجر قائم يحتاج إلى إعادة تنظيم وتحسين الواجهة.",
    description:
      "يشمل هيكلة المتجر وتصميم واجهته وتنظيم الصفحات والأقسام والمنتجات، مع تحسين تجربة التصفح على الجوال.",
    capabilities: [
      "إنشاء وتجهيز المتجر والإعدادات الأساسية",
      "تصميم الصفحة الرئيسية وتنظيم الأقسام",
      "رفع وتنظيم المحتوى والمنتجات حسب النطاق",
      "تحسين تجربة الاستخدام على الجوال",
    ],
    href: "/services/salla-store-design",
    ctaLabel: "تفاصيل تصميم وتجهيز المتجر",
    inquiryTemplate: `مرحبًا هشام، وصلت من صفحة خدماتك وأرغب في تصميم أو تجهيز متجر سلة.

رابط المتجر إن وجد:
المطلوب:
`,
  },
  {
    id: "theme-development",
    number: "02",
    label: "Salla Theme Development",
    title: "تخصيص وتطوير ثيم سلة",
    audience: "لمتجر يحتاج إلى تعديلات تقنية أو سلوكيات ومكونات تتجاوز إعدادات الثيم الجاهزة.",
    description:
      "يشمل تخصيص الثيم والعمل على الواجهة باستخدام CSS وJavaScript، وتطوير Sections أو Components مخصصة عندما يناسب ذلك نطاق المشروع.",
    capabilities: [
      "تخصيص وتطوير ثيم قائم",
      "تعديلات CSS وJavaScript",
      "Custom Sections وTwilight Components",
      "تكاملات مدعومة بعد التحقق من الإمكانيات",
    ],
    href: "/services/salla-theme-customization",
    ctaLabel: "تفاصيل تخصيص وتطوير الثيم",
    inquiryTemplate: `مرحبًا هشام، وصلت من صفحة خدماتك وأرغب في تخصيص أو تطوير ثيم سلة.

رابط المتجر:
التعديل المطلوب:
`,
  },
] as const;

export const serviceCapabilities = [
  {
    title: "إنشاء وتجهيز المتجر",
    description: "إعداد الصفحات والأقسام والمنتجات وخيارات المتجر ضمن نطاق الإطلاق المتفق عليه.",
    parentLabel: "ضمن تصميم وتجهيز المتجر",
    parentHref: "/services/salla-store-design",
  },
  {
    title: "Google والتتبع",
    description: "تجهيز الأدوات والأساسيات المدعومة للمشروع دون وعود بنتائج أو ترتيب مضمون.",
    parentLabel: "قدرة مكملة لتجهيز المتجر",
    parentHref: "/services/salla-store-design#google-seo-heading",
  },
  {
    title: "تطوير ودعم متجر قائم",
    description: "مراجعة الواجهة وتحسين تجربة الاستخدام ومعالجة مشاكل Frontend ضمن النطاق المتاح.",
    parentLabel: "ضمن تصميم وتحسين المتجر",
    parentHref: "/services/salla-store-design#support-heading",
  },
  {
    title: "التطوير والتكاملات",
    description: "خصائص أو روابط خارجية تُقيّم فنيًا أولًا حسب إمكانيات سلة والخدمة المرتبطة.",
    parentLabel: "ضمن تطوير الثيم عند الحاجة",
    parentHref: "/services/salla-theme-customization#integrations-heading",
  },
] as const;

export const uncertainServiceMessage = `مرحبًا هشام، لست متأكدًا من الخدمة المناسبة لمتجري على سلة.

رابط المتجر إن وجد:
المطلوب:
`;
