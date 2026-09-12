import type { MetadataRoute } from "next";
import { posts } from "./blog/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ceo.sifakalabs.in/",
      lastModified: new Date("2026-09-12"),
      changeFrequency: "monthly",
      priority: 1,
    },
    { url: "https://ceo.sifakalabs.in/blog", lastModified: new Date("2026-09-12"), changeFrequency: "monthly", priority: 0.8 },
    ...posts.map((post) => ({ url: "https://ceo.sifakalabs.in/blog/" + post.slug, lastModified: new Date(post.date), changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
