import type { MetadataRoute } from 'next';
import { getBaseUrl } from '@/app/utility';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // just stubbing out something for the demo
    },
    sitemap: `${getBaseUrl()}/sitemap.xml`,
  };
}
