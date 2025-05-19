import React from 'react';
import PropTypes from 'prop-types';

import Navigation from './Navigation';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navigation />
        
        <div className="flex-grow flex flex-col py-6">
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};