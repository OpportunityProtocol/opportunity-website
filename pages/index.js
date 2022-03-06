import React from 'react';
import styles from '../styles/Home.module.css';
import {
  Box,
  Card,
  Typography,
  Divider,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemText,
  ThemeProvider,
  alpha
} from '@mui/material';
import { themeOptions } from '../material_theme';
import Footer from '../components/Footer/Footer';
import ModularityAcknowledgement from '../components/ModularityAcknowledgement/ModularityAcknowledgement';
import Hero from '../components/Hero/Hero';
import Head from '../components/Head/Head';
import Learn from '../components/Learn/Learn';
import InformationalOne from '../components/InformationalOne/InformationalOne';


const OUR_FEATURES = [
  'Fees: 2%',
  'Maintain identity and trust across all markets',
  'Unlimited access regardless of geographical location',
  'No deplatformation risk',
  'Decentralized and unbiased dispute resolution'
]

const OTHER_PLATFORMS_FEATURES = [
  'Fees: Up to 20%',
  'Lose reputation switching platforms',
  'Unavailable in some countries/regions',
  'Risk of being deplatformed',
  'Centralized and biased dispute resolution'
]
export default function Home() {
  return (
    <ThemeProvider theme={themeOptions}>
      <div className={styles.container}>
        <Head />
          <Hero />
          <InformationalOne />
          <ModularityAcknowledgement />
          <Learn />
          <Box component={Grid} direction='row' alignItems='center' justifyContent='center' spacing={2} container sx={{ padding: '5% 12%'}}>
              <Grid item xs={4}>
                <Card elevation={15} sx={{ boxShadow: "rgb(147, 227, 178)", paddingTop: 2, height: 'auto' }}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Box sx={{height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <img src='logo.svg' style={{alignSelf: 'center', width: 80, height: 80}} />
                </Box>
                <List>
                      {
                        OUR_FEATURES.map((feature, idx, arr) => {
                          return (
                          <ListItem key={feature} divider={idx === arr.length - 1 ? false : true} sx={{height: 100}}>
                            <ListItemText primary={feature} primaryTypographyProps={{
                              textAlign: 'center',
                              color: idx === 2 ?  'green' : '#212121'
                            }} />
                            </ListItem>
                          )
                        })
                      }
                  </List>
          </CardContent>
                </Card>
              </Grid>

              <Grid item xs={4}>
                <Card elevation={5} sx={{ boxShadow: '0px 2px 4px -1px #eee, 0px 4px 5px 0px #eee, 0px 1px 10px 0px #eee', paddingTop: 2, height: 'auto' }}>
                <CardContent sx={{  height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Box sx={{height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <Typography fontSize={16} fontWeight='bold' variant="h5" color="rgba(33, 33, 33, .85)" sx={{ textTransform: 'uppercase' }}>
                      OTHER PLATFORMS
          </Typography>
                  </Box>
                  <List>
                      {
                        OTHER_PLATFORMS_FEATURES.map((feature, idx, arr) => {
                          return (
                            <ListItem key={feature} divider={idx === arr.length - 1 ? false : true} sx={{height: 100}}>
                            <ListItemText primary={feature} primaryTypographyProps={{
                              textAlign: 'center',
                            }} />
                            </ListItem>
                          )
                        })
                      }
                  </List>
          </CardContent>
                </Card>
              </Grid>
          </Box>
          <Footer />
      </div>
    </ThemeProvider>
  );
}
