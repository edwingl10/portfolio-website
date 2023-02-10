import React, {
  useState,
  createContext,
  useContext,
  useEffect,
  useMemo,
} from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from '@mui/material/styles';
import { darkTheme, lightTheme } from '../src/theme';

const ColorModeContext = createContext({ toggleColorMode: () => {} });

export function useThemeUpdate() {
  return useContext(ColorModeContext);
}

/* eslint-disable react/prop-types */
export default function MUIThemeProvider({ children }) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState();
  const [mounted, setMounted] = useState(false);

  // sets theme to user preference and if none, will default to system preference
  useEffect(() => {
    const userSetPreference = localStorage.getItem('theme');
    if (userSetPreference !== null && userSetPreference !== mode) {
      setMode(userSetPreference);
    } else {
      setMode(prefersDarkMode ? 'dark' : 'light');
    }
  }, [prefersDarkMode]);

  useEffect(() => {
    if (mode) {
      localStorage.setItem('theme', mode);
    }
  }, [mode]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = useMemo(() =>
    responsiveFontSizes(
      createTheme({
        ...(mode === 'light' ? lightTheme : darkTheme),
      }),
      []
    )
  );

  if (!mounted) {
    return <div />;
  }

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}
