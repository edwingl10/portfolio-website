import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import { appWithTranslation } from 'next-i18next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { AnimatePresence, motion } from 'framer-motion';
import createEmotionCache from '../src/createEmotionCache';
import Layout from '../components/Layout';
import '../styles/globals.css';
import { pageTransition } from '../utils/animations';

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
          <AnimatePresence
            mode="wait"
            onExitComplete={() => window.scrollTo(0, 0)}>
            <Layout>
              <motion.div
                key={router.route}
                variants={pageTransition}
                initial="initial"
                animate="animate"
                exit="exit"
                transition="transition">
                <Component {...pageProps} />
              </motion.div>
            </Layout>
          </AnimatePresence>
        </MUIThemeProvider>
      </CacheProvider>
    </>
  );
}

export default appWithTranslation(MyApp);
