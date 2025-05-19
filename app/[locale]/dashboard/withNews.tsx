'use client';

import { ComponentType, useEffect, useState } from 'react';
import { GET as getNews } from '@/app/api/news/route';
import type { NewsPayload } from '@/app/api/news/route';
import type { RestResponse } from '@/types';
import { HttpStatusCode } from '@/types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function withNews(Component: ComponentType<any>) {
  // in the real world you'd also need to invalidate any SSG cache
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const WrappedComponent = (props: any) => {
    const [news, setNews] = useState<NewsPayload>({
      article: '',
      date: new Date(),
      title: '',
    });

    useEffect(() => {
      (async () => {
        // intentionally skip the extra network hop
        const response = await getNews();

        if (response.status === HttpStatusCode.Ok) {
          const data = await response.json() as RestResponse<NewsPayload>;

          if (data.success && data.payload) {
            // we have to reconvert the date since it's a string now
            const date = new Date(data.payload.date);
            setNews({...data.payload, date});
          }
        }
      })();
    }, []);

    return <Component {...props} news={news} />;
  };

  // useful for debugging
  const displayName = Component.displayName || Component.name || 'Component';
  WrappedComponent.displayName = `${withNews.name}(${displayName})`;

  return WrappedComponent;
}
