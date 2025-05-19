'use client';

import { useRouter } from 'next/navigation';
import type { RestResponse } from '@/types';
import { HttpStatusCode } from '@/types';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Drawer, { drawerClasses } from '@mui/material/Drawer';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import MenuContent from './MenuContent';
import { SessionInfo } from '@/types';

interface SideMenuMobileProps {
  open: boolean | undefined;
  session: SessionInfo;
  toggleDrawer: (newOpen: boolean) => () => void;
}

export default function SideMenuMobile({ open, session, toggleDrawer }: SideMenuMobileProps) {
  const { push } = useRouter();

  const handleLogout = async () => {
    const response = await fetch('/api/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status === HttpStatusCode.Ok) {
      const data = await response.json() as RestResponse<string>;
      if (data.success) push('/');
    }
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={toggleDrawer(false)}
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        [`& .${drawerClasses.paper}`]: {
          backgroundImage: 'none',
        },
      }}
    >
      <Stack
        sx={{
          maxWidth: '70dvw',
          height: '100%',
        }}
      >
        <Stack direction="row" sx={{ p: 2, pb: 0, gap: 1 }}>
          <Stack
            direction="row"
            sx={{ gap: 1, alignItems: 'center', flexGrow: 1, p: 1 }}
          >
            <Avatar
              sizes="small"
              alt={session.user.name}
              src="/avatar.jpg"
              sx={{ width: 24, height: 24 }}
            />
            <Typography component="p" variant="h6">
              {session.user.name}
            </Typography>
          </Stack>
        </Stack>
        <Divider />
        <Stack sx={{ background: 'url("/bg.jpg") repeat center center', flexGrow: 1 }}>
          <MenuContent />
          <Divider />
        </Stack>
        <Stack sx={{ p: 2 }}>
          <Button
            onClick={handleLogout}
            variant="outlined"
            fullWidth>
            Logout
          </Button>
        </Stack>
      </Stack>
    </Drawer>
  );
}
