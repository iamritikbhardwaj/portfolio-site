import type { Metadata } from "next";
import Link from "next/link";

import styles from "../relieflink.module.css";

const canonicalUrl = "https://codecraftedlabs.co.in/relieflink/privacy";

export const metadata: Metadata = {
  title: { absolute: "Privacy Policy | ReliefLink" },
  description:
    "ReliefLink privacy practices, including how inquiry data and SMS consent information are collected and protected.",
  alternates: { canonical: canonicalUrl },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Privacy Policy | ReliefLink",
    description: "How ReliefLink handles inquiry data and mobile messaging consent.",
    url: canonicalUrl,
    siteName: "ReliefLink",
    type: "website",
  },
};

export default function ReliefLinkPrivacyPage() {
  return (
    <>
      <header className={styles.legalHeader}>
        <div className={styles.legalHeaderInner}>
          <Link href="/relieflink" className={styles.brand}>ReliefLink</Link>
          <Link href="/relieflink#inquiry" className={`${styles.button} ${styles.buttonAccent}`}>Contact us</Link>
        </div>
      </header>
      <main id="main-content" className={styles.legalPage}>
        <div className={styles.legalIntro}>
          <span className={styles.eyebrow}>Effective August 30, 2026</span>
          <h1>Privacy Policy</h1>
          <p>This policy explains how ReliefLink handles information submitted through its care inquiry and SMS opt-in flow.</p>
        </div>

        <section>
          <h2>Information we collect</h2>
          <p>We collect the name, email address, phone number, city or location, errand details, and any optional SMS consent submitted through our inquiry form. When SMS consent is selected, we also record the time, source, and version of the consent disclosure.</p>
          <p>Vercel Web Analytics collects anonymous, aggregated page-view information such as the page visited, timestamp, referrer, approximate region, browser, operating system, and device type. It does not use third-party cookies or track visitors across websites.</p>
        </section>

        <section>
          <h2>How we use information</h2>
          <p>We use inquiry information to review requested services, communicate about availability, coordinate care and errands, provide service updates, respond to support requests, prevent misuse, and maintain records required for operational or legal purposes.</p>
        </section>

        <section>
          <h2>Mobile information and SMS consent</h2>
          <p><strong>Mobile information, text messaging originator opt-in data, and consent will not be sold, rented, or shared with third parties or affiliates for their own marketing or promotional purposes.</strong></p>
          <p>We may use service providers solely to deliver ReliefLink communications and operate the service. Those providers may process information only on our behalf and may not use mobile opt-in information for their own marketing.</p>
          <p>If you opt in, ReliefLink may send recurring service-related messages about inquiries, scheduling, errands, and care status. Message frequency varies. Message and data rates may apply. Reply <strong>STOP</strong> to unsubscribe or <strong>HELP</strong> for help.</p>
        </section>

        <section>
          <h2>Your choices</h2>
          <p>SMS consent is optional and is not a condition of purchasing or requesting ReliefLink services. You may submit an inquiry without selecting the SMS checkbox. You can withdraw SMS consent at any time by replying <strong>STOP</strong>. For access, correction, or deletion requests, contact us using the email below.</p>
          <p>Depending on the law that applies to you, you may also request completion or a copy of your information, withdraw consent, object to or restrict certain processing, or raise a grievance with us or your data-protection authority. Legal exceptions may apply.</p>
        </section>

        <section>
          <h2>Legal bases and service providers</h2>
          <p>We process inquiry information to take steps you request before a possible service agreement, to perform requested services, to comply with law, and for legitimate interests such as security and responding to inquiries. SMS processing relies on the separate consent you provide.</p>
          <p>Hosting, analytics, and email providers—including Vercel and Resend—may process limited information on our behalf, potentially outside your country, subject to applicable contractual or legal safeguards.</p>
        </section>

        <section>
          <h2>Retention and security</h2>
          <p>We retain inquiry and consent records only as long as reasonably necessary to provide services, document messaging consent, meet legal obligations, and resolve disputes. We use reasonable administrative and technical measures to protect information, but no online transmission or storage system can be guaranteed completely secure.</p>
        </section>

        <section>
          <h2>Children and sensitive information</h2>
          <p>ReliefLink is intended for adults. Do not submit medical records, payment credentials, government identification numbers, or other highly sensitive personal information through the inquiry form.</p>
        </section>

        <section>
          <h2>Policy updates</h2>
          <p>We may update this policy as our services or legal requirements change. The effective date at the top of this page identifies the current version.</p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>Questions or privacy requests can be sent to <a href="mailto:ritiklrt2@gmail.com">ritiklrt2@gmail.com</a>.</p>
          <p>See also our <Link href="/relieflink/terms">SMS Terms and Conditions</Link>.</p>
        </section>
      </main>
    </>
  );
}
