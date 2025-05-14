'use client';

import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

// see the readme about using CSS variables
export const font = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

// see the readme about using CSS variables
export const theme = createTheme({
  cssVariables: true,
  typography: {
    fontFamily: 'var(--font-roboto)',
  },
});

export default theme;
