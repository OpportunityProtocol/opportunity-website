import React, { useEffect, useState } from 'react';
import { ThemeProvider, Box, Typography, Button, Container, Grid, Stack } from '@mui/material';
import { themeOptions } from '../material_theme';
import Footer from '../containers/Footer/Footer';
import ModularityAcknowledgement from '../containers/ModularityAcknowledgement/ModularityAcknowledgement';
import Hero from '../containers/Hero/Hero';
import Head from '../containers/Head/Head';
import InformationalOne from '../containers/InformationalOne/InformationalOne';
import Vision from '../containers/Vision/Vision'
import ConnectedHumans from '../containers/ConnectedHumans/ConnectedHumans';

export default function Home() {
  return (
    <ThemeProvider theme={themeOptions}>
      <div>
        <Head />
        <Hero />
        <Vision />
        <InformationalOne />
        <ModularityAcknowledgement />
        <Footer />
      </div>
    </ThemeProvider>
  );
}