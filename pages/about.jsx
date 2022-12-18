import {
  Container,
  Grid,
  Typography,
  Button,
  Link as MuiLink,
  Box,
} from '@mui/material';
import Image from 'next/image';
import { getPlaiceholder } from 'plaiceholder';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import SEOHead from '../components/SEOHead';

export default function about({ placeholders }) {
  const title = 'Edwin Lopez | About';
  const description =
    'Edwin Lopez graduated from the University of California, Irvine as a software engineer and enjoys working on front-end/back-end web projects.';
  const keywords =
    'software engineer, university of california irvine, front end, back end';

  const { t } = useTranslation(['about', 'common']);

  return (
    <>
      <SEOHead {...{ title, description, keywords }} />

      <Container sx={{ my: 5, py: 2 }}>
        <Grid
          container
          direction={{ xs: 'column-reverse', md: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={3}>
          <Grid item xs={12} sm={8}>
            <Typography variant="h3" paragraph color="secondary">
              {t('about')}
            </Typography>
            <Typography paragraph>{t('ImAFirstGen')}</Typography>

            <Button
              component={MuiLink}
              color="secondary"
              variant="contained"
              href="mailto:edwingl@uci.edu"
              sx={{ mt: 2 }}>
              {t('common:btn.contact')}
            </Button>
          </Grid>

          <Grid item sx={{ m: { xs: 'auto', md: 0 } }}>
            <Image
              priority
              src="/images/wave.png"
              alt="Memoji of myself smiling and waving"
              height={260}
              width={220}
              placeholder="blur"
              blurDataURL={placeholders.bannerBlur}
            />
          </Grid>
        </Grid>
      </Container>

      <Box bgcolor="background.default" sx={{ py: 5 }}>
        <Container>
          <Grid container direction={{ xs: 'column', md: 'row' }} spacing={3}>
            <Grid item xs={12} sm={5}>
              <Box
                sx={{
                  position: 'relative',
                  height: { xs: 270, sm: 320 },
                }}>
                <Image
                  src="/images/coding.svg"
                  alt="Hands typing on a keyboard with a plant, coffee, mouse, and monitor on the workspace"
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                  blurDataURL={placeholders.secondaryBlur}
                />
              </Box>
            </Grid>

            <Grid item xs={12} sm={7}>
              <Typography variant="h4" paragraph color="primary">
                {t('myPassion')}
              </Typography>
              <Typography paragraph>{t('uncoveredMyPassion')}</Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export async function getStaticProps({ locale }) {
  const { base64: bannerBlur } = await getPlaiceholder('/images/wave.png', {
    size: 10,
  });
  const { base64: secondaryBlur } = await getPlaiceholder(
    '/images/coding.svg',
    { size: 10 }
  );
  const placeholders = { bannerBlur, secondaryBlur };
  return {
    props: {
      placeholders,
      ...(await serverSideTranslations(locale, ['about', 'common'])),
    },
  };
}
