import PropTypes from 'prop-types';
import { useState } from 'react';
import { Container, Grid, Typography, Box, Stack, Button } from '@mui/material';
import Image from 'next/legacy/image';
import { getPlaiceholder } from 'plaiceholder';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';
import { fadeInLeft, fadeInRight } from '../../utils/animations';
import Projects from '../../src/projectData';
import ProjectSection from '../../components/ProjectSection';
import SEOHead from '../../components/SEOHead';

export default function ListProjects({ placeholders, bannerBlur }) {
  const { t } = useTranslation('projects');
  const [projectType, setProjectType] = useState('all');

  const title = t('head.title');
  const description = t('head.description');
  const keywords = t('head.keywords');

  const filters = [
    { type: 'all', active: projectType === 'all' },
    { type: 'web', active: projectType === 'web' },
    { type: 'game', active: projectType === 'game' },
    { type: 'other', active: projectType === 'other' },
  ];

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
          <Grid
            item
            xs={12}
            sm={8}
            component={motion.div}
            variants={fadeInLeft}>
            <Typography variant="h3" paragraph color="secondary">
              {t('projects')}
            </Typography>
            <Typography variant="h5" paragraph>
              {t('checkOutProjects')}
            </Typography>
          </Grid>

          <Grid
            item
            sx={{ m: { xs: 'auto', md: 0 } }}
            component={motion.div}
            variants={fadeInRight}>
            <Image
              priority
              src="/images/projects.png"
              alt={t('behindLaptopImgAlt')}
              height={280}
              width={240}
              placeholder="blur"
              blurDataURL={bannerBlur}
            />
          </Grid>
        </Grid>
      </Container>

      <Box bgcolor="background.default" sx={{ py: 5 }}>
        <Stack
          direction="row"
          justifyContent="center"
          spacing={2}
          sx={{ mb: 3 }}>
          {filters.map((f) => (
            <Button
              key={f.type}
              onClick={() => setProjectType(f.type)}
              color={f.active ? 'primary' : 'inherit'}
              variant={f.active ? 'contained' : 'text'}
              sx={{
                borderRadius: 4,
                textTransform: 'capitalize',
                padding: '6px 8px',
              }}>
              {f.type}
            </Button>
          ))}
        </Stack>
        <Container>
          <ProjectSection
            projects={Projects.filter(
              (p) => projectType === 'all' || p.type === projectType
            )}
            {...{ placeholders }}
          />
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
