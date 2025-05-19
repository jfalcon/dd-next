'use client';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Login from '@/components/Login';
import Sidebar from '@/components/Sidebar';
import { Theme } from '@mui/material/styles';

const styles = [
  {
    background: 'url("/logo.svg") no-repeat center center',
    backgroundSize: '50%',
    height: '100%',
  },
  (theme: Theme) =>
    theme.applyStyles('dark', {
      // requires a somewhat modern browser
      filter: 'invert(100%) brightness(75%)',
    }),
];

export default function HomePage() {
  return (
    <Grid container spacing={3}>
      <Grid size={8}>
        <Box component="section" sx={styles}></Box>
      </Grid>
      <Grid size="grow">
        <Sidebar>
          <Login />
        </Sidebar>
      </Grid>
    </Grid>
  );
}
