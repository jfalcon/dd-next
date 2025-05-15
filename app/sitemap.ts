import type { MetadataRoute } from 'next';
import { getBaseUrl } from '@/app/utility';

// this should dynamically build a sitemap for SEO reasons but *only* for public sites,
// adding the stub here to show it's important to include for public sites and is
// important to not include for private sites
export default function sitemap(): MetadataRoute.Sitemap {
  const result: MetadataRoute.Sitemap = [];

  // Google's limit is 50,000 URLs per sitemap
  for (let x=1; x <= 10; x++) {
    result.push({
      url: `${getBaseUrl()}/${x}`,
      lastModified: new Date(),
      changeFrequency: (x % 2 === 0) ? 'weekly' : 'monthly',
      priority: x,
    });
  }

  return result;
}
