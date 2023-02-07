import React, { useState, createContext } from 'react';
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from '@mui/material/styles';
import { darkTheme, lightTheme } from '../src/theme';

const ColorModeContext = createContext({ toggleColorMode: () => {} });

/* eslint-disable react/prop-types */
export default function ToggleColorMode({ children }) {
  const [mode, setMode] = useState('dark');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = React.useMemo(() =>
    responsiveFontSizes(
      createTheme({
        ...(mode === 'light' ? lightTheme : darkTheme),
      }),
      [mode]
    )
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}
