import PropTypes from 'prop-types';
import { useMediaQuery, Box } from '@mui/material';
import Navbar from './Navbar';
import MobileNavbar from './MobileNavbar';
import Footer from './Footer';

export default function Layout({ children }) {
  const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('md'));

  return (
    <>
      {isDesktop && <Navbar />}
      <Box
        sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {children}
      </Box>
      <Footer />
      {!isDesktop && <MobileNavbar />}
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
