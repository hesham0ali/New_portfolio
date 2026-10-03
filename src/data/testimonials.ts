export type Testimonial = {
  id: string;
  quote: string;
  clientName: string;
  clientRole?: string;
  company?: string;
  project?: string;
  avatar?: {
    src: string;
    alt: string;
  };
  source?: {
    url: string;
    label?: string;
  };
  verified: boolean;
};

/**
 * Demo entries are visible only in development. Production renders entries
 * after their content and identity are approved and `verified` is set to true.
 */
export const testimonials: Testimonial[] = [
  {
    id: "demo-store-design",
    quote:
      "التعامل كان ممتاز، وفهم المطلوب من البداية. تصميم المتجر طلع مرتب وواضح، والتعديلات كانت بتتنفذ بشكل سريع ومنظم.",
    clientName: "اسم العميل",
    clientRole: "صاحب المتجر",
    project: "تصميم متجر سلة",
    verified: false,
  },
  {
    id: "demo-store-improvement",
    quote:
      "كان عندنا متجر شغال بالفعل واحتجنا نطور بعض الأجزاء فيه. هشام ساعدنا في ترتيب المطلوب وتنفيذ التعديلات بشكل مناسب من غير ما نعقد الموضوع.",
    clientName: "اسم العميل",
    company: "اسم الشركة أو المتجر",
    project: "تطوير متجر سلة قائم",
    verified: false,
  },
  {
    id: "demo-store-customization",
    quote:
      "احتجنا تعديلات خاصة في المتجر ومش كلها كانت متاحة من الإعدادات العادية في سلة. تم تنفيذ المطلوب بشكل كويس، وكان التواصل واضح في إيه اللي ينفع يتعمل وإيه الأنسب للمشروع.",
    clientName: "اسم العميل",
    clientRole: "صاحب المتجر",
    project: "تخصيص وتطوير متجر سلة",
    verified: false,
  },
  {
    id: "demo-store-launch",
    quote:
      "بدأنا والمتجر محتاج تجهيز وترتيب حاجات كتير قبل الإطلاق. الشغل اتنظم خطوة بخطوة من الأقسام والمنتجات لحد شكل الواجهة، وده سهّل علينا جدًا تجهيز المتجر.",
    clientName: "اسم العميل",
    company: "اسم البراند",
    project: "إنشاء وتجهيز متجر سلة",
    verified: false,
  },
  {
    id: "demo-store-project",
    quote:
      "أكتر حاجة عجبتني إن التواصل كان واضح، وأي تعديل أو ملاحظة كنا بنتكلم فيها ونحدد الحل المناسب قبل التنفيذ. تجربة التعامل كانت مريحة والشغل منظم.",
    clientName: "اسم العميل",
    company: "اسم الشركة / المتجر",
    project: "مشروع متجر سلة",
    verified: false,
  },
];
