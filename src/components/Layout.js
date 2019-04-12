import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Dochead from './Dochead';

const Layout = ({ children }) => (
  <div>
    <Dochead title="Boilerplate" siteName="Redstitch" pageImage={null} />
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
