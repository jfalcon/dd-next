'use client';

import { Roboto } from 'next/font/google';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { createContext, useMemo } from 'react';
import type { PropsWithChildren } from 'react';

////////////////////////////////////////////////////////////////////////////////////////////////////

// see the readme about using CSS variables
export const font = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

////////////////////////////////////////////////////////////////////////////////////////////////////

export const AppThemeContext = createContext(null);

////////////////////////////////////////////////////////////////////////////////////////////////////

export const AppThemeProvider = (props: PropsWithChildren) => {
  const theme = useMemo(() => {
    return responsiveFontSizes(createTheme({
      colorSchemes: {
        light: {
          palette: {
            primary: {
              main: 'rgb(10, 18, 42)',
            },
            secondary: {
              main: 'rgb(27, 59, 111)',
            }
          }
        },
        dark: {
          palette: {
            primary: {
              main: 'rgb(10, 18, 42)',
            },
            secondary: {
              main: 'rgb(27, 59, 111)',
            }
          }
        }
      },
      cssVariables: {
        colorSchemeSelector: 'class',
        disableCssColorScheme: true
      },
      palette: {
        primary: {
          main: 'rgb(10, 18, 42)',
          contrastText: 'rgb(255, 255, 255)',
        },
        secondary: {
          main: 'rgb(27, 59, 111)',
          contrastText: 'rgb(255, 255, 255)',
        }
      },
      typography: {
        fontFamily: 'var(--font-roboto)',
      },
    }));
  }, []);

  return (
    <AppThemeContext.Provider value={null}>
      <ThemeProvider theme={theme} disableTransitionOnChange noSsr>
        <CssBaseline enableColorScheme />
        {props.children}
      </ThemeProvider>
    </AppThemeContext.Provider>
  );
};

export default AppThemeProvider;

////////////////////////////////////////////////////////////////////////////////////////////////////
