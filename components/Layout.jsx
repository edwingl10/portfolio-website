import PropTypes from 'prop-types';
// import Navbar from './Navbar';
import MobileNavbar from './MobileNavbar';

export default function Layout({ children }) {
  return (
    <>
      {/* <Navbar /> */}
      {children}
      <MobileNavbar />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
