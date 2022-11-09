import {
  Container,
  Grid,
  Typography,
  Button,
  Link as MuiLink,
  Box,
} from '@mui/material';
import Image from 'next/image';
import { getPlaiceholder } from 'plaiceholder';
import SEOHead from '../components/SEOHead';

export async function getStaticProps() {
  const { base64: bannerBlur } = await getPlaiceholder('/images/coding.svg');
  const { base64: secondaryBlur } = await getPlaiceholder('/images/coding.svg');
  return { props: { bannerBlur, secondaryBlur } };
}

export default function about({ bannerBlur, secondaryBlur }) {
  const title = 'Edwin Lopez | About';
  const description =
    'Edwin Lopez graduated from the University of California, Irvine as a software engineer and enjoys working on front-end/back-end web projects.';
  const keywords =
    'software engineer, university of california irvine, front end, back end';

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
              About
            </Typography>
            <Typography paragraph>
              I am a first generation college student that graduated from the
              University of California, Irvine as a Software Engineer. I enjoy
              working on various projects, from game development to web
              development. At the moment, I am interested in working on
              front-end/back-end web projects.
            </Typography>

            <Button
              component={MuiLink}
              color="secondary"
              variant="contained"
              href="mailto:edwingl@uci.edu"
              sx={{ mt: 2 }}>
              contact
            </Button>
          </Grid>

          <Grid item sx={{ m: { xs: 'auto', md: 0 } }}>
            <Image
              priority
              src="/images/wave.png"
              alt="Memoji of myself smiling and waving"
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
          <Grid container direction={{ xs: 'column', md: 'row' }} spacing={3}>
            <Grid item xs={12} sm={5}>
              <Box
                sx={{
                  position: 'relative',
                  height: { xs: 270, sm: 320 },
                }}>
                <Image
                  src="/images/coding.svg"
                  alt="Hands typing on a keyboard with a plant, coffee, mouse, and monitor on the workspace"
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                  blurDataURL={secondaryBlur}
                />
              </Box>
            </Grid>

            <Grid item xs={12} sm={7}>
              <Typography variant="h4" paragraph color="primary">
                My Passion
              </Typography>
              <Typography paragraph>
                I uncovered my passion for coding in High School when I took a
                semester long computer science class. Although it was about
                moving code blocks to program, it piqued my curiosity when I
                finished a functional replica of the Mario game. I enjoy the
                process of building programs, from beginning to end because for
                me it&apos;s all about the experience and the new skills you
                learn along the way.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
