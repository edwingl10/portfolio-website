import Head from 'next/head';
import PropTypes from 'prop-types';
import Image from 'next/image';
import {
  Container,
  Grid,
  Typography,
  Button,
  Link as MuiLink,
  Box,
  Stack,
  SvgIcon,
  Tooltip,
  Zoom,
} from '@mui/material';
import Projects from '../../src/projectData';
import Icon, { iconTitles } from '../../components/Icon';

export async function getStaticProps({ params }) {
  const project = Projects.filter((p) => p.id.toString() === params.id)[0];
  return { props: { project } };
}

export async function getStaticPaths() {
  const paths = Projects.map((project) => ({
    params: { id: project.id.toString() },
  }));

  return { paths, fallback: false };
}

export default function ViewProject({ project }) {
  return (
    <>
      <Head>
        <title>Edwin Lopez | {project.name}</title>
      </Head>

      <Container sx={{ my: 5, py: 2 }}>
        <Grid
          container
          direction={{ xs: 'column-reverse', md: 'row' }}
          spacing={3}>
          <Grid item xs={12} sm={7}>
            <Typography variant="h3" paragraph color="secondary">
              {project.name}
            </Typography>
            <Typography paragraph>{project.description}</Typography>

            <Button
              component={MuiLink}
              href={project.link}
              target="_blank"
              color="secondary"
              variant="contained"
              sx={{ mt: 2 }}>
              Explore
            </Button>
          </Grid>

          <Grid item xs={12} sm={5}>
            <Box
              sx={{
                position: 'relative',
                height: { xs: 270, sm: 320 },
              }}>
              <Image
                src={project.mainImg}
                alt="Image of project"
                layout="fill"
                objectFit="cover"
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
            spacing={3}>
            <Grid item xs={12} sm={5}>
              <Box
                sx={{
                  position: 'relative',
                  height: { xs: 270, sm: 320 },
                }}>
                <Image
                  src={project.secondImg ?? '/images/placeholder.jpg'}
                  alt="Image of project"
                  layout="fill"
                  objectFit="cover"
                />
              </Box>
            </Grid>

            <Grid item xs={12} sm={7}>
              <Typography variant="h4" paragraph color="primary">
                Behind the Scenes
              </Typography>
              <Typography paragraph>{project.moreDetails}</Typography>

              <Button
                component={MuiLink}
                color="secondary"
                variant="contained"
                sx={{ mt: 2 }}>
                Share
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: 5 }} textAlign="center">
        <Typography variant="h4" color="primary" sx={{ mb: 4 }}>
          Technology Used
        </Typography>
        <Stack
          direction="row"
          sx={{ flexWrap: 'wrap' }}
          rowGap={3}
          columnGap={{ xs: 4, md: 6 }}
          justifyContent="center">
          {project.techUsed.map((name) => (
            <Tooltip
              key={iconTitles[name]}
              title={iconTitles[name]}
              enterTouchDelay={50}
              TransitionComponent={Zoom}>
              <SvgIcon fontSize="large" color="primary">
                <Icon name={`${name}`} height="inherit" width="inherit" />
              </SvgIcon>
            </Tooltip>
          ))}
        </Stack>
      </Box>
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
  }).isRequired,
};
