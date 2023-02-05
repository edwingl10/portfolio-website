import { createTheme, responsiveFontSizes } from '@mui/material';

const lightTheme = responsiveFontSizes(
  createTheme({
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
    },
    typography: {
      fontFamily: "'Sora', sans-serif",
    },
  })
);

const darkTheme = responsiveFontSizes(
  createTheme({
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
    },
    typography: {
      fontFamily: "'Sora', sans-serif",
    },
  })
);

export { lightTheme, darkTheme };
