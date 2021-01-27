import React from 'react';
import PropTypes from 'prop-types';
import Nav from './nav';
import Footer from './footer';

const PageLayout = ({ children }) => (
  <>
    <Nav />
    <main>
      { children }
    </main>
    <Footer />
  </>
);

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageLayout;
