import { Box, Container, Grid, Typography } from '@mui/material';
import SocialLinks from './SocialLinks';

export default function Footer() {
  return (
    <Box sx={{ bgcolor: 'primary.dark' }}>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Grid container alignItems="center" spacing={2}>
          <Grid
            container
            item
            xs={12}
            md={3}
            justifyContent={{ xs: 'center', md: 'flex-start' }}>
            <SocialLinks color="background.paper" />
          </Grid>

          <Grid item xs={12} md={9}>
            <Typography
              color="grey.500"
              variant="subtitle2"
              textAlign={{ xs: 'center', md: 'right' }}>
              &copy; {new Date().getFullYear()} All rights reserved. - Designed
              & coded by Edwin Lopez.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}