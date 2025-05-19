'use client';

import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { createContext, useMemo } from 'react';
import type { PropsWithChildren } from 'react';

declare module '@mui/material/styles' {
  interface Palette {
    paperTransparent: string;
  }

  interface PaletteOptions {
    paperTransparent: string;
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////

export const AppThemeContext = createContext(null);

////////////////////////////////////////////////////////////////////////////////////////////////////

export const AppThemeProvider = (props: PropsWithChildren) => {
  const theme = useMemo(() => {
    return responsiveFontSizes(createTheme({
      colorSchemes: {
        light: {
          palette: {
            background: {
              default: 'rgba(0, 0, 0, 0)', // we control this via CSS for less flicker
              paper: 'rgb(240, 240, 240)', // never use a pure white
            },
            primary: {
              main: '#6e6f5f',
              contrastText: '#fff',
            },
            paperTransparent: 'rgba(240, 240, 240, 0.8)',
            text: {
              primary: 'var(--foreground)', // we control this via CSS for less flicker
              primaryChannel: 'var(--foreground)', // we control this via CSS for less flicker
            }
          }
        },
        dark: {
          palette: {
            background: {
              default: 'rgba(0, 0, 0, 0)', // we control this via CSS for less flicker
              paper: 'rgb(30, 30, 30)',
            },
            primary: {
              main: '#6e6f5f',
              contrastText: '#000',
            },
            paperTransparent: 'rgba(30, 30, 30, 0.8)',
            text: {
              primary: 'var(--foreground)', // we control this via CSS for less flicker
              primaryChannel: 'var(--foreground)', // we control this via CSS for less flicker
            }
          }
        }
      },
      cssVariables: {
        colorSchemeSelector: 'class',
        disableCssColorScheme: true
      },
      components: {
        MuiListItemIcon: {
          styleOverrides: {
            root: {
              color: 'hsl(64, 8%, 80%)',
            },
          },
        },
        MuiListItem: {
          styleOverrides: {
            root: {
              color: 'hsl(64, 8%, 80%)',
              '&:hover': {
                backgroundColor: 'rgba(110, 111, 95, 0.5)',
                color: 'hsl(64, 8%, 80%)',
              },
              '&:hover .MuiListItemIcon-root': {
                color: 'hsl(64, 8%, 80%)',
              },
            },
          },
        },
      },
      typography: {
        fontFamily: 'var(--font-roboto)',
      },
    }));
  }, []);

  return (
    <AppThemeContext.Provider value={null}>
      <ThemeProvider theme={theme} disableTransitionOnChange>
        <CssBaseline enableColorScheme />
        {props.children}
      </ThemeProvider>
    </AppThemeContext.Provider>
  );
};

export default AppThemeProvider;

////////////////////////////////////////////////////////////////////////////////////////////////////
