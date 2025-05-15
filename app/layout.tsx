import type { Metadata } from 'next';
import { ThemeProvider } from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { font, theme } from '@/app/theme';

import '@/app/globals.css';

export const metadata: Metadata = {
  description: 'Dunedain Interview Demo',
  icons: {
    icon: '/favicon.png', // public path
  },
  title: 'Dunedain Demo',
};

export default function RootLayout({children,}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.variable} blur`}>
        {/* enableCssLayer is required for CSS modules */}
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
