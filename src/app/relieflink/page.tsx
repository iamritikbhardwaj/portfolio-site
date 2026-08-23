import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  CheckCircle2,
  ClipboardPenLine,
  HeartHandshake,
  MailCheck,
  Pill,
  ReceiptText,
  ShoppingBag,
  Timer,
} from "lucide-react";

import InquiryForm from "./InquiryForm";
import styles from "./relieflink.module.css";

const reliefLinkUrl = "https://codecraftedlabs.co.in/relieflink";
const newYorkImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB4rbuEbWjjEwTOpc_hHjEjWhCDZq7AuHMvvRphiUcbHWRf8koos9nY34B3DLYd1H47A1VdOrprzE3B9y_VExoOs9--RvYadrW1FCedUudeT2OL9OLLy99LFbJnRlcR9xfqsdzNU08_QW1wtEstJ8mDWJbmbeGStzDeKXUx8ZMqlNdkpSTjKiay59dJAoV9ONsKHYiJnShEXd39Bj_A1EpuNQJpKCU2JRxii_ONbSSmHAqgwTe-hB6vTg";
const bangaloreImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAYbypWk14R2o_sEWXspceKEJ8qdu05uiMJVYHaZtX0yLmAmzvLpaO8ejfqjctmKIbw3sNHvjoZVcA8dcwacwupjNFqcMK1-ZX9A8UbL9i8roPx4KhJ-RgO0TwUJZP9ykn3HGWx2IhuU9sWYeJFr8y_HlPjNLTtUJAZpEWnuOjdF-7tbg8h-8ri9TgPZVLbYvzEgNp77decTaZKOkXwSxIRcAhgW1ztlSqgMh3h69uKntnGWeARi60tVA";

export const metadata: Metadata = {
  title: { absolute: "ReliefLink - Professional Errand Services for Parents in India" },
  description:
    "Trusted grocery runs, healthcare check-ins, bill assistance, and real-time updates for parents in India when family lives abroad.",
  category: "Errand and family support services",
  keywords: [
    "errand services for parents India",
    "elderly parent support India",
    "grocery delivery assistance",
    "healthcare check-ins India",
    "ReliefLink",
  ],
  authors: [{ name: "ReliefLink" }],
  creator: "ReliefLink",
  publisher: "ReliefLink",
  alternates: { canonical: reliefLinkUrl },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "ReliefLink - Be there, even when you can't be",
    description:
      "Professional errand services and reassuring check-ins for your parents back home in India.",
    url: reliefLinkUrl,
    siteName: "ReliefLink",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: bangaloreImage,
        width: 1200,
        height: 800,
        alt: "A ReliefLink professional delivering groceries and medicine to a parent in India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ReliefLink - Be there, even when you can't be",
    description: "Professional errand services and reassuring check-ins for parents in India.",
    images: [bangaloreImage],
  },
};

const howItWorks = [
  { title: "Request", copy: "Tell us what your parent needs, where, and when through the secure inquiry form.", icon: ClipboardPenLine },
  { title: "Care", copy: "A trusted local professional handles the errand attentively and follows your instructions.", icon: HeartHandshake },
  { title: "Report", copy: "Receive timely check-ins and a clear completion report, wherever you are in the world.", icon: MailCheck },
];

const timeline = [
  { time: "10:15 AM", title: "Fresh produce delivered to Sector 15", copy: "Quality checked against instructions.", icon: ShoppingBag, active: true },
  { time: "11:30 AM", title: "BP check-up complete", copy: "Reading: 120/80 - Normal", icon: Activity },
  { time: "Scheduled: 4:00 PM", title: "Utility bills payment assistance", copy: "Next update will arrive after completion.", icon: ReceiptText },
];

const plans = [
  { name: "Standard", price: "₹25,000", features: ["2 grocery runs", "Basic bill payment assistance", "Weekly status report"] },
  { name: "Premium", price: "₹40,000", features: ["Unlimited grocery runs", "Comprehensive bill and utility management", "Healthcare check-ins and medicine pickups", "Daily status reports"], featured: true },
];

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Link href="/relieflink" className={styles.brand} aria-label="ReliefLink home">ReliefLink</Link>
        <nav className={styles.nav} aria-label="ReliefLink navigation">
          <Link href="/relieflink">Home</Link>
          <a href="#how-it-works">How it works</a>
          <a href="#pricing">Pricing</a>
        </nav>
        <a href="#inquiry" className={`${styles.button} ${styles.buttonAccent}`}>Check availability</a>
      </div>
    </header>
  );
}

function StoryCards() {
  return (
    <div className={styles.storyGrid}>
      <article className={styles.storyCard}>
        <span className={styles.storyTag}>New York, 9:00 AM EST</span>
        <div className={styles.storyImage}>
          <Image src={newYorkImage} alt="A woman in New York checking a ReliefLink update about her parent in India" fill priority sizes="(max-width: 768px) calc(100vw - 72px), 500px" />
        </div>
        <p>“Just got the notification. Knowing Mom&apos;s meds were picked up and delivered safely gives me such peace of mind while I&apos;m at work.”</p>
      </article>
      <article className={`${styles.storyCard} ${styles.storyCardOffset}`}>
        <span className={styles.storyTag}>Bangalore, 6:30 PM IST</span>
        <div className={styles.storyImage}>
          <Image src={bangaloreImage} alt="A ReliefLink professional delivering groceries and medicine to an older woman in Bangalore" fill priority sizes="(max-width: 768px) calc(100vw - 72px), 500px" />
        </div>
        <p>“The young man from ReliefLink is always so polite. He brought the groceries right to the kitchen and made sure I had everything for the week.”</p>
      </article>
    </div>
  );
}

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroCopy}>
        <span className={styles.eyebrow}>Care across every distance</span>
        <h1>Be there, even when you can&apos;t be.</h1>
        <p>Professional errand services for your parents back home. From groceries to healthcare check-ins, handled by people you can trust.</p>
        <a href="#inquiry" className={`${styles.button} ${styles.buttonAccent}`}>Check availability <ArrowRight aria-hidden="true" size={18} /></a>
      </div>
      <StoryCards />
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how-it-works" className={styles.section} aria-labelledby="how-heading">
      <div className={styles.sectionHeading}>
        <span className={styles.eyebrow}>Simple by design</span>
        <h2 id="how-heading">How it works</h2>
        <p>Reliable, transparent care in three straightforward steps.</p>
      </div>
      <ol className={styles.stepsGrid}>
        {howItWorks.map((step, index) => {
          const Icon = step.icon;
          return (
            <li key={step.title} className={styles.stepCard}>
              <div className={styles.stepTopline}><span className={styles.iconCircle}><Icon aria-hidden="true" size={28} /></span><span className={styles.stepNumber}>0{index + 1}</span></div>
              <h3>{step.title}</h3><p>{step.copy}</p>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

function CheckinTimeline() {
  return (
    <section className={styles.timelineSection} aria-labelledby="timeline-heading">
      <div className={styles.narrowContainer}>
        <div className={styles.sectionHeading}>
          <span className={styles.timelineTitleIcon}><Timer aria-hidden="true" size={22} /></span>
          <h2 id="timeline-heading">Live check-in timeline</h2>
          <p>Real-time updates, just like you were there.</p>
        </div>
        <ol className={styles.timeline}>
          {timeline.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.time} className={styles.timelineItem}>
                <span className={`${styles.timelineIcon} ${item.active ? styles.timelineIconActive : ""}`}><Icon aria-hidden="true" size={20} /></span>
                <article className={styles.timelineCard}><span className={styles.timelineTime}>{item.time}</span><h3>{item.title}</h3><p>{item.copy}</p></article>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="pricing" className={styles.section} aria-labelledby="pricing-heading">
      <div className={styles.sectionHeading}>
        <span className={styles.eyebrow}>No hidden surprises</span>
        <h2 id="pricing-heading">Transparent pricing</h2>
        <p>Choose a plan that fits your parents&apos; needs.</p>
      </div>
      <div className={styles.pricingGrid}>
        {plans.map((plan) => (
          <article key={plan.name} className={`${styles.planCard} ${plan.featured ? styles.planFeatured : ""}`}>
            {plan.featured && <span className={styles.popular}>Most popular</span>}
            <h3>{plan.name}</h3>
            <p className={styles.price}><strong>{plan.price}</strong><span>/month</span></p>
            <ul>{plan.features.map((feature) => <li key={feature}><CheckCircle2 aria-hidden="true" size={20} />{feature}</li>)}</ul>
            <a href="#inquiry" className={`${styles.button} ${plan.featured ? styles.buttonAccent : styles.buttonMuted}`}>Select {plan.name}</a>
          </article>
        ))}
      </div>
    </section>
  );
}

function InquirySection() {
  return (
    <section id="inquiry" className={styles.inquirySection} aria-labelledby="inquiry-heading">
      <div className={styles.inquiryContainer}>
        <div className={styles.sectionHeading}>
          <span className={styles.inquiryIcon}><Pill aria-hidden="true" size={22} /></span>
          <h2 id="inquiry-heading">Ready to get started?</h2>
          <p>Tell us what support your parent needs and our team will be in touch shortly.</p>
        </div>
        <InquiryForm />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div><span className={styles.brand}>ReliefLink</span><p>Care you can count on, across every distance.</p></div>
        <p>© {new Date().getFullYear()} ReliefLink Errand Services.</p>
        <a href="mailto:ritiklrt2@gmail.com">Support</a>
      </div>
    </footer>
  );
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "ReliefLink",
  description: "Professional errand services and check-ins for parents living in India.",
  url: reliefLinkUrl,
  areaServed: { "@type": "Country", name: "India" },
  provider: { "@type": "Organization", name: "ReliefLink" },
  serviceType: "Errand and family support services",
};

export default function ReliefLinkPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Header />
      <main id="main-content"><Hero /><HowItWorks /><CheckinTimeline /><PricingSection /><InquirySection /></main>
      <Footer />
    </>
  );
}
