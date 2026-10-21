export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Heartfall Wiki",
  shortName: "Heartfall",
  logoText: "H",
  tagline: "Routes, Endings, Characters & Story Guides",
  description: "Explore Heartfall: A Tale in Three Lives with route guides, character profiles, ending walkthroughs, story choices, gameplay tips, and platform information.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://heartfallataleinthreelives.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://heartfallataleinthreelives.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://store.steampowered.com/app/5257930/Heartfall__A_Tale_in_Three_Lives/",
  heroVideoId: "6logBReO2kM", // Official Heartfall teaser trailer by Kazehita
  social: {
    youtube: "https://www.youtube.com/watch?v=6logBReO2kM",
  },
  locales: ["en", "es", "pt", "de", "fr", "ja"],
  defaultLocale: "en",
};
