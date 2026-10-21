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
    steamCommunity?: string;
    youtube?: string;
    x?: string;
    bluesky?: string;
    itch?: string;
    website?: string;
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
  supportEmail: "support@heartfallataleinthreelives.top",
  gameUrl: "https://store.steampowered.com/app/5257930/Heartfall__A_Tale_in_Three_Lives/",
  heroVideoId: "6logBReO2kM", // Official Heartfall teaser trailer by Kazehita
  social: {
    steamCommunity: "https://steamcommunity.com/app/5257930",
    youtube: "https://www.youtube.com/@kazehita",
    x: "https://x.com/kazehita_",
    bluesky: "https://bsky.app/profile/kazehita.bsky.social",
    itch: "https://kazehita.itch.io/heartfall-a-tale-in-three-lives",
    website: "https://heartfall.carrd.co/",
  },
  locales: ["en", "es", "pt-BR", "ja"],
  defaultLocale: "en",
};
