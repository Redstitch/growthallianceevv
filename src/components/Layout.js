import React from 'react';
import Header from './Header';
import Footer from './Footer';
import GlobalStyle from '../styles/Global';

const Layout = ({ children }) => (
  <main>
    <GlobalStyle />
    <Header />
    {children}
    <Footer />
  </main>
);

export default Layout;
