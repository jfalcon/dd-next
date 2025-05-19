import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';
import AppThemeProvider from '@/context/AppTheme';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import '@/app/globals.css';

// see the readme about using CSS variables
const font = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  description: 'Dunedain Interview Demo',
  icons: {
    icon: '/favicon.png', // public path
  },
  title: 'Dunedain Demo',
};

export default async function LocaleLayout({children, params}: Readonly<{
  children: React.ReactNode;
  params: { locale: string }
}>) {
  const {locale} = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={font.variable}>
        <AppRouterCacheProvider options={{ enableCssLayer: false }}>
          <NextIntlClientProvider messages={messages}>
            <AppThemeProvider>
              <InitColorSchemeScript attribute="class" />
              {children}
            </AppThemeProvider>
          </NextIntlClientProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
