import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Dochead from './Dochead';

const Layout = ({ children }) => (
  <div>
    <Dochead siteName="Growth Alliance" pageImage={null} />
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
