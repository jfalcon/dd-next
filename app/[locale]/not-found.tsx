'use client';

import Box from '@mui/material/Box';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function NotFound() {
  const pathname = usePathname();

  return (
    <main>
      <Box sx={{ textAlign: 'center' }}>
        <h1>Page Not Found</h1>
        <p>The path <cite>{pathname}</cite> does not exist.</p>
        <Link href="/">Back to home</Link>
      </Box>
    </main>
  );
}
