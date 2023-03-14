import { createTheme } from '@mui/material';
import { Sora } from 'next/font/google';

export const sora = Sora({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

const rawTheme = createTheme();
const lightTheme = {
  palette: {
    mode: 'light',
    primary: {
      main: '#3d5a80',
    },
    secondary: {
      main: '#ee6644',
    },
    background: {
      default: '#fafafa',
    },
    footer: rawTheme.palette.augmentColor({
      color: { main: '#283a53' },
    }),
  },
  typography: {
    fontFamily: sora.style.fontFamily,
  },
};

const darkTheme = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#6b87b0',
    },
    secondary: {
      main: '#d64933',
    },
    background: {
      default: '#121212',
      paper: '#0a0a0a',
    },
    footer: rawTheme.palette.augmentColor({
      color: { main: '#141d29' },
    }),
    text: {
      primary: '#e3e3e3',
    },
  },
  typography: {
    fontFamily: sora.style.fontFamily,
  },
};

export { lightTheme, darkTheme };
