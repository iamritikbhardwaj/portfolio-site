import type { Metadata } from "next";
import Link from "next/link";

import styles from "../relieflink.module.css";

const canonicalUrl = "https://codecraftedlabs.co.in/relieflink/terms";

export const metadata: Metadata = {
  title: { absolute: "SMS Terms and Conditions | ReliefLink" },
  description:
    "Terms governing optional ReliefLink service-related SMS communications, including frequency, rates, support, and opt-out instructions.",
  alternates: { canonical: canonicalUrl },
  robots: { index: true, follow: true },
  openGraph: {
    title: "SMS Terms and Conditions | ReliefLink",
    description: "Terms for ReliefLink service-related text messages.",
    url: canonicalUrl,
    siteName: "ReliefLink",
    type: "website",
  },
};

export default function ReliefLinkTermsPage() {
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
          <h1>SMS Terms and Conditions</h1>
          <p>These terms apply to the optional ReliefLink service messaging program.</p>
        </div>

        <section>
          <h2>Program name and description</h2>
          <p>The program is called <strong>ReliefLink Service Updates</strong>. Users who expressly opt in may receive recurring service-related SMS messages concerning inquiry follow-up, availability, scheduling, errand progress, care check-ins, completion notices, and customer support.</p>
        </section>

        <section>
          <h2>Opting in</h2>
          <p>You may opt in by entering your mobile number in the ReliefLink inquiry form and voluntarily selecting the separate SMS consent checkbox. The checkbox is not preselected. SMS consent is optional, is specific to ReliefLink, and is not a condition of purchase or submitting an inquiry.</p>
        </section>

        <section>
          <h2>Message frequency and charges</h2>
          <p>Message frequency varies according to your inquiry and active service activity. <strong>Message and data rates may apply.</strong> Your mobile carrier&apos;s standard messaging and data charges may apply.</p>
        </section>

        <section>
          <h2>Opting out</h2>
          <p><strong>Reply STOP to unsubscribe at any time.</strong> After an opt-out request, you may receive one final message confirming that no further messages will be sent. You must provide new consent before receiving future ReliefLink SMS messages.</p>
        </section>

        <section>
          <h2>Help and support</h2>
          <p><strong>Reply HELP for help</strong> or email <a href="mailto:ritiklrt2@gmail.com">ritiklrt2@gmail.com</a>. Support is also available through the <Link href="/relieflink#inquiry">ReliefLink inquiry form</Link>.</p>
        </section>

        <section>
          <h2>Delivery</h2>
          <p>Wireless carriers are not liable for delayed or undelivered messages. Message delivery depends on your carrier, network availability, and the accuracy of the mobile number you provide.</p>
        </section>

        <section>
          <h2>Privacy and consent data</h2>
          <p>Mobile information and SMS consent are handled according to the <Link href="/relieflink/privacy">ReliefLink Privacy Policy</Link>. Mobile opt-in data and consent are not sold or shared with third parties or affiliates for their own marketing or promotional purposes.</p>
        </section>

        <section>
          <h2>Changes to the program</h2>
          <p>ReliefLink may modify or discontinue the messaging program or update these terms. Material changes will be reflected on this page with a revised effective date.</p>
        </section>
      </main>
    </>
  );
}
