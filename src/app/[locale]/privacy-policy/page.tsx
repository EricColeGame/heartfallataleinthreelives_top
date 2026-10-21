import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/config/site";

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p>Heartfall Wiki is an independent fan-made guide site for Heartfall: A Tale in Three Lives. We do not ask visitors to submit game account credentials, passwords, or payment information.</p>
      <p>Basic analytics, advertising, and hosting providers may process standard technical information such as device type, browser, approximate region, referring page, and the pages visited on this site.</p>
      <p>External links may lead to official or community services including Steam, itch.io, YouTube, X, Bluesky, and the Heartfall project page. Those services are governed by their own privacy policies.</p>
      <p>Questions about this policy or requests relating to personal data can be sent to <a className="font-semibold text-[hsl(var(--nav-theme))] hover:underline" href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>.</p>
    </LegalPage>
  );
}
