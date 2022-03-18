import React from 'react';
import styles from '../styles/Home.module.css';
import {
  ThemeProvider,
} from '@mui/material';
import { themeOptions } from '../material_theme';
import Footer from '../components/Footer/Footer';
import ModularityAcknowledgement from '../components/ModularityAcknowledgement/ModularityAcknowledgement';
import Hero from '../components/Hero/Hero';
import Head from '../components/Head/Head';
import Learn from '../components/Learn/Learn';
import InformationalOne from '../components/InformationalOne/InformationalOne';
import AppBar from '../components/AppBar/AppBar';
import PlatformComparison from '../components/PlatformComparison/PlatformComparison';

export default function Home() {
  return (
    <ThemeProvider theme={themeOptions}>
      <div className={styles.container}>
        <Head />
        <AppBar />
        <Hero />
        <Learn />
        <ModularityAcknowledgement />
        <PlatformComparison />
        <InformationalOne />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
