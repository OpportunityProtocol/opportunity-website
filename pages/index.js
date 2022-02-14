import React, { useState, useRef } from 'react';

import styles from '../styles/Home.module.css';
import {
  AppBar,
  Avatar,
  Button,
  Paper,
  Box,
  Card,
  Grid,
  Stack,
  CardActionArea,
  Fade,
  CardMedia,
  IconButton,
  Slide,
  CardActions,
  CardContent,
  ThemeProvider,
  Typography,
  Divider,
} from '@mui/material';
import { themeOptions } from '../material_theme';
import useStyles from '../styles/styles';
import { ArrowRight, KeyboardArrowRight, CallMadeSharp } from '@mui/icons-material';

import Footer from '../components/Footer/Footer';
import { useEffect } from 'react';
import useOnScreen from '../hooks/useOnScreen';
import useInterval from 'react-useinterval';

import BlogPost from '../components/BlogPost/BlogPost';
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

          <section
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
                  <Button variant="text" sx={{ color: '#fff' }} endIcon={<KeyboardArrowRight />}>
                    Our mission
                  </Button>
                </div>
                <img src="/crowd.jpeg" style={{ width: '100%', height: '100%' }} />
              </Card>
            </Grid>
          </section>

          <Learn />
          <ModularityAcknowledgement />
          <BlogPost />

          {/* Section 7*/}
          <section className={classes.section}>
            <Grid container alignItems="center" justifyContent="center">
              <Grid item xs={12}>
                <Card
                  elevation={1}
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '670px',
                    margin: '15px 0px',
                  }}
                >
                  <div
                    className={classes.shadowyDiv}
                    style={{
                      padding: '5% 7%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      justifyContent: 'center',
                      width: '100%',
                      height: '670px',
                    }}
                  >
                    <Typography py={3} color="#fff" variant="h6" fontSize={40}>
                      The future of work relies on highly skilled individuals, not corporations.
                    </Typography>
                    <Button
                      size="large"
                      variant="outlined"
                      sx={{ color: '#fff', borderColor: '#eee' }}
                    >
                      Learn more
                    </Button>
                  </div>
                  <img src="/freelance.jpg" className={classes.fullElement} />
                </Card>
              </Grid>
            </Grid>
          </section>

          <Footer />
        </main>
      </div>
    </ThemeProvider>
  );
}
