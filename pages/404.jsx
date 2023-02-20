import PropTypes from 'prop-types';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/legacy/image';
import { Button, Container, Typography, Box } from '@mui/material';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { getPlaiceholder } from 'plaiceholder';

export default function NotFound({ blurData }) {
  const { t } = useTranslation();

  return (
    <Box textAlign="center">
      <Container sx={{ my: 5, py: 2 }}>
        <Image
          priority
          src="/images/404.png"
          alt={t('404.imageAlt')}
          width={700}
          height={480}
          placeholder="blur"
          blurDataURL={blurData}
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

NotFound.propTypes = {
  blurData: PropTypes.string.isRequired,
};

export async function getStaticProps({ locale }) {
  const { base64: blurData } = await getPlaiceholder('/images/404.png');

  return {
    props: { blurData, ...(await serverSideTranslations(locale, 'common')) },
  };
}
