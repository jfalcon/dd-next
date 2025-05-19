'use client';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Footer from './Footer';
import Deployments from './Deployments';
import LatestNews from './LatestNews';
import HoursSavedChart from './HoursSavedChart';
import StatCard, { StatCardProps } from './StatCard';
import { withNews } from './withNews';
import { useTranslations } from 'next-intl';

const data: StatCardProps[] = [
  {
    title: 'Forms',
    value: '22',
    interval: 'Last 30 days',
    trend: 'up',
    data: [
      20, 2, 22, 26, 24, 38, 10, 24, 28, 24, 30, 34, 32, 36, 34, 38,
      36, 40, 38, 42, 40, 64, 34, 46, 44, 48, 46, 60, 88, 92,
    ],
  },
  {
    title: 'MREs Consumed',
    value: '32',
    interval: 'Last 30 days',
    trend: 'down',
    data: [
      164, 125, 97, 113, 105, 90, 72, 108, 90, 45, 92, 82, 84, 60, 82,
      78, 80, 76, 38, 74, 66, 62, 84, 50, 52, 48, 40, 36, 30, 22,
    ],
  },
  {
    title: 'Event Count',
    value: '200k',
    interval: 'Last 30 days',
    trend: 'neutral',
    data: [
      500, 400, 510, 530, 520, 600, 530, 520, 510, 730, 520, 510, 530, 620, 510, 530,
      520, 410, 530, 520, 610, 530, 520, 610, 530, 420, 510, 430, 520, 510,
    ],
  },
];

// just showing one possible scenario for using an HOC
const LatestNewsWithNews = withNews(LatestNews);

export default function MainGrid() {
  const t = useTranslations('Dashboard');

  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
      {/* cards */}
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        {t('overview')}
      </Typography>
      <Grid
        container
        spacing={2}
        columns={12}
        sx={{ mb: (theme) => theme.spacing(2) }}
      >
        {data.map((card, index) => (
          <Grid key={index} size={{ xs: 12, lg: 4 }}>
            <StatCard {...card} />
          </Grid>
        ))}
        <Grid size={{ xs: 12 }}>
          <HoursSavedChart />
        </Grid>
      </Grid>
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        {t('details')}
      </Typography>
      <Grid container spacing={2} columns={12}>
        <Grid size={{ xs: 12, lg: 9 }}>
          <LatestNewsWithNews />
        </Grid>
        <Grid size={{ xs: 12, lg: 3 }}>
          <Stack gap={2} direction={{ xs: 'column', sm: 'row', lg: 'column' }}>
            <Deployments />
          </Stack>
        </Grid>
      </Grid>
      <Footer sx={{ my: 4 }} />
    </Box>
  );
}
