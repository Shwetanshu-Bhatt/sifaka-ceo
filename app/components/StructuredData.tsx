const siteUrl = "https://ceo.sifakalabs.in";
const profileImage = `${siteUrl}/shwetanshu.png`;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: "Shwetanshu Bhatt",
      description:
        "The official website of Shwetanshu Bhatt, CEO and Co-Founder of Sifaka Labs.",
      inLanguage: "en-IN",
      publisher: { "@id": `${siteUrl}/#person` },
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#webpage`,
      url: `${siteUrl}/`,
      name: "Shwetanshu Bhatt | CEO & Co-Founder of Sifaka Labs",
      description:
        "Shwetanshu Bhatt is CEO and Co-Founder of Sifaka Labs, building technology products across artificial intelligence, software, automation, and future systems.",
      isPartOf: { "@id": `${siteUrl}/#website` },
      mainEntity: { "@id": `${siteUrl}/#person` },
      primaryImageOfPage: { "@id": `${siteUrl}/#profile-image` },
      dateModified: "2026-09-12",
      inLanguage: "en-IN",
    },
    {
      "@type": "ImageObject",
      "@id": `${siteUrl}/#profile-image`,
      url: profileImage,
      contentUrl: profileImage,
      width: 1122,
      height: 1402,
      caption: "Shwetanshu Bhatt, CEO and Co-Founder of Sifaka Labs",
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Shwetanshu Bhatt",
      givenName: "Shwetanshu",
      familyName: "Bhatt",
      jobTitle: "CEO and Co-Founder",
      url: `${siteUrl}/`,
      image: { "@id": `${siteUrl}/#profile-image` },
      email: "mailto:ceo@sifakalabs.in",
      founder: { "@id": `${siteUrl}/#organization` },
      worksFor: { "@id": `${siteUrl}/#organization` },
      knowsAbout: [
        "Technology leadership",
        "Product development",
        "Artificial intelligence",
        "Software",
        "Automation",
        "Venture building",
      ],
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Sifaka Labs",
      url: "https://sifakalabs.in/",
      logo: { "@type": "ImageObject", url: `${siteUrl}/sifaka-full-logo.svg` },
      email: "mailto:ceo@sifakalabs.in",
      founder: [
        { "@id": `${siteUrl}/#person` },
        { "@type": "Person", name: "Sudhanshu Thapa" },
        { "@type": "Person", name: "Aditya Dimri" },
      ],
      description:
        "A technology company building products across software, artificial intelligence, automation, and future systems.",
    },
  ],
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
