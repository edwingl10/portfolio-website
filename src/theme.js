import { createTheme, responsiveFontSizes } from '@mui/material';

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: '#3d5a80',
      },
      secondary: {
        main: '#ee6c4d',
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

export default theme;
