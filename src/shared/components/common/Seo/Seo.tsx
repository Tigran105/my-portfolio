import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/shared/contexts/LanguageContext";

interface SeoProps {
  titleKey: string;
  descriptionKey: string;
  keywords?: string[];
  image?: string;
  canonicalPath?: string;
}

export const Seo = ({
  titleKey,
  descriptionKey,
  keywords = ["developer", "software engineer", "portfolio"],
  image = "/og-image.jpg",
  canonicalPath = "",
}: SeoProps) => {
  const { t, language } = useLanguage();

  // Твой домен
  const baseUrl = "https://tigran-dev.com";
  const fullUrl = `${baseUrl}${canonicalPath}`;

  // Языковые версии для hreflang
  const languages = [
    { code: "en", name: "English" },
    { code: "ru", name: "Русский" },
    { code: "hy", name: "Հայերեն" },
  ];

  // Переведённые мета-данные
  const translatedTitle = t(titleKey) || "Tigran Sargsyan — Software Developer";
  const translatedDescription =
    t(descriptionKey) ||
    "Software Developer portfolio — building modern web applications with React, TypeScript & Node.js";
  const fullKeywords = [
    ...keywords,
    "Tigran Sargsyan",
    "frontend developer",
    "Armenia",
    "Yerevan",
  ].join(", ");

  return (
    <Helmet>
      {/* Язык страницы */}
      <html lang={language} />

      {/* Основные */}
      <title>{translatedTitle}</title>
      <meta name="description" content={translatedDescription} />
      <meta name="keywords" content={fullKeywords} />
      <link rel="canonical" href={fullUrl} />

      {/* Hreflang для мультиязычности */}
      {languages.map((lang) => (
        <link
          key={lang.code}
          rel="alternate"
          hrefLang={lang.code}
          href={`${baseUrl}/${lang.code}${canonicalPath || ""}`}
        />
      ))}
      <link rel="alternate" hrefLang="x-default" href={baseUrl} />

      {/* Open Graph (Facebook, LinkedIn) */}
      <meta property="og:title" content={translatedTitle} />
      <meta property="og:description" content={translatedDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={`${baseUrl}${image}`} />
      <meta property="og:site_name" content="Tigran Sargsyan" />
      <meta property="og:locale" content={language} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={translatedTitle} />
      <meta name="twitter:description" content={translatedDescription} />
      <meta name="twitter:image" content={`${baseUrl}${image}`} />
      <meta name="twitter:creator" content="@tigran105" />

      {/* Structured Data (Schema.org) */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Tigran Sargsyan",
          url: baseUrl,
          image: `${baseUrl}/myPhoto2.jpg`,
          sameAs: [
            "https://github.com/Tigran105",
            "https://www.linkedin.com/in/tigran-sargsyan105",
            "https://twitter.com/tigran105",
          ],
          jobTitle: t("seo.jobTitle") || "Software Developer",
          worksFor: {
            "@type": "Organization",
            name: t("seo.company") || "Freelance",
          },
          knowsLanguage: ["English", "Russian", "Armenian"],
          location: {
            "@type": "Place",
            address: {
              "@type": "PostalAddress",
              addressCountry: "AM",
            },
          },
        })}
      </script>
    </Helmet>
  );
};
