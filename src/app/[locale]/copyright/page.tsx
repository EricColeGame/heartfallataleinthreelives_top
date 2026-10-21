import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/config/site";

export default function CopyrightPage() {
  return (
    <LegalPage title="Copyright">
      <p>Heartfall: A Tale in Three Lives and its original characters, artwork, music, and related media belong to Kazehita and their respective contributors. 3rd Life and related SMP material belong to their respective owners.</p>
      <p>Heartfall Wiki is an independent, non-official fan site created for informational and guide presentation purposes. We do not claim ownership of the game or its official assets.</p>
      <p>If you own rights to material displayed here and have a concern, contact the site operator at <a className="font-semibold text-[hsl(var(--nav-theme))] hover:underline" href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a> for review.</p>
    </LegalPage>
  );
}
