import React from 'react';
import useStyles from './FooterStyles';

import { Box, Grid, Divider, Typography, Stack } from '@mui/material';


export default function Footer() {
  const classes = useStyles();

  return (
    <Box className={classes.footer}>
      <Grid container direction='row' alignItems="flex-start" justifyContent="space-between">
          <Grid item style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flex: 1}}>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}className={classes.column} >
              <Typography variant='h6' color='rgba(33, 33, 33, .85)'>Opportunity</Typography>
              <Typography fontWeight="light" color='#212121'>Permissionless freelancing markets</Typography>
              </Box>

              <div className={classes.column}>
              <Typography color='rgba(33, 33, 33, .85)'>Explore</Typography>
              <Typography fontWeight="light" color='#212121'>Blog</Typography>
              <Typography fontWeight="light" color='#212121'>Whitepaper</Typography>
              <Typography fontWeight="light" color='#212121'>Frequently Asked Questions</Typography>
              </div>

              <div className={classes.column}>
              <Typography color='rgba(33, 33, 33, .85)'>Contribute</Typography>
              <Typography fontWeight="light" color='#212121'>Opportunity UI</Typography>
              <Typography fontWeight="light" color='#212121'>Opportunity Core</Typography>
              <Typography fontWeight="light" color='#212121'>Opportunity Service</Typography>
              </div>

              <div className={classes.column}>
              <Typography color='rgba(33, 33, 33, .85)'>Community</Typography>
              <Typography fontWeight="light" color='#212121'>Contact</Typography>
              <Typography fontWeight="light" color='#212121'>Discord</Typography>
              <Typography fontWeight="light" color='#212121'>Github</Typography>
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
