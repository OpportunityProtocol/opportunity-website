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
              <Typography variant='h6'>GigEarth</Typography>
              <Typography fontWeight="light"  >Permissionless labor markets</Typography>
              </Box>
              <div className={classes.column}>
              <Typography>Explore</Typography>
              <Typography fontWeight="light">Blog</Typography>
              <Typography fontWeight="light">Whitepaper</Typography>
              <Typography fontWeight="light"  >Frequently Asked Questions</Typography>
              </div>
              <div className={classes.column}>
              <Typography>Contribute</Typography>
              <Typography fontWeight="light"  >UI</Typography>
              <Typography fontWeight="light"  >Core</Typography>
              </div>
              <div className={classes.column}>
              <Typography>Community</Typography>
              <Typography fontWeight="light"  >Contact</Typography>
              <Typography fontWeight="light"  >Discord</Typography>
              <Typography fontWeight="light"  >Github</Typography>
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
