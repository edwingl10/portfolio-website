import PropTypes from 'prop-types';
import { useMediaQuery } from '@mui/material';
import Navbar from './Navbar';
import MobileNavbar from './MobileNavbar';
import Footer from './Footer';

export default function Layout({ children }) {
  const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('md'));

  return (
    <>
      {isDesktop && <Navbar />}
      {children}
      <Footer />
      {!isDesktop && <MobileNavbar />}
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
