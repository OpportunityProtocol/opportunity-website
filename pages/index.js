import React from 'react';

import styles from '../styles/Home.module.css';
import {
  Button,
  Card,
  Grid,
  ThemeProvider,
  Typography,
  Box
} from '@mui/material';
import Link from 'next/link'
import { themeOptions } from '../material_theme';
import useStyles from '../styles/styles';
import Footer from '../components/Footer/Footer';

import ModularityAcknowledgement from '../components/ModularityAcknowledgement/ModularityAcknowledgement';
import Hero from '../components/Hero/Hero';
import Head from '../components/Head/Head';
import Learn from '../components/Learn/Learn';
import InformationalOne from '../components/InformationalOne/InformationalOne';

export default function Home() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={themeOptions}>
      <div className={styles.container}>
        <Head />

        <main className={styles.main}>
          <Hero />
          <InformationalOne />

          <Box
            sx={{ display: { xs: 'none', md: 'block' }}}
            style={{
              background: 'rgb(255,255,255)',
              background:
                'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(250,250,250,1) 50%, rgba(251,251,253,1) 100%)',
            }}
            className={classes.section}
          >
            
            <Grid container alignItems="center" justifyContent="center">
              <Card
                elevation={1}
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '600px',
                  margin: '15px 0px',
                }}
              >
                <div
                  className={classes.shadowyDiv}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    width: '100%',
                    height: '600px',
                    padding: 100,
                  }}
                >
                  <Typography color="#fff" variant="h6" fontSize={40}>
                    The ability to work is now in the hands of everyone.
                  </Typography>
              
                </div>
                <img src="/crowd.jpeg" style={{ width: '100%', height: '100%' }} />
              </Card>
            </Grid>
          </Box>

          <Learn />
    
          <ModularityAcknowledgement />

          <Footer />
        </main>
      </div>
    </ThemeProvider>
  );
}
