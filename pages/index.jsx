import {
  Container,
  Typography,
  Stack,
  Box,
  Button,
  Link as MuiLink,
  SvgIcon,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Image from 'next/legacy/image';
import Link from 'next/link';
import { getPlaiceholder } from 'plaiceholder';
import PropTypes from 'prop-types';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import SocialLinks from '../components/SocialLinks';
import ProjectSection from '../components/ProjectSection';
import Projects from '../src/projectData';
import Icon, { iconTitles } from '../components/Icon';
import SEOHead from '../components/SEOHead';

const skillsIcons = [
  'react',
  'js',
  'html',
  'css',
  'java',
  'python',
  'mui',
  'figma',
];

export default function Home({ placeholders, bannerBlur }) {
  const { t } = useTranslation(['home', 'common', 'projects']);

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
          <Grid xs={12} md={8}>
            <Typography variant="h3" paragraph color="primary">
              {t('hi')}
              <Box component="span" sx={{ color: 'secondary.main' }}>
                Edwin
              </Box>
            </Typography>
            <Typography variant="h5" paragraph>
              {t('IamASoftwareEngineer')}
            </Typography>

            <Button
              component={MuiLink}
              color="secondary"
              variant="contained"
              href="mailto:edwingl@uci.edu"
              sx={{ mt: 2, mb: 4 }}>
              {t('common:btn.contact')}
            </Button>

            <SocialLinks />
          </Grid>

          <Grid sx={{ m: { xs: 'auto', md: 0 } }}>
            <Image
              priority
              src="/images/welcome.png"
              alt={t('images.welcome')}
              height={250}
              width={220}
              placeholder="blur"
              blurDataURL={bannerBlur}
            />
          </Grid>
        </Grid>
      </Container>

      <Box bgcolor="background.default" sx={{ py: 5 }}>
        <Box textAlign="center">
          <Typography variant="h4" color="primary" sx={{ mb: 4 }}>
            {t('dedicatedDeveloper')}
          </Typography>
          <Container maxWidth="md">
            <Typography>{t('IGraduatedFrom')}</Typography>
          </Container>
        </Box>

        <Box sx={{ pt: 5 }} textAlign="center">
          <Typography variant="h4" color="primary" sx={{ mb: 4 }}>
            {t('mySkills')}
          </Typography>
          <Container maxWidth="sm">
            <Stack
              direction="row"
              sx={{ flexWrap: 'wrap' }}
              rowGap={3}
              columnGap={{ xs: 2, sm: 4 }}
              justifyContent="center">
              {skillsIcons.map((name) => (
                <Box key={iconTitles[name]} sx={{ width: 85, height: 80 }}>
                  <SvgIcon fontSize="large" color="primary">
                    <Icon name={`${name}`} height="100%" width="100%" />
                  </SvgIcon>
                  <Typography>{iconTitles[name]}</Typography>
                </Box>
              ))}
            </Stack>
          </Container>
        </Box>
      </Box>

      <Container sx={{ py: 5, textAlign: 'center' }} id="projects">
        <Typography variant="h4" color="primary" sx={{ mb: 4 }}>
          {t('projects')}
        </Typography>

        <ProjectSection projects={Projects.slice(0, 6)} {...{ placeholders }} />

        <Link href="/projects" passHref legacyBehavior>
          <Button color="secondary" variant="contained" sx={{ mt: 4 }}>
            {t('common:btn.viewMore')}
          </Button>
        </Link>
      </Container>
    </Box>
  );
}

Home.propTypes = {
  placeholders: PropTypes.objectOf(PropTypes.string).isRequired,
  bannerBlur: PropTypes.string.isRequired,
};

export async function getStaticProps({ locale }) {
  const { base64: bannerBlur } = await getPlaiceholder('/images/welcome.png', {
    size: 10,
  });

  const placeholders = {};
  await Promise.all(
    Projects.map(async (data) => {
      const { base64 } = await getPlaiceholder(data.mainImg, { size: 10 });
      placeholders[data.id] = base64;
    })
  );

  return {
    props: {
      placeholders,
      bannerBlur,
      ...(await serverSideTranslations(locale, ['home', 'common', 'projects'])),
    },
  };
}
