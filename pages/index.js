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
             <Grid spacing={10} container direction="row" justifyContent="space-evenly" alignItems='flex-start'>
               <Grid style={{flex: 1.5}} item className={classes.fullGrid}>
                 <Card elevation={4} 
                 style={{ 
                   width: '100%', 
                   height: 500, 
                   boxShadow: '0px 2px 4px -1px #eee, 0px 4px 5px 0px #eee, 0px 1px 10px 0px #eee'
                   }}>

                 </Card>
                 <Typography py={3} color="#fff" fontWeight="regular" width='80%'>
                   The simplest way to work without worrying about KYC, a bank account or unnecessary
                   documentation.
                 </Typography>
               </Grid>

               <Grid style={{flex: 1}} item className={classes.fullGrid}>
                 <Card 
                 variant='outlined'
                 elevation={0}
                 style={{
                   padding: 30, 
                   width: '100%', 
                   height: 210,
                  // boxShadow: '0px 2px 4px -1px #eee, 0px 4px 5px 0px #eee, 0px 1px 10px 0px #eee' 
                   }}>
                   <Typography fontWeight='medium' color='rgb(33, 33, 33, .85)'>
                     OPPORTUNITY
                   </Typography>

                   <Grid height={'100%'} container item direction='column' flex={1} justifyContent='space-evenly'>
                     <Grid item>
                     <Typography fontWeight='light' fontSize={15}>
                     Earn TIP when you complete jobs
                     </Typography>
                     </Grid>

                     <Grid item>
                     <Typography fontWeight='light' fontSize={15}>
                     Work without KYC or other certifications
                     </Typography>
                     </Grid>

                     <Grid item>
                     <Typography fontWeight='light' fontSize={15}>
                     Lower fees than most freelancing platforms
                     </Typography>
                     </Grid>

                     <Grid item>
                     <Typography fontWeight='light' fontSize={15}>
                     Transfers and payouts in a global and decentralized currency
                     </Typography>
                     </Grid>
                   </Grid>

                 </Card>
                 
                 <Button
                   sx={{ padding: 2, margin: '50px 0px' }}
                   variant="outlined"
                  className={classes.learnMoreButton}
                >
                  Learn more
                </Button>
                <Grid
                  container
                  item
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Grid item>
                    <Button variant="text" className={classes.textButton}>
                      Markets
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="text" className={classes.textButton}>
                      Contracts
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="text" className={classes.textButton}>
                      Messenger
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="text" className={classes.textButton}>
                      Profile
                     </Button>
                   </Grid>
                 </Grid>





               </Grid>
             </Grid>
           </section>

<Box my={2} sx={{width: '100vw' }}>
<Marquee>
            {MARKETS.map(market => {
              return <MarketDisplay marketTitle={market.market} related={market.related} />
            })}
          </Marquee>
</Box>


    <Learn />

    <section className={classes.section} style={{ backgroundColor: '#fbfbfd' }}>
    <Grid my={1} width='100%' container direction='row' justifyContent='center' alignItems='center'>
        <Grid item mx={5}>
          <Button disabled className={classes.button}  variant='outlined'>
            Read the Developer Docs
          </Button>
        </Grid>

        <Grid item mx={5}>
        <Link href='https://humble-penalty-bba.notion.site/Opportunity-de5af9fb928f47288055c6c4ac2064ec'>
        <Button className={classes.button} variant='outlined'>
            Read the Whitepaper
          </Button>
              </Link>
         
        </Grid>
      </Grid>
    </section>

        {/*}  <InformationalOne /> */}

          <ModularityAcknowledgement />

          <Footer />
        </main>
      </div>
    </ThemeProvider>
  );
}
