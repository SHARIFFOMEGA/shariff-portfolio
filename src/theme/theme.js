import { createTheme } from '@mui/material/styles';

const FONT_STACK =
  '"Lufga", "Poppins", "Inter", "Helvetica", "Arial", sans-serif';

const baseTypography = {
  fontFamily: FONT_STACK,
  h1: { fontFamily: FONT_STACK, fontWeight: 800, letterSpacing: '-1px' },
  h2: { fontFamily: FONT_STACK, fontWeight: 700, letterSpacing: '-0.5px' },
  h3: { fontFamily: FONT_STACK, fontWeight: 700 },
  h4: { fontFamily: FONT_STACK, fontWeight: 600 },
  h5: { fontFamily: FONT_STACK, fontWeight: 600 },
  h6: { fontFamily: FONT_STACK, fontWeight: 600 },
  button: { fontFamily: FONT_STACK, fontWeight: 600, textTransform: 'none', letterSpacing: '0.3px' },
  body1: { fontFamily: FONT_STACK, lineHeight: 1.7 },
  body2: { fontFamily: FONT_STACK, lineHeight: 1.7 },
};

export const palette = {
  ORANGE: '#F26B2C',
  ORANGE_LIGHT: '#FF8A50',
  ORANGE_DEEP: '#D85A1F',
  NAVY: '#0B1F3A',
  CREAM: '#FFF5EE',
  INK: '#171717',
  INK_SOFT: '#262626',
};

export const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: palette.ORANGE,
        light: palette.ORANGE_LIGHT,
        dark: palette.ORANGE_DEEP,
        contrastText: '#FFFFFF',
      },
      secondary: {
        main: palette.NAVY,
      },
      background: {
        default: mode === 'light' ? '#FFFBF7' : '#0F0F12',
        paper: mode === 'light' ? '#FFFFFF' : '#1A1A1F',
      },
      text: {
        primary: mode === 'light' ? '#171717' : '#F5F5F5',
        secondary: mode === 'light' ? '#5C5C5C' : '#B0B0B0',
      },
    },
    typography: baseTypography,
    shape: { borderRadius: 16 },
    components: {
      MuiButton: {
        styleOverrides: {
          root: { borderRadius: 999, paddingInline: 24, paddingBlock: 11 },
          containedPrimary: {
            boxShadow: '0 14px 28px -10px rgba(242,107,44,0.55)',
            '&:hover': { boxShadow: '0 18px 32px -10px rgba(242,107,44,0.75)' },
          },
        },
      },
      MuiPaper: {
        styleOverrides: { root: { backgroundImage: 'none' } },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 20,
            transition: 'transform 220ms ease, box-shadow 220ms ease',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow:
                mode === 'light'
                  ? '0 22px 44px -22px rgba(23,23,23,0.22)'
                  : '0 22px 44px -22px rgba(0,0,0,0.7)',
            },
          },
        },
      },
      MuiChip: {
        styleOverrides: { root: { fontWeight: 500 } },
      },
    },
  });
