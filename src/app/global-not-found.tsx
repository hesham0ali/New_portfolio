import type { Metadata } from "next";
import Link from "next/link";
import { siteUrl } from "@/data/portfolio";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "الصفحة غير موجودة | هشام علي",
  description: "الصفحة المطلوبة غير موجودة. يمكنك العودة إلى الصفحة الرئيسية أو تصفح الأعمال.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function GlobalNotFound() {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <main className="section-shell flex min-h-screen items-center bg-cream">
          <div className="mx-auto w-full max-w-3xl px-5 text-center sm:px-8">
            <p className="eyebrow text-blue" dir="ltr">
              404
            </p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-navy sm:text-5xl">
              الصفحة المطلوبة غير موجودة
            </h1>
            <p className="mx-auto mt-5 max-w-xl leading-8 text-slate-700">
              قد يكون الرابط غير صحيح أو أن الصفحة لم تعد متاحة.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/" className="button-primary">
                العودة للرئيسية
              </Link>
              <Link href="/projects" className="button-secondary">
                تصفح الأعمال
              </Link>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
