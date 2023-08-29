import {
  Container,
  Grid,
  Typography,
  Button,
  Link as MuiLink,
  Box,
} from '@mui/material';
import Image from 'next/legacy/image';
import { getPlaiceholder } from 'plaiceholder';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';
import {
  fadeIn,
  fadeInLeft,
  fadeInRight,
  fadeInUp,
  inViewProps,
} from '../utils/animations';
import SEOHead from '../components/SEOHead';

export default function about({ placeholders }) {
  const { t } = useTranslation(['about', 'common']);

  const title = t('head.title');
  const description = t('head.description');
  const keywords = t('head.keywords');

  return (
    <Box bgcolor="background.paper">
      <SEOHead {...{ title, description, keywords }} />

      <Container sx={{ my: 5, py: 2 }}>
        <Grid
          container
          direction={{ xs: 'column-reverse', md: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={3}>
          <Grid item xs={12} sm={8} component={motion.div} variants={fadeIn}>
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

          <Grid
            item
            sx={{ m: { xs: 'auto', md: 0 } }}
            component={motion.div}
            variants={fadeInRight}>
            <Image
              priority
              src="/images/wave.png"
              alt={t('images.wave')}
              height={280}
              width={240}
              placeholder="blur"
              blurDataURL={placeholders.bannerBlur}
            />
          </Grid>
        </Grid>
      </Container>

      <Box
        bgcolor="background.default"
        sx={{ py: 5 }}
        component={motion.div}
        {...inViewProps}>
        <Container>
          <Grid
            container
            direction={{ xs: 'column', md: 'row' }}
            spacing={3}
            alignItems={{ md: 'center' }}>
            <Grid
              item
              xs={12}
              sm={5}
              component={motion.div}
              variants={fadeInLeft}>
              <Box
                sx={{
                  position: 'relative',
                  height: { xs: 250, sm: 300, md: 330 },
                }}>
                <Image
                  src="/images/coding.svg"
                  alt={t('images.coding')}
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                  blurDataURL={placeholders.secondaryBlur}
                />
              </Box>
            </Grid>

            <Grid item xs={12} sm={7}>
              <Typography
                variant="h4"
                paragraph
                color="primary"
                component={motion.p}
                variants={fadeIn}>
                {t('myPassion')}
              </Typography>
              <motion.p variants={fadeInUp}>
                <Typography paragraph>{t('uncoveredMyPassion')}</Typography>
                <Typography>{t('moreAboutMyPassion')}</Typography>
              </motion.p>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export async function getStaticProps({ locale }) {
  const { base64: bannerBlur } = await getPlaiceholder('/images/wave.png', {
    size: 10,
  });
  const { base64: secondaryBlur } = await getPlaiceholder(
    '/images/coding.svg',
    { size: 10 },
  );
  const placeholders = { bannerBlur, secondaryBlur };
  return {
    props: {
      placeholders,
      ...(await serverSideTranslations(locale, ['about', 'common'])),
    },
  };
}
