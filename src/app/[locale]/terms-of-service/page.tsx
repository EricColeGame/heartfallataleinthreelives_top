import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/config/site";

export default function TermsOfServicePage() {
  return (
    <LegalPage title="Terms of Service">
      <p>This site is an independent fan-made guide hub for Heartfall: A Tale in Three Lives. Content is provided for informational and entertainment purposes only and does not distribute game files.</p>
      <p>Story details, routes, endings, platform availability, and update information may change without notice. Always verify important information through the game or official Kazehita channels.</p>
      <p>By using this site, you agree not to misuse it, attempt unauthorized access, scrape it at an abusive rate, or present this fan wiki as an official Kazehita or 3rd Life SMP property.</p>
      <p>Questions about these terms can be sent to <a className="font-semibold text-[hsl(var(--nav-theme))] hover:underline" href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>.</p>
    </LegalPage>
  );
}
