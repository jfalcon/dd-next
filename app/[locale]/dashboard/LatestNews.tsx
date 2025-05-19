'use client';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import type { NewsPayload } from '@/app/api/news/route';
import { useTranslations } from 'next-intl';

interface LatestNewsProps {
  news: NewsPayload;
}

export default function LatestNews({ news }: LatestNewsProps) {
  const t = useTranslations('News');

  return (
    <Card variant="outlined" sx={{ backgroundColor: 'paperTransparent', width: '100%' }}>
      <CardContent>
        <Typography component="h2" variant="subtitle2" gutterBottom>
          {t('title')}
        </Typography>
        <Stack sx={{ justifyContent: 'space-between' }}>
          <Stack
            direction="row"
            sx={{
              alignContent: { xs: 'center', sm: 'flex-start' },
              alignItems: 'center',
              gap: 1,
            }}
          >
            <Typography variant="h4" component="p">
              {news.title}
            </Typography>
          </Stack>
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            {news.date.toDateString()}
          </Typography>
        </Stack>
        <div dangerouslySetInnerHTML={{ __html: news.article }}></div>
      </CardContent>
    </Card>
  );
}
