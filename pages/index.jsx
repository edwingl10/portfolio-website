import {
  Container,
  Typography,
  Grid,
  Stack,
  Box,
  Button,
  Link as MuiLink,
  SvgIcon,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { getPlaiceholder } from 'plaiceholder';
import PropTypes from 'prop-types';
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

export async function getStaticProps() {
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

  return { props: { placeholders, bannerBlur } };
}

export default function Home({ placeholders, bannerBlur }) {
  const title = 'Edwin Lopez | Home';
  const description =
    'Edwin Lopez is a software engineer who has designed and built various projects in different languages and frameworks.';
  const keywords =
    'portfolio, software engineer, web development, mobile development, computer science, game development';

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
            <Typography variant="h3" paragraph color="primary">
              Hi, I&apos;m{' '}
              <Box component="span" sx={{ color: 'secondary.main' }}>
                Edwin
              </Box>
            </Typography>
            <Typography variant="h5" paragraph>
              I am a software engineer currently focusing on bringing web
              projects to life.
            </Typography>

            <Button
              component={MuiLink}
              color="secondary"
              variant="contained"
              href="mailto:edwingl@uci.edu"
              sx={{ mt: 2, mb: 4 }}>
              contact
            </Button>

            <SocialLinks />
          </Grid>

          <Grid item sx={{ m: { xs: 'auto', md: 0 } }}>
            <Image
              priority
              src="/images/welcome.png"
              alt="Memoji of myself smiling"
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
            I&apos;m a dedicated software developer
          </Typography>
          <Container maxWidth="md">
            <Typography>
              I graduated from the University of California, Irvine as a
              Software Engineer. I am a bilingual and committed developer who
              has experience designing, implementing, debugging and testing
              several projects in different languages, technologies and
              frameworks.
            </Typography>
          </Container>
        </Box>

        <Box sx={{ pt: 5 }} textAlign="center">
          <Typography variant="h4" color="primary" sx={{ mb: 4 }}>
            My Skills
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
          Projects
        </Typography>

        <ProjectSection projects={Projects.slice(0, 6)} {...{ placeholders }} />

        <Link href="/projects" passHref>
          <Button color="secondary" variant="contained" sx={{ mt: 4 }}>
            View More
          </Button>
        </Link>
      </Container>
    </>
  );
}

Home.propTypes = {
  placeholders: PropTypes.objectOf(PropTypes.string).isRequired,
  bannerBlur: PropTypes.string.isRequired,
};
