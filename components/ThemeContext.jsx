import React, {
  useState,
  createContext,
  useContext,
  useEffect,
  useMemo,
} from 'react';
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from '@mui/material/styles';
import PropTypes from 'prop-types';
import { darkTheme, lightTheme } from '../src/theme';

const ColorModeContext = createContext({ toggleColorMode: () => {} });

export function useThemeUpdate() {
  return useContext(ColorModeContext);
}

export default function MUIThemeProvider({ children }) {
  const [activeTheme, setActiveTheme] = useState(document.body.dataset.theme);

  useEffect(() => {
    document.body.dataset.theme = activeTheme;
    localStorage.setItem('theme', activeTheme);
  }, [activeTheme]);

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setActiveTheme((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(() =>
    responsiveFontSizes(
      createTheme({
        ...(activeTheme === 'light' ? lightTheme : darkTheme),
      }),
      [],
    ),
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}

MUIThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
