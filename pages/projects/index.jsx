import PropTypes from 'prop-types';
import { Container, Grid, Typography, Box } from '@mui/material';
import Image from 'next/image';
import Projects from '../../src/projectData';
import ProjectSection from '../../components/ProjectSection';
import SEOHead from '../../components/SEOHead';

export async function getStaticProps() {
  return { props: { projects: Projects } };
}

export default function ListProjects({ projects }) {
  const title = 'Edwin Lopez | Projects';
  const description =
    "A showcase of Edwin's various web / mobile projects and computer science programs.";
  const keywords =
    'projects, mobile development, web development, frameworks, software engineer, front end, back end';

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
              Projects
            </Typography>
            <Typography variant="h5" paragraph>
              Check out some of the projects I have worked on, using different
              languages and frameworks.
            </Typography>
          </Grid>

          <Grid item sx={{ m: { xs: 'auto', md: 0 } }}>
            <Image
              priority
              src="/images/projects.png"
              alt="Memoji of myself behind a laptop"
              height={260}
              width={220}
            />
          </Grid>
        </Grid>
      </Container>

      <Box bgcolor="background.default" sx={{ py: 5 }}>
        <Container>
          <ProjectSection projects={projects} />
        </Container>
      </Box>
    </>
  );
}

ListProjects.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      overview: PropTypes.string,
      description: PropTypes.string,
      moreDetails: PropTypes.string,
      techUsed: PropTypes.arrayOf(PropTypes.string),
      type: PropTypes.string,
      link: PropTypes.string,
      mainImg: PropTypes.string,
    })
  ).isRequired,
};
