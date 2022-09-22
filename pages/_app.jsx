import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import { Box } from '@mui/material';
import theme from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';
import Layout from '../components/Layout';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

/* eslint-disable react/prop-types */
export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box bgcolor="background.paper">
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Box>
      </ThemeProvider>
    </CacheProvider>
  );
}
