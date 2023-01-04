import PropTypes from 'prop-types';
import { Container, Grid, Typography, Box } from '@mui/material';
import Image from 'next/image';
import { getPlaiceholder } from 'plaiceholder';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Projects from '../../src/projectData';
import ProjectSection from '../../components/ProjectSection';
import SEOHead from '../../components/SEOHead';

export default function ListProjects({ placeholders, bannerBlur }) {
  const title = 'Edwin Lopez | Projects';
  const description =
    "A showcase of Edwin's various web / mobile projects and computer science programs.";
  const keywords =
    'projects, mobile development, web development, frameworks, software engineer, front end, back end';

  const { t } = useTranslation('projects');

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
              {t('projects')}
            </Typography>
            <Typography variant="h5" paragraph>
              {t('checkOutProjects')}
            </Typography>
          </Grid>

          <Grid item sx={{ m: { xs: 'auto', md: 0 } }}>
            <Image
              priority
              src="/images/projects.png"
              alt="Memoji of myself behind a laptop"
              height={260}
              width={220}
              placeholder="blur"
              blurDataURL={bannerBlur}
            />
          </Grid>
        </Grid>
      </Container>

      <Box bgcolor="background.default" sx={{ py: 5 }}>
        <Container>
          <ProjectSection projects={Projects} {...{ placeholders, t }} />
        </Container>
      </Box>
    </>
  );
}

ListProjects.propTypes = {
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
      ...(await serverSideTranslations(locale, ['projects', 'common'])),
    },
  };
}
