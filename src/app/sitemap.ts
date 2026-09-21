import type { MetadataRoute } from "next";

export const dynamic = "force-static";
import { pages } from "@/content/pages";
import { siteConfig } from "@/data/site";
import { therapists } from "@/data/therapists";
import { experiences } from "@/data/experiences";

const absolute = (path: string) => new URL(path, siteConfig.url).toString();

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const statics = Object.values(pages).map((page) => ({
    url: absolute(page.path),
    lastModified,
    changeFrequency: page.path === "/" ? ("weekly" as const) : ("monthly" as const),
    priority: page.path === "/" ? 1 : page.path === pages.therapists.path ? 0.9 : 0.7,
  }));

  const dynamic = [
    ...therapists.map((t) => ({ url: absolute(`${pages.therapists.path}/${t.slug}`), lastModified, changeFrequency: "monthly" as const, priority: 0.8 })),
    ...experiences.map((e) => ({ url: absolute(`${pages.experiences.path}/${e.slug}`), lastModified, changeFrequency: "monthly" as const, priority: 0.7 })),
  ];

  return [...statics, ...dynamic];
}
