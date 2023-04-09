import PropTypes from 'prop-types';
import Image from 'next/legacy/image';
import { useState } from 'react';
import {
  Container,
  Typography,
  Button,
  Link as MuiLink,
  Box,
  Stack,
  SvgIcon,
  Tooltip,
  Zoom,
  Snackbar,
  Grid,
} from '@mui/material';
import { getPlaiceholder } from 'plaiceholder';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';
import Projects from '../../src/projectData';
import Icon, { iconTitles } from '../../components/Icon';
import SEOHead from '../../components/SEOHead';
import {
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  fadeInUp,
  inViewProps,
  staggerChildren,
} from '../../utils/animations';

export default function ViewProject({ project, mainBlurData, secondBlurData }) {
  const { t } = useTranslation(['project', 'projects', 'common']);

  const formatedTechUsed = project.techUsed.map((p) => iconTitles[p]);
  const title = `Edwin Lopez | ${project.name}`;
  const description = t('head.description', {
    project: project.name,
    tech: formatedTechUsed.join(', '),
  });
  const keywords = formatedTechUsed.join(', ');

  const [open, setOpen] = useState(false);
  const shareClick = () => {
    setOpen(true);
    navigator.clipboard.writeText(window.location.toString());
  };

  return (
    <>
      <SEOHead {...{ title, description, keywords }} />

      <Container sx={{ my: 5, py: 2 }}>
        <Grid
          container
          direction={{ xs: 'column-reverse', md: 'row' }}
          spacing={3}
          alignItems={{ md: 'center' }}>
          <Grid
            item
            xs={12}
            md={7}
            component={motion.div}
            variants={fadeInLeft}>
            <Typography variant="h3" paragraph color="secondary">
              {project.name}
            </Typography>
            <Typography paragraph>
              {t(`projects:${project.description}`)}
            </Typography>

            <Button
              component={MuiLink}
              href={project.link}
              target="_blank"
              color="secondary"
              variant="contained"
              sx={{ mt: 2 }}>
              {t('common:btn.explore')}
            </Button>
          </Grid>

          <Grid
            item
            xs={12}
            md={5}
            component={motion.div}
            variants={fadeInRight}>
            <Box
              sx={{
                position: 'relative',
                height: { xs: 270, sm: 320 },
              }}>
              <Image
                priority
                src={project.mainImg}
                alt={t(`projects:${project.mainImgAltText}`)}
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                blurDataURL={mainBlurData}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Box bgcolor="background.default" sx={{ py: 5 }}>
        <Container>
          <Grid
            container
            direction={{ xs: 'column-reverse', md: 'row' }}
            spacing={3}
            alignItems={{ md: 'center' }}>
            <Grid
              item
              xs={12}
              md={5}
              component={motion.div}
              {...inViewProps}
              variants={fadeInLeft}>
              <Box
                sx={{
                  position: 'relative',
                  height: { xs: 270, sm: 320 },
                }}>
                <Image
                  src={project.secondImg}
                  alt={t(`projects:${project.secondImgAltText}`)}
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                  blurDataURL={secondBlurData}
                />
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              md={7}
              component={motion.div}
              {...inViewProps}
              variants={fadeInUp}>
              <Typography variant="h4" paragraph color="primary">
                {t('behindTheScenes')}
              </Typography>
              <Typography paragraph>
                {t(`projects:${project.moreDetails}`)}
              </Typography>

              <Button
                color="secondary"
                variant="outlined"
                onClick={shareClick}
                sx={{ mt: 2 }}>
                {t('common:btn.share')}
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: 5 }} textAlign="center">
        <Typography variant="h4" color="primary" sx={{ mb: 4 }}>
          {t('technologyUsed')}
        </Typography>
        <Stack
          direction="row"
          sx={{ flexWrap: 'wrap' }}
          rowGap={3}
          spacing={{ xs: 4, md: 6 }}
          justifyContent="center"
          component={motion.div}
          {...inViewProps}
          variants={staggerChildren}>
          {project.techUsed.map((name) => (
            <Tooltip
              key={iconTitles[name]}
              title={iconTitles[name]}
              enterTouchDelay={50}
              TransitionComponent={Zoom}
              component={motion.div}
              variants={fadeInDown}>
              <SvgIcon fontSize="large" color="primary">
                <Icon name={`${name}`} height="inherit" width="inherit" />
              </SvgIcon>
            </Tooltip>
          ))}
        </Stack>
      </Box>

      <Snackbar
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        autoHideDuration={2000}
        message={t('common:copiedToClipboard')}
        ContentProps={{
          sx: {
            bgcolor: 'background.default',
            color: (theme) => theme.palette.text.primary,
          },
        }}
      />
    </>
  );
}

ViewProject.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    overview: PropTypes.string,
    description: PropTypes.string,
    moreDetails: PropTypes.string,
    techUsed: PropTypes.arrayOf(PropTypes.string),
    type: PropTypes.string,
    link: PropTypes.string,
    mainImg: PropTypes.string,
    secondImg: PropTypes.string,
    mainImgAltText: PropTypes.string,
    secondImgAltText: PropTypes.string,
  }).isRequired,
  mainBlurData: PropTypes.string.isRequired,
  secondBlurData: PropTypes.string.isRequired,
};

export async function getStaticProps({ locale, params }) {
  const project = Projects.filter((p) => p.id.toString() === params.id)[0];
  const { base64: mainBlurData } = await getPlaiceholder(project.mainImg, {
    size: 10,
  });
  const { base64: secondBlurData } = await getPlaiceholder(project.secondImg, {
    size: 10,
  });

  return {
    props: {
      project,
      mainBlurData,
      secondBlurData,
      ...(await serverSideTranslations(locale, [
        'project',
        'projects',
        'common',
      ])),
    },
  };
}

export async function getStaticPaths({ locales }) {
  const paths = Projects.map((project) =>
    locales.map((locale) => ({
      params: { id: project.id.toString() },
      locale,
    }))
  ).flat();

  return { paths, fallback: false };
}
