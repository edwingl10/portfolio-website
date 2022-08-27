import PropTypes from 'prop-types';
import Projects from '../../src/projectData';

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
  return <h1>Project id: {project.id}</h1>;
}

ViewProject.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number,
    overview: PropTypes.string,
    description: PropTypes.string,
    type: PropTypes.string,
    link: PropTypes.string,
    mainImg: PropTypes.string,
  }).isRequired,
};
