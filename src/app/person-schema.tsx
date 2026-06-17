export default function PersonSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://codecraftedlabs.co.in/#person",
        name: "Ritik Singh",
        url: "https://codecraftedlabs.co.in",
        sameAs: [
          "https://github.com/iamritikbhardwaj",
          "https://www.linkedin.com/in/ritik-singh-10b333227/",
        ],
        jobTitle: "Backend Engineer",
        knowsAbout: [
          "Golang",
          "Node.js",
          "Microservices",
          "AWS",
          "Docker",
          "Kubernetes",
          "DevOps",
          "System Design",
          "Full Stack Development",
        ],
      },
      {
        "@type": "Organization",
        "@id": "https://codecraftedlabs.co.in/#organization",
        name: "Code Crafted Labs",
        url: "https://codecraftedlabs.co.in",
        logo: "https://codecraftedlabs.co.in/ccl-logo.png",
        founder: {
          "@id": "https://codecraftedlabs.co.in/#person",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://codecraftedlabs.co.in/#website",
        url: "https://codecraftedlabs.co.in",
        name: "Code Crafted Labs",
        publisher: {
          "@id": "https://codecraftedlabs.co.in/#organization",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}
