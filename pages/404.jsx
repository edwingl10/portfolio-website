import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import { Button, Container, Typography, Box } from '@mui/material';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

export default function NotFound() {
  const { t } = useTranslation();

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
          {t('404.pageNotFound')}
        </Typography>
        <Typography variant="h5" paragraph>
          {t('404.notAvailable')}
        </Typography>

        <Link href="/" passHref>
          <Button variant="contained" color="secondary">
            {t('btn.backToHome')}
          </Button>
        </Link>
      </Container>
    </Box>
  );
}

export async function getStaticProps({ locale }) {
  return { props: { ...(await serverSideTranslations(locale, 'common')) } };
}
