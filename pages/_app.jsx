import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import { appWithTranslation } from 'next-i18next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import Head from 'next/head';
import createEmotionCache from '../src/createEmotionCache';
import Layout from '../components/Layout';
import '../styles/globals.css';

const MUIThemeProvider = dynamic(() => import('../components/ThemeContext'), {
  ssr: false,
});

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

/* eslint-disable react/prop-types */
function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const router = useRouter();

  return (
    <>
      <Head>
        {router.locales.map((locale) => (
          <link
            key={locale}
            rel="alternate"
            hrefLang={locale}
            href={`https://edwingl.dev/${locale}${router.asPath}`}
          />
        ))}
      </Head>

      <CacheProvider value={emotionCache}>
        <MUIThemeProvider>
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MUIThemeProvider>
      </CacheProvider>
    </>
  );
}

export default appWithTranslation(MyApp);
