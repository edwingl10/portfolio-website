import PropTypes from 'prop-types';
import { Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Projects from '../../src/projectData';
import ProjectSection from '../../components/ProjectSection';

export async function getStaticProps() {
  return { props: { projects: Projects } };
}

export default function ListProjects({ projects }) {
  return (
    <Container>
      <Grid
        container
        direction={{ xs: 'column-reverse', md: 'row' }}
        justifyContent="space-between"
        spacing={3}
        sx={{ my: 5 }}>
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
            alt="Memoji of me with a computer"
            height={260}
            width={220}
          />
        </Grid>
      </Grid>

      <ProjectSection projects={projects} />
    </Container>
  );
}

ListProjects.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      overview: PropTypes.string,
      description: PropTypes.string,
      description2: PropTypes.string,
      type: PropTypes.string,
      link: PropTypes.string,
      mainImg: PropTypes.string,
    })
  ).isRequired,
};
