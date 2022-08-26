import Head from 'next/head';
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
import SocialLinks from '../components/SocialLinks';
import ProjectSection from '../components/ProjectSection';
import ReactIcon from '../public/images/icons/react.svg';
import JsIcon from '../public/images/icons/js.svg';
import HtmlIcon from '../public/images/icons/html.svg';
import CssIcon from '../public/images/icons/css.svg';
import JavaIcon from '../public/images/icons/java.svg';
import PythonIcon from '../public/images/icons/python.svg';
import MuiIcon from '../public/images/icons/mui.svg';
import FigmaIcon from '../public/images/icons/figma.svg';
import projectData from '../src/projectData';

const skillsIcons = {
  React: <ReactIcon height="100%" width="100%" />,
  Javascript: <JsIcon height="100%" width="100%" />,
  HTML: <HtmlIcon height="100%" width="100%" />,
  CSS: <CssIcon height="100%" width="100%" />,
  Java: <JavaIcon height="100%" width="100%" />,
  Python: <PythonIcon height="100%" width="100%" />,
  MUI: <MuiIcon height="100%" width="100%" />,
  Figma: <FigmaIcon height="100%" width="100%" />,
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Container>
        <Grid
          container
          direction={{ xs: 'column-reverse', md: 'row' }}
          justifyContent="space-between"
          spacing={3}
          sx={{ my: 5 }}>
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
              sx={{ mt: 2 }}>
              contact
            </Button>

            <SocialLinks />
          </Grid>

          <Grid item sx={{ m: { xs: 'auto', md: 0 } }}>
            <Image
              priority
              src="/images/welcome.png"
              alt="Memoji of myself"
              height={250}
              width={220}
            />
          </Grid>
        </Grid>

        <Box sx={{ py: 5 }} textAlign="center">
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

        <Box sx={{ py: 5 }} textAlign="center">
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
              {Object.entries(skillsIcons).map(([title, icon]) => (
                <Box
                  key={title}
                  sx={{
                    width: 85,
                    height: 80,
                  }}>
                  <SvgIcon fontSize="large" color="primary">
                    {icon}
                  </SvgIcon>
                  <Typography>{title}</Typography>
                </Box>
              ))}
            </Stack>
          </Container>
        </Box>

        <Container sx={{ py: 5, textAlign: 'center' }}>
          <Typography variant="h4" color="primary" sx={{ mb: 4 }}>
            Projects
          </Typography>

          <ProjectSection projects={projectData.slice(0, 6)} />

          <Button
            // component={Link}
            to="/projects"
            color="secondary"
            variant="contained">
            View More
          </Button>
        </Container>
      </Container>
    </>
  );
}
