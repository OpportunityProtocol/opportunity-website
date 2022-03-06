import React from 'react';
import useStyles from './FooterStyles';

import { Box, Grid, Divider, Typography } from '@mui/material';
import Link from 'next/link';


export default function Footer() {
  const classes = useStyles();

  return (
    <Box className={classes.footer}>
      <Grid container direction='row' alignItems="flex-start" justifyContent="space-between">
          <Grid item style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flex: 1}}>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}className={classes.column} >
              <Typography variant='h6'>GigEarth</Typography>
              <Typography fontWeight="light"  >Permissionless labor markets</Typography>
              </Box>
              <div className={classes.column}>
              <Typography>Explore</Typography>
              <Link href="https://humble-penalty-bba.notion.site/Opportunity-de5af9fb928f47288055c6c4ac2064ec">
              <Typography fontWeight="light">Whitepaper</Typography>
              </Link>
              <Link href='/faq'>
              <Typography fontWeight="light" >Frequently Asked Questions</Typography>
              </Link>
              </div>
              <div className={classes.column}>
              <Typography>Contribute</Typography>
              <Link href='https://github.com/OpportunityProtocol/opportunity-client'>
              <Typography fontWeight="light" >Client</Typography>
              </Link>
              <Link href='https://github.com/OpportunityProtocol/opportunity-core'>
              <Typography fontWeight="light" >Core</Typography>
              </Link>
              <Link href='https://github.com/OpportunityProtocol/opportunity-website'>
              <Typography fontWeight="light" >Website</Typography>
              </Link>
              </div>
              <div className={classes.column}>
              <Typography>Community</Typography>
              <Link href="https://discord.gg/pBRVWTQPvS">
              <Typography fontWeight="light" >Discord</Typography>
              </Link>
              <Link href="https://github.com/OpportunityProtocol/opportunity-core">
              <Typography fontWeight="light" >Github</Typography>
              </Link>
              </div>
            </Grid>
          </Grid>
      <Divider sx={{margin: '60px 0px'}} />
      <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Typography fontWeight='light'>
          Building with love for the world.  All code is open source at www.github.com/opportunityorganization
        </Typography>
      </Box>
    </Box>
  );
}
