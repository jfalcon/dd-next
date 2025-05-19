import { getSessionInfo } from '@/utility';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Header from './Header';
import Navbar from './Navbar';
import SideMenu from './SideMenu';
import MainGrid from './MainGrid';

export default async function Dashboard() {
  // this server-side so no need for useMemo here
  const session = await getSessionInfo();

  return (
    <Box sx={{ display: 'flex' }}>
      <SideMenu session={session} />
      <Navbar session={session} />
      <Box
        component="main"
        sx={{flexGrow: 1, overflow: 'auto'}}
      >
        <Stack
          spacing={2}
          sx={{
            alignItems: 'center',
            mx: 3,
            pb: 5,
            mt: { xs: 8, md: 0 },
          }}
        >
          <Header />
          <MainGrid />
        </Stack>
      </Box>
    </Box>
  );
}
