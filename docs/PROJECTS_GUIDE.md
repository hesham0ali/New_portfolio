# Projects Management Guide

الدليل ده بيشرح إزاي تضيف مشروع جديد، تتحكم في ظهوره، تضيف الصور والروابط، وتراجع إن كل حاجة شغالة قبل الـDeployment.

---

## 1. إنشاء مشروع جديد

من داخل فولدر المشروع شغّل:

```bash
npm run project:new
```

الـCommand هيطلب منك بيانات المشروع، زي:

- Project title
- Slug
- Summary
- Year
- Role
- Categories
- Tags
- Published status
- Featured status

بعد الإنشاء هتلاقي:

```text
content/projects/<slug>.mdx
public/projects/<slug>/
```

مثال:

```text
content/projects/albasit-crm.mdx
public/projects/albasit-crm/
```

---

## 2. التحكم في ظهور المشروع

داخل ملف المشروع الـMDX هتلاقي:

```ts
status: "published",
featured: false,
```

### Published

```ts
status: "published",
```

المشروع هيظهر في:

```text
/projects
```

وصفحة التفاصيل هتشتغل:

```text
/projects/<slug>
```

### Draft

```ts
status: "draft",
```

المشروع مش هيظهر للزوار.

استخدم `draft` أثناء كتابة المحتوى أو تجهيز الصور.

### Featured

```ts
featured: true,
```

المشروع هيظهر كمان في قسم المشاريع الموجود في الـHome Page.

لو:

```ts
featured: false,
```

هيظهر في صفحة `/projects` فقط.

---

## 3. إضافة Cover Image

حط صورة الـCover داخل فولدر المشروع:

```text
public/projects/<slug>/cover.webp
```

مثال:

```text
public/projects/albasit-crm/cover.webp
```

بعدها داخل ملف الـMDX:

```ts
cover: {
  file: "cover.webp",
  alt: "Albasit CRM dashboard overview",
  position: "center",
},
```

مش محتاج تكتب أبعاد الصورة.

السيستم بيقرأ الـWidth والـHeight أوتوماتيك.

### تغيير مكان التركيز في الصورة

تقدر تستخدم:

```ts
position: "center",
```

أو:

```ts
position: "top",
```

أو:

```ts
position: "bottom",
```

أو قيمة أدق:

```ts
position: "50% 20%",
```

لو مفيش Cover:

```ts
cover: null,
```

ساعتها الموقع هيعرض الـPlaceholder الموجود.

---

## 4. إضافة Gallery Images

حط صور المشروع داخل نفس الفولدر:

```text
public/projects/<slug>/
├── cover.webp
├── dashboard.webp
├── customers.webp
└── mobile.webp
```

وبعدين أضفهم داخل ملف الـMDX:

```ts
gallery: [
  {
    file: "dashboard.webp",
    alt: "Project reporting dashboard",
    caption: "Reporting and analytics interface.",
  },
  {
    file: "customers.webp",
    alt: "Project customer records page",
    caption: "Customer records and pagination workflow.",
  },
  {
    file: "mobile.webp",
    alt: "Project mobile interface",
    caption: "Responsive mobile experience.",
  },
],
```

### استخدام فولدرات داخلية

تقدر ترتب الصور بالشكل ده:

```text
public/projects/<slug>/
├── cover.webp
└── gallery/
    ├── dashboard.webp
    ├── customers.webp
    └── mobile.webp
```

واستخدم:

```ts
gallery: [
  {
    file: "gallery/dashboard.webp",
    alt: "Project reporting dashboard",
  },
  {
    file: "gallery/customers.webp",
    alt: "Project customer records page",
  },
],
```

لو مفيش Gallery:

```ts
gallery: [],
```

سكشن الـGallery مش هيظهر.

---

## 5. كتابة Alt Text وCaption

### Alt Text

الـ`alt` مطلوب لكل صورة.

اكتب وصف واضح للصورة:

```ts
alt: "CRM reporting dashboard with customer activity charts",
```

ما تكتبش:

```ts
alt: "image",
```

أو:

```ts
alt: "screenshot",
```

### Caption

الـ`caption` اختياري، لكنه مفيد علشان يوضح إنت عملت إيه في الجزء ده.

مثال:

```ts
caption:
  "Analytics dashboard added to help administrators monitor platform activity.",
```

لو مش محتاج Caption، ممكن تشيله:

```ts
{
  file: "dashboard.webp",
  alt: "CRM reporting dashboard",
},
```

---

## 6. إضافة Live Website وGitHub

داخل ملف المشروع:

```ts
links: {
  live: "https://example.com",
  github: "https://github.com/username/project",
},
```

لو الـLive Website مش متاح:

```ts
links: {
  live: null,
  github: "https://github.com/username/project",
},
```

لو GitHub مش متاح:

```ts
links: {
  live: "https://example.com",
  github: null,
},
```

لو الاتنين مش متاحين:

```ts
links: {
  live: null,
  github: null,
},
```

لا تحط GitHub Link لو:

- الـRepository Private
- المشروع ملك عميل ومش مسموح نشره
- الكود مش بتاعك بالكامل
- الرابط مش شغال

كل الروابط لازم تبدأ بـ:

```text
https://
```

---

## 7. مثال كامل لبيانات مشروع

```ts
export const metadata = {
  slug: "albasit-crm",
  title: "Albasit CRM",
  shortTitle: "Albasit CRM",

  status: "published",
  featured: true,
  order: 1,

  category: "Backend",
  categories: ["Backend", "CRM", "Integrations", "Automation"],

  tags: [
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "Redis",
    "Webhooks",
    "Docker",
  ],

  year: "2026",
  role: "Backend support",

  summary:
    "Business workflows, integrations, and backend support for a custom CRM platform.",

  cover: {
    file: "cover.webp",
    alt: "Albasit CRM dashboard overview",
    position: "center",
  },

  gallery: [
    {
      file: "dashboard.webp",
      alt: "Albasit CRM reporting dashboard",
      caption:
        "Reporting and analytics interface for monitoring CRM activity.",
    },
    {
      file: "customers.webp",
      alt: "Customer records inside Albasit CRM",
      caption:
        "Customer records interface tested with more than 5,000 imported records.",
    },
    {
      file: "integrations.webp",
      alt: "Albasit CRM integrations workflow",
      caption:
        "Connected workflows involving WhatsApp, Chatwoot, Facebook Lead Ads, APIs, and webhooks.",
    },
  ],

  links: {
    live: "https://albasit.moraqmen.com",
    github: null,
  },
}
```

---

## 8. مراجعة المشاريع

بعد إضافة أو تعديل أي مشروع شغّل:

```bash
npm run projects:validate
```

الـCommand بيراجع:

- بيانات المشروع المطلوبة
- الـSlug
- Duplicate Slugs
- حالة النشر
- الصور موجودة
- الصور قابلة للقراءة
- مسارات الصور آمنة
- مفيش صور متكررة في الـGallery
- الـAlt Text موجود
- روابط الـLive وGitHub صحيحة

لو فيه مشكلة، المفروض يطلع:

- اسم ملف المشروع
- اسم الحقل
- مسار الصورة أو الرابط
- سبب الخطأ

---

## 9. تشغيل الموقع محليًا

```bash
npm run dev
```

افتح:

```text
http://localhost:3000
```

صفحة كل المشاريع:

```text
http://localhost:3000/projects
```

صفحة مشروع معين:

```text
http://localhost:3000/projects/<slug>
```

مثال:

```text
http://localhost:3000/projects/albasit-crm
```

---

## 10. المراجعة قبل الـCommit أو Deployment

شغّل الأوامر دي بالترتيب:

```bash
npm run projects:validate
npm run lint
npm run build
```

ما تعملش Deploy لو أي Command منهم فشل.

بعدها راجع الموقع بصريًا:

```bash
npm run dev
```

اختبر:

- Home Page
- Projects Page
- Project Details Page
- Cover Image
- Gallery
- Lightbox
- Live Website Link
- GitHub Link
- Mobile Layout
- Desktop Layout

---

## 11. اختبار الـLightbox

داخل صفحة المشروع:

1. اضغط على صورة من الـGallery.
2. جرّب زر `Escape` لإغلاق الصورة.
3. جرّب الأسهم اليمين والشمال.
4. جرّب أزرار Previous وNext.
5. جرّب التنقل باستخدام `Tab`.
6. تأكد إن الصفحة الخلفية مش بتتحرك أثناء فتح الصورة.
7. تأكد إن الـFocus بيرجع للصورة بعد إغلاق الـLightbox.

---

## 12. حذف مشروع

امسح ملف المشروع:

```text
content/projects/<slug>.mdx
```

وامسح فولدر الصور:

```text
public/projects/<slug>/
```

بعدها شغّل:

```bash
npm run projects:validate
npm run build
```

---

# Common Problems

## المشروع مش ظاهر في الموقع

راجع:

```ts
status: "published",
```

لو الحالة:

```ts
status: "draft",
```

المشروع هيكون مخفي.

---

## المشروع ظاهر في `/projects` ومش ظاهر في الـHome

راجع:

```ts
featured: true,
```

---

## صورة الـCover مش ظاهرة

راجع إن اسم الصورة مطابق بالضبط:

```ts
cover: {
  file: "cover.webp",
  alt: "Project cover",
},
```

وتأكد إن الصورة موجودة هنا:

```text
public/projects/<slug>/cover.webp
```

خد بالك إن أسماء الملفات Case-sensitive.

يعني:

```text
Cover.webp
```

مختلف عن:

```text
cover.webp
```

---

## الـGallery مش ظاهرة

تأكد إن `gallery` مش فاضية:

```ts
gallery: [
  {
    file: "dashboard.webp",
    alt: "Project dashboard",
  },
],
```

وتأكد إن الصورة موجودة داخل فولدر المشروع.

---

## روابط المشروع مش ظاهرة

تأكد إن الروابط كاملة:

```ts
links: {
  live: "https://example.com",
  github: "https://github.com/username/project",
},
```

الرابط بالشكل ده مش صحيح:

```ts
live: "example.com",
```

---

## الـValidation بيقول الصورة مش موجودة

قارن بين:

```ts
file: "dashboard.webp",
```

وبين اسم الصورة الحقيقي داخل:

```text
public/projects/<slug>/
```

لا تستخدم:

```ts
file: "/projects/<slug>/dashboard.webp",
```

اكتب اسم الملف أو المسار الداخلي فقط:

```ts
file: "dashboard.webp",
```

أو:

```ts
file: "gallery/dashboard.webp",
```

---

## تعديل المشروع مش ظاهر أثناء التشغيل

اقفل الـDevelopment Server:

```bash
Ctrl + C
```

وشغّله تاني:

```bash
npm run dev
```

---

# Quick Commands

## إنشاء مشروع

```bash
npm run project:new
```

## مراجعة المشاريع

```bash
npm run projects:validate
```

## تشغيل الموقع

```bash
npm run dev
```

## مراجعة الكود

```bash
npm run lint
```

## تجربة Production Build

```bash
npm run build
```

## المراجعة النهائية

```bash
npm run projects:validate && npm run lint && npm run build
```

---

# Quick Workflow

```text
Create project
→ Update MDX content
→ Add cover and gallery images
→ Add Live/GitHub links
→ Set status to published
→ Set featured if needed
→ Run projects:validate
→ Run lint and build
→ Review locally
→ Commit and deploy
```
