import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Code Crafted Labs collects, uses, and protects inquiry and SMS opt-in information.",
  alternates: { canonical: "https://codecraftedlabs.co.in/privacy" },
  openGraph: {
    title: "Privacy Policy | Code Crafted Labs",
    description: "How Code Crafted Labs handles inquiry and SMS opt-in information.",
    url: "https://codecraftedlabs.co.in/privacy",
    type: "website",
  },
};

const sectionClass = "space-y-3 border-t border-border-soft pt-8";

export default function PrivacyPage() {
  return (
    <main id="main-content" className="mx-auto min-h-screen w-full max-w-[900px] px-6 py-16 md:px-8 md:py-24">
      <Link href="/" className="font-mono-link text-accent-lime hover:text-text-primary">← RETURN_HOME</Link>
      <header className="mt-12 mb-14">
        <span className="font-mono-label text-accent-lime">LEGAL_PROTOCOL</span>
        <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-6xl">Privacy Policy</h1>
        <p className="mt-5 text-text-muted">Effective August 30, 2026</p>
      </header>

      <div className="space-y-10 font-body-md text-text-muted [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-text-primary [&_a]:text-accent-lime [&_a]:underline [&_a]:underline-offset-2">
        <section className={sectionClass}>
          <h2>Scope and controller</h2>
          <p>Code Crafted Labs, operated by Ritik Singh in India, is responsible for the personal information described in this policy. This policy covers codecraftedlabs.co.in, including its portfolio, digital card, and inquiry experience. ReliefLink has a <Link href="/relieflink/privacy">separate privacy notice</Link> for its service inquiry flow.</p>
        </section>
        <section className={sectionClass}>
          <h2>Information we collect</h2>
          <p>When you submit a project inquiry, Code Crafted Labs may collect your name, email address, mobile number, company, project preferences, budget range, message, submission time, and your SMS consent choice.</p>
          <p>Vercel Web Analytics collects anonymous, aggregated page-view information such as the page visited, timestamp, referrer, approximate region, browser, operating system, and device type. It does not use third-party cookies or retain an identifier that tracks you across websites.</p>
        </section>
        <section className={sectionClass}>
          <h2>How we use information</h2>
          <p>We use this information to respond to your inquiry, evaluate and deliver requested services, maintain business records, prevent abuse, and—only when you separately opt in—send service-related SMS updates about your inquiry or project.</p>
          <p>Depending on the context, processing is based on steps you request before entering a contract, performance of a contract, compliance with legal obligations, our legitimate interests in operating and securing the site, or your consent where consent is specifically requested.</p>
        </section>
        <section className={sectionClass}>
          <h2>Mobile information and SMS consent</h2>
          <p><strong className="text-text-primary">We do not sell, rent, or share mobile numbers, SMS opt-in data, or consent records with third parties or affiliates for their marketing or promotional purposes.</strong> Service providers may process information solely to operate our communications and business systems under appropriate restrictions.</p>
          <p>SMS consent is optional and is not a condition of purchase. Message frequency varies. Message and data rates may apply. Reply STOP to unsubscribe or HELP for help. See our <Link href="/sms-terms">SMS Terms</Link>.</p>
        </section>
        <section className={sectionClass}>
          <h2>Disclosure and retention</h2>
          <p>We may disclose information when required by law or to service providers that help us operate the website, email, hosting, or communications infrastructure. We retain inquiry and consent records only as long as reasonably necessary for the purposes described here, legal obligations, dispute resolution, and suppression of opted-out numbers.</p>
        </section>
        <section className={sectionClass}>
          <h2>Security and your choices</h2>
          <p>We use reasonable administrative and technical safeguards, but no internet transmission is completely secure. Depending on the law that applies to you, you may request access, correction, completion, deletion, or a copy of your information; object to or restrict certain processing; withdraw consent; or raise a grievance with us or your data-protection authority. Legal exceptions may apply.</p>
          <p>You can withdraw SMS consent at any time by replying STOP. Withdrawing consent does not affect processing that was lawful before withdrawal.</p>
        </section>
        <section className={sectionClass}>
          <h2>Service providers and international processing</h2>
          <p>Hosting, analytics, and email providers—including Vercel and Resend—may process limited information on our behalf. Depending on their infrastructure, information may be processed outside your country with contractual or other safeguards required by applicable law.</p>
        </section>
        <section className={sectionClass}>
          <h2>Children</h2>
          <p>The portfolio and project inquiry form are intended for adults and business users. We do not knowingly solicit personal information from children.</p>
        </section>
        <section className={sectionClass}>
          <h2>Contact</h2>
          <p>For privacy questions or requests, email <a href="mailto:ritik@codecraftedlabs.co.in">ritik@codecraftedlabs.co.in</a>.</p>
        </section>
      </div>
    </main>
  );
}
