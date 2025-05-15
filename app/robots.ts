import type { MetadataRoute } from 'next';
import { getBaseUrl } from '@/utility';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/dashboard/', // TODO: should pull from metadata for a real site
    },
    sitemap: `${getBaseUrl()}/sitemap.xml`,
  };
}
