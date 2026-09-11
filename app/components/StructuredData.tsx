export default function StructuredData() {
  const siteUrl = "https://ceo.sifakalabs.in";
  const data = { "@context": "https://schema.org", "@graph": [
    { "@type": "WebSite", "@id": `${siteUrl}/#website`, url: `${siteUrl}/`, name: "Shwetanshu Bhatt", inLanguage: "en-IN" },
    { "@type": "WebPage", "@id": `${siteUrl}/#webpage`, url: `${siteUrl}/`, name: "Shwetanshu Bhatt — CEO & Co-Founder, Sifaka Labs", isPartOf: { "@id": `${siteUrl}/#website` }, about: { "@id": `${siteUrl}/#person` }, inLanguage: "en-IN" },
    { "@type": "Person", "@id": `${siteUrl}/#person`, name: "Shwetanshu Bhatt", jobTitle: "CEO and Co-Founder", url: `${siteUrl}/`, image: `${siteUrl}/shwetanshu.png`, email: "ceo@sifakalabs.in", worksFor: { "@id": `${siteUrl}/#organization` }, knowsAbout: ["technology products", "artificial intelligence", "automation", "software"] },
    { "@type": "Organization", "@id": `${siteUrl}/#organization`, name: "Sifaka Labs", url: "https://sifakalabs.in/", email: "ceo@sifakalabs.in", founder: [{ "@type": "Person", name: "Shwetanshu Bhatt" }, { "@type": "Person", name: "Sudhanshu Thapa" }, { "@type": "Person", name: "Aditya Dimri" }], description: "A technology company building products across software, artificial intelligence, automation, and future systems." },
  ] };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
