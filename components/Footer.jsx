import { Box, Container, Grid, Typography, IconButton } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useTranslation } from 'next-i18next';
import SocialLinks from './SocialLinks';

export default function Footer() {
  const { t } = useTranslation('common');

  return (
    <Box bgcolor="footer.main">
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Grid container item justifyContent="flex-end" sx={{ mb: 2 }}>
          <IconButton
            size="small"
            sx={{
              bgcolor: 'grey.50',
              color: 'common.black',
              '&:hover': { bgcolor: 'grey.500' },
            }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <ArrowUpwardIcon fontSize="small" />
          </IconButton>
        </Grid>

        <Grid container alignItems="center" spacing={2}>
          <Grid
            container
            item
            xs={12}
            md={3}
            justifyContent={{ xs: 'center', md: 'flex-start' }}>
            <SocialLinks color="grey.50" />
          </Grid>

          <Grid item xs={12} md={9}>
            <Typography
              color="grey.300"
              variant="subtitle2"
              textAlign={{ xs: 'center', md: 'right' }}>
              &copy; {new Date().getFullYear()} {t('rightsReserved')}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
