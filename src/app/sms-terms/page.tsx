import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SMS Terms",
  description: "Terms for Code Crafted Labs service-related text messages.",
  alternates: { canonical: "https://codecraftedlabs.co.in/sms-terms" },
  openGraph: {
    title: "SMS Terms | Code Crafted Labs",
    description: "Terms for Code Crafted Labs service-related text messages.",
    url: "https://codecraftedlabs.co.in/sms-terms",
    type: "website",
  },
};

const sectionClass = "space-y-3 border-t border-border-soft pt-8";

export default function SmsTermsPage() {
  return (
    <main id="main-content" className="mx-auto min-h-screen w-full max-w-[900px] px-6 py-16 md:px-8 md:py-24">
      <Link href="/" className="font-mono-link text-accent-lime hover:text-text-primary">← RETURN_HOME</Link>
      <header className="mt-12 mb-14">
        <span className="font-mono-label text-accent-lime">MESSAGING_PROTOCOL</span>
        <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-6xl">SMS Terms</h1>
        <p className="mt-5 text-text-muted">Effective August 30, 2026</p>
      </header>

      <div className="space-y-10 font-body-md text-text-muted [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-text-primary [&_a]:text-accent-lime [&_a]:underline [&_a]:underline-offset-2">
        <section className={sectionClass}>
          <h2>Program and sender</h2>
          <p>Code Crafted Labs Project Updates is a service-related messaging program operated by Code Crafted Labs. Messages may concern your submitted inquiry, consultation, project status, scheduling, or requested support.</p>
        </section>
        <section className={sectionClass}>
          <h2>How you opt in</h2>
          <p>You opt in only by entering a valid mobile number and selecting the separate, unchecked SMS consent box on the Code Crafted Labs inquiry form. Submitting an inquiry without selecting that box does not provide SMS consent. Consent is not a condition of purchase.</p>
        </section>
        <section className={sectionClass}>
          <h2>Frequency and charges</h2>
          <p>Message frequency varies based on your inquiry or project activity. Message and data rates may apply according to your wireless plan. Carriers are not liable for delayed or undelivered messages.</p>
        </section>
        <section className={sectionClass}>
          <h2>Opt out and help</h2>
          <p>Reply STOP to unsubscribe from SMS messages. After an opt-out request, you may receive one final confirmation message. Reply HELP for help or email <a href="mailto:ritik@codecraftedlabs.co.in">ritik@codecraftedlabs.co.in</a>. We will not send further messages unless you opt in again.</p>
        </section>
        <section className={sectionClass}>
          <h2>Privacy</h2>
          <p>We do not sell, rent, or share mobile numbers, SMS opt-in data, or consent records with third parties or affiliates for marketing or promotional purposes. Read the full <Link href="/privacy">Privacy Policy</Link>.</p>
        </section>
      </div>
    </main>
  );
}
