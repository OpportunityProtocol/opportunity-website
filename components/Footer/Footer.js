import React from 'react';
import useStyles from './FooterStyles';

import { Box, Grid, Divider, Typography, Stack } from '@mui/material';

import { FaDiscord, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  const classes = useStyles();

  return (
    <Box className={classes.footer}>
      <Grid container direction="row" alignItems="flex-start" justifyContent="space-between">
        <Grid item>
          <Grid spacing={8} container item direction="row" alignItems="flex-start">
          <Grid item>
              <Typography variant='h6' color='rgba(33, 33, 33, .85)'>Opportunity</Typography>
              <Typography fontWeight="light" color='#212121'>Permissionless freelancing markets</Typography>
            </Grid>
            
            <Grid item>
              <Typography color='rgba(33, 33, 33, .85)'>Explore</Typography>
              <Typography fontWeight="light" color='#212121'>Blog</Typography>
              <Typography fontWeight="light" color='#212121'>Whitepaper</Typography>
              <Typography fontWeight="light" color='#212121'>Frequently Asked Questions</Typography>
            </Grid>

            <Grid item>
              <Typography color='rgba(33, 33, 33, .85)'>Community</Typography>
              <Typography fontWeight="light" color='#212121'>Contact</Typography>
              <Typography fontWeight="light" color='#212121'>Discord</Typography>
              <Typography fontWeight="light" color='#212121'>Github</Typography>
            </Grid>

            <Grid item>
              <Typography color='rgba(33, 33, 33, .85)'>Contribute</Typography>
              <Typography fontWeight="light" color='#212121'>Opportunity UI</Typography>
              <Typography fontWeight="light" color='#212121'>Opportunity Core</Typography>
              <Typography fontWeight="light" color='#212121'>Opportunity Service</Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Stack direction="row" gap={3}>
            <FaTwitter size={30} color="rgb(29, 161, 242)" />
            <FaDiscord size={30} color="rgb(88, 101, 242)" />
          </Stack>
        </Grid>
      </Grid>

      <Divider sx={{margin: '20px 0px'}} />

      <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Typography fontWeight='light'>
          Building with love for the world.  All code is open source at www.github.com/polarisorganization
        </Typography>
      </Box>
    </Box>
  );
}
