import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Shwetanshu Bhatt | CEO & Co-Founder of Sifaka Labs",
    short_name: "Shwetanshu Bhatt",
    description:
      "The official website of Shwetanshu Bhatt, CEO and Co-Founder of Sifaka Labs.",
    start_url: "/",
    display: "standalone",
    background_color: "#f3f0e8",
    theme_color: "#111111",
    lang: "en-IN",
  };
}
