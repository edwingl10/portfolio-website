import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import { GlobalStyles } from '@mui/material';
import { appWithTranslation } from 'next-i18next';
import createEmotionCache from '../src/createEmotionCache';
import Layout from '../components/Layout';
import ToggleColorMode from '../components/ThemeContext';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

/* eslint-disable react/prop-types */
function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <ToggleColorMode>
        <CssBaseline />
        <GlobalStyles />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ToggleColorMode>
    </CacheProvider>
  );
}

export default appWithTranslation(MyApp);
