import React from 'react';

import styles from '../styles/Home.module.css';
import {
  Button,
  Card,
  CardContent,

  Grid,
  ThemeProvider,
  Typography,
  Box
} from '@mui/material';
import {
  ArrowRight
} from '@mui/icons-material'
import Link from 'next/link'
import { themeOptions } from '../material_theme';
import useStyles from '../styles/styles';
import Footer from '../components/Footer/Footer';
import { alpha } from '@mui/material/styles';
import ModularityAcknowledgement from '../components/ModularityAcknowledgement/ModularityAcknowledgement';
import Hero from '../components/Hero/Hero';
import Head from '../components/Head/Head';
import Learn from '../components/Learn/Learn';
import InformationalOne from '../components/InformationalOne/InformationalOne';
import Marquee from 'react-fast-marquee'
import MarketDisplay from '../components/MarketDisplay/MarketDisplay'
const MARKETS = [
  {
    market: 'Development & IT',
    related: ['Computer Support', 'Software Developer', 'Cybersecurity', 'Computer Research Scientist']
  },
  {
    market: 'Sales & Marketing',
    related: ['Social Media Marketer']
  },
  {
    market: 'Writing & Translation',
    related: ['Content Translator', 'Cross Language Translator']
  },
  {
    market: 'Admin & Customer Support',
    related: ['Human Resource Manager', 'Customer Support Caller']
  },
  {
    market: 'Finance & Accounting',
    related: ['Accountant', 'Auditor']
  },
  {
    market: 'Design & Creative',
    related: ['Graphic Designer', 'UI/UX Designer', 'Photographer', 'Film & Video Editor']
  },
  {
    market: 'Engineering & Architecture',
    related: ['Architect', 'AutoCAD Drafter']
  },
  {
    market: 'Deploy your own',
    related: ['Ride Sharing', 'Food Delivery']
  },
]

export default function Home() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={themeOptions}>
      <div className={styles.container}>
        <Head />

        <main className={styles.main}>
          <Hero />

    {/* Section 4 */}
    <section className={classes.section} style={{ backgroundColor: '#fff'}}>
      
             <Grid spacing={10} container direction="row" justifyContent="center" alignItems='center'>
               <Grid item>
                 <Card elevation={4} 
                 style={{ 
                   width: 1050, 
                   height: 620, 
                   boxShadow: '0px 2px 4px -1px #eee, 0px 4px 5px 0px #eee, 0px 1px 10px 0px #eee'
                   }}>
                    <img src='gigearth.png' style={{ width: '100%', height: '100%' }} />
                 </Card>
                 <Typography py={3} color="rgba(33, 33, 33, .85)" fontWeight="bold" fontSize={18} width='80%'>
                 GigEarth is a decentralized application built to provide access to labor markets regardless of geographical location or social class
                 </Typography>
               </Grid>

             
             </Grid>
           </section>

           <Box className={classes.section} sx={{ backgroundColor: (theme) => alpha(theme.palette.secondary.main, 0.3) }}>
           <Grid flexGrow={1} container item sx={{width: '100%' }}>
        <div style={{width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>
        <Typography variant="h4" color="rgba(33, 33, 33, .85)">Powered by</Typography>
        <Typography
            py={3}
            color="rgba(33, 33, 33, 0.85)"
            fontWeight="regular"
            width="90%"
          >
            GigEarth operates using existing and proven web3 protocols.
          </Typography>
            </div>

        <Grid container item spacing={2}  alignItems='center' direction='row' flexGrow={1} my={1} width="100%">
          <Grid item xs={4}>
          <Card className={classes.card} variant='outlined' elevation={0} sx={{         backgroundColor: 'transparent', /*backgroundColor: (theme) => alpha(theme.palette.secondary.main, 0.3),*/ /*boxShadow: '0px 2px 4px -1px #eee, 0px 4px 5px 0px #eee, 0px 1px 10px 0px #eee'*/ }}>
             <CardContent sx={{height: 250,  display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>

              <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <Typography color='rgba(33, 33, 33, .85)' fontSize={13}  sx={{textTransform: 'uppercase'}}>
                  Decentralized Labor Markets
                </Typography>

                <Typography color='rgba(33, 33, 33, .85)' fontWeight='bold' fontSize={14}>
                  Exchange Tech
                </Typography>
              </Box>

            <Box>
            <Typography sx={{ color: 'rgba(33, 33, 33, .85)'}} fontSize={25} fontWeight='bold'>
                GigEarth
              </Typography>
              <Typography width='80%' color='rgba(33, 33, 33, .85)' paragraph pt={1} fontSize={15}>
                Explore permissionless labor markets regardless of geographical location or social class
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <Button color='primary' variant='text' endIcon={<ArrowRight />} sx={{ margin: '0px !important', padding: '0px !important'}}>
              Learn about GigEarth
            </Button>

            <img src="/logo.svg" style={{ width: 30, height: 30 }} />
            </Box>

            </CardContent>
            </Card>
          </Grid>


          <Grid item xs={4}>
          <Card className={classes.card} variant='outlined' elevation={0} sx={{         backgroundColor: 'transparent', /*backgroundColor: (theme) => alpha(theme.palette.secondary.main, 0.3),*/ /*boxShadow: '0px 2px 4px -1px #eee, 0px 4px 5px 0px #eee, 0px 1px 10px 0px #eee'*/ }}>
             <CardContent sx={{height: 250,  display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>

              <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <Typography color='rgba(33, 33, 33, .85)' fontSize={13}  sx={{textTransform: 'uppercase'}}>
                  Decentralized Stablecoin
                </Typography>

                <Typography color='rgba(33, 33, 33, .85)' fontWeight='bold' fontSize={14}>
                  Exchange Tech
                </Typography>
              </Box>

            <Box>
            <Typography sx={{ color: 'rgba(33, 33, 33, .85)'}} fontSize={25} fontWeight='bold'>
                DAI
              </Typography>
              <Typography width='80%' color='rgba(33, 33, 33, .85)' paragraph pt={1} fontSize={15}>
                Earn money in a decentralized and stable cryptocurrency.  Off ramp using any centralized exchange of your choice.
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <Button color='primary' variant='text' endIcon={<ArrowRight />} sx={{ margin: '0px !important', padding: '0px !important'}}>
              Learn about DAI
            </Button>

            <img
                  src="/dai_logo2.png"
                  style={{ width: 35, height: 35 }}
                />
            </Box>

            </CardContent>
            </Card>
          </Grid>

          <Grid item xs={4}>
          <Card className={classes.card} variant='outlined' elevation={0} sx={{         backgroundColor: 'transparent', /*backgroundColor: (theme) => alpha(theme.palette.secondary.main, 0.3),*/ /*boxShadow: '0px 2px 4px -1px #eee, 0px 4px 5px 0px #eee, 0px 1px 10px 0px #eee'*/ }}>
             <CardContent sx={{height: 250,  display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>

              <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <Typography color='rgba(33, 33, 33, .85)' fontSize={13}  sx={{textTransform: 'uppercase'}}>
                  Decentralized Justice
                </Typography>

                <Typography color='rgba(33, 33, 33, .85)' fontWeight='bold' fontSize={14}>
                  Legal Tech
                </Typography>
              </Box>

            <Box>
            <Typography sx={{ color: 'rgba(33, 33, 33, .85)'}} fontSize={25} fontWeight='bold'>
                Kleros
              </Typography>
              <Typography width='80%' color='rgba(33, 33, 33, .85)' paragraph pt={1} fontSize={15}>
                Disputes are solved using the Kleros protocol.  Users escape the bias of centralized services on GigEarth.
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <Button color='primary' variant='text' endIcon={<ArrowRight />} sx={{ margin: '0px !important', padding: '0px !important'}}>
              Learn about Kleros
            </Button>

            <img src="/kleros_logo.svg" style={{ width: 30, height: 30 }} />
            </Box>

            </CardContent>
            </Card>
          </Grid>
        </Grid>
        </Grid>
           </Box>


    <Learn />


          <Footer />
        </main>
      </div>
    </ThemeProvider>
  );
}
