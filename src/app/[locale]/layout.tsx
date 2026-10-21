import { siteConfig } from "@/config/site";
import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import { hasLocale } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { ThemeProvider } from "next-themes";
import { JsonLd, SiteFooter, SiteHeader } from "@/components/site";
import { routing } from "@/i18n/routing";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const siteUrl = siteConfig.url.replace(/\/$/, "");

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const image = `${siteUrl}/images/hero.webp`;
  const adsenseId = process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID;
  return {
    metadataBase: new URL(siteUrl),
    title: { default: "Heartfall A Tale in Three Lives Wiki", template: `%s | ${siteConfig.name}` },
    description: siteConfig.description,
    keywords: ["Heartfall A Tale in Three Lives", "Heartfall Wiki", "visual novel RPG", "route guide", "endings", "characters", "walkthrough"],
    manifest: "/manifest.json",
    icons: {
      icon: [
        { url: "/favicon.ico" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
        { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
      ],
      apple: "/apple-touch-icon.png",
      shortcut: "/favicon.ico",
    },
    appleWebApp: { capable: true, title: siteConfig.shortName, statusBarStyle: "black-translucent" },
    openGraph: {
      type: "website",
      locale,
      url: `${siteUrl}/${locale}`,
      siteName: siteConfig.name,
      title: "Heartfall A Tale in Three Lives Wiki",
      description: siteConfig.description,
      images: [{ url: image, width: 1600, height: 900, alt: "Heartfall: A Tale in Three Lives key art" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Heartfall A Tale in Three Lives Wiki",
      description: siteConfig.description,
      images: [image],
    },
    ...(adsenseId ? { other: { "google-adsense-account": adsenseId } } : {}),
  };
}

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  if (!hasLocale(routing.locales, locale)) notFound();
  const messages = await getMessages({ locale });
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: siteConfig.name,
    alternateName: "Heartfall: A Tale in Three Lives Wiki",
    url: siteUrl,
    logo: { "@type": "ImageObject", url: `${siteUrl}/android-chrome-512x512.png`, width: 512, height: 512 },
    image: `${siteUrl}/images/hero.webp`,
    description: siteConfig.description,
    sameAs: Object.values(siteConfig.social ?? {}).filter((link): link is string => Boolean(link)),
  };

  const adsenseId = process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID;

  return (
    <html lang={locale} className={`${inter.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        {adsenseId && (
          <Script
            async
            strategy="afterInteractive"
            crossOrigin="anonymous"
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseId}`}
          />
        )}
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <NextIntlClientProvider messages={messages}>
            <JsonLd data={organization} />
            <SiteHeader locale={locale} />
            {children}
            <SiteFooter locale={locale} />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
