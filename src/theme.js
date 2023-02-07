import { createTheme } from '@mui/material';

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
    fontFamily: "'Sora', sans-serif",
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
  },
  typography: {
    fontFamily: "'Sora', sans-serif",
  },
};

export { lightTheme, darkTheme };
