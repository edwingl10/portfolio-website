import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import { GlobalStyles } from '@mui/material';
import { appWithTranslation } from 'next-i18next';
/* eslint-disable no-unused-vars */
import { lightTheme, darkTheme } from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';
import Layout from '../components/Layout';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

/* eslint-disable react/prop-types */
function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <GlobalStyles />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default appWithTranslation(MyApp);
