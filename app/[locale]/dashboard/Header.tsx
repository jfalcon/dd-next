import Stack from '@mui/material/Stack';
import Breadcrumbs from './Breadcrumbs';
import Search from '@/components/Search';

export default function Header() {
  return (
    <Stack
      direction="row"
      sx={{
        display: { xs: 'none', md: 'flex' },
        width: '100%',
        alignItems: { xs: 'flex-start', md: 'center' },
        justifyContent: 'space-between',
        maxWidth: { sm: '100%', md: '1700px' },
        pt: 1.5,
      }}
      spacing={2}
    >
      <Breadcrumbs />
      <Stack direction="row" sx={{ gap: 1 }}>
        <Search />
      </Stack>
    </Stack>
  );
}
