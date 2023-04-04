import {
  Container,
  Typography,
  Box,
  Button,
  Link as MuiLink,
  SvgIcon,
  Grid,
} from '@mui/material';
import Image from 'next/legacy/image';
import Link from 'next/link';
import { getPlaiceholder } from 'plaiceholder';
import PropTypes from 'prop-types';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';
import SocialLinks from '../components/SocialLinks';
import ProjectSection from '../components/ProjectSection';
import Projects from '../src/projectData';
import Icon, { iconTitles } from '../components/Icon';
import SEOHead from '../components/SEOHead';
import {
  fadeInUp,
  fadeIn,
  fadeInRight,
  inViewDefault,
  fadeInDown,
} from '../utils/animations';

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

      <Container
        sx={{ my: 5, py: 2 }}
        component={motion.div}
        variants={fadeInRight}>
        <Grid
          container
          direction={{ xs: 'column-reverse', md: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={3}>
          <Grid item xs={12} md={8}>
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

          <Grid item sx={{ m: { xs: 'auto', md: 0 } }}>
            <Image
              priority
              src="/images/welcome.png"
              alt={t('images.welcome')}
              height={270}
              width={240}
              placeholder="blur"
              blurDataURL={bannerBlur}
            />
          </Grid>
        </Grid>
      </Container>

      <Box
        bgcolor="background.default"
        s
        sx={{ py: 5 }}
        component={motion.div}
        viewport={{ once: true, amount: 0.2 }}
        {...inViewDefault}>
        <Container maxWidth="md" component={motion.div} variants={fadeInDown}>
          <Box sx={{ mb: 10 }}>
            <Typography variant="h4" color="primary" sx={{ mb: 4 }}>
              {t('dedicatedDeveloper')}
            </Typography>
            <Typography paragraph>{t('aboutMe')}</Typography>
            <Typography>{t('moreAboutMe')}</Typography>
          </Box>

          <Box
            textAlign="center"
            component={motion.div}
            viewport={{ once: true, amount: 0.5 }}
            {...inViewDefault}>
            <Typography variant="h4" color="primary" sx={{ mb: 4 }}>
              {t('mySkills')}
            </Typography>
            <Container maxWidth="sm" component={motion.div} variants={fadeIn}>
              <Grid container spacing={4}>
                {skillsIcons.map((name) => (
                  <Grid item key={iconTitles[name]} xs={4} sm={3}>
                    <SvgIcon fontSize="large" color="primary">
                      <Icon name={`${name}`} height="100%" width="100%" />
                    </SvgIcon>
                    <Typography>{iconTitles[name]}</Typography>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Box>
        </Container>
      </Box>

      <Container
        sx={{ py: 5, textAlign: 'center' }}
        id="projects"
        component={motion.div}
        viewport={{ once: true, amount: 0.2 }}
        {...inViewDefault}>
        <Typography variant="h4" color="primary" sx={{ mb: 4 }}>
          {t('projects')}
        </Typography>

        <Box component={motion.div} variants={fadeInUp}>
          <ProjectSection
            projects={Projects.slice(0, 6)}
            {...{ placeholders }}
          />
        </Box>

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
