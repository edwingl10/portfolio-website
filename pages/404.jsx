import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import { Button, Container, Typography, Box } from '@mui/material';

export default function NotFound() {
  return (
    <Box textAlign="center">
      <Container sx={{ my: 5, py: 2 }}>
        <Image
          priority
          src="/images/404.png"
          alt="A laptop showing a 404 message"
          width={700}
          height={480}
        />
        <Typography variant="h3" paragraph>
          Page Not Found
        </Typography>
        <Typography variant="h5" paragraph>
          The page you are looking for is not available.
        </Typography>
        <Button variant="contained" color="secondary">
          go home
        </Button>
      </Container>
    </Box>
  );
}

export async function getStaticProps({ locale }) {
  return { props: { ...(await serverSideTranslations(locale, 'common')) } };
}
