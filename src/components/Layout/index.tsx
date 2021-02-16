import React from 'react';
import { Grid } from './styles'

import Header from './components/Header'
import Router from './components/Router'
import Footer from './components/Footer'

const Layout: React.FC = () => {
  return (
    <Grid>
      <Header/>
      <Router/>
      <Footer/>
    </Grid>
  );

};

export default Layout;
