import PropTypes from 'prop-types';
import { useMediaQuery } from '@mui/material';
import Navbar from './Navbar';
import MobileNavbar from './MobileNavbar';

export default function Layout({ children }) {
  const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('sm'));

  return (
    <>
      {isDesktop && <Navbar />}
      {children}
      {!isDesktop && <MobileNavbar />}
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
