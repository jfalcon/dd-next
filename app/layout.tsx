import type { Metadata } from 'next';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';
import AppThemeProvider, { font } from '@/context/AppTheme';

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.variable} blur`}>
        <AppRouterCacheProvider options={{ enableCssLayer: false }}>
          <AppThemeProvider>
            <InitColorSchemeScript attribute="class" />
            {children}
          </AppThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
