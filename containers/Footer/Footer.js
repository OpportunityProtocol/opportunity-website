import React from 'react';
import useStyles from './FooterStyles';

import { Box, Grid, Divider, Typography, alpha, darken } from '@mui/material';
import Link from 'next/link';


export default function Footer() {
  const classes = useStyles();

  return (
    <Box className={classes.footer}>
      <Grid pb={12} container direction='row' alignItems="flex-start" justifyContent="space-between">
          <Grid item className={classes.contentContainer}>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Box sx={{display: 'flex', alignItems: 'center' }}>
                <img src='logo.svg' style={{width: 30, height: 30}} />
              <Typography variant='h6' px={1}>LensTalent</Typography>
              </Box>
              <Typography fontWeight="light" color='rgba(255, 255, 255, 0.6)'>Permissionless labor markets</Typography>
              </Box>
              <div className={classes.column}>
              <Typography fontWeight='bold'>Explore</Typography>
              <Link  href='/faq'>
              <Typography className={classes.link}  fontWeight="light" color='rgba(255, 255, 255, 0.6)'>Frequently Asked Questions</Typography>
              </Link>
              </div>
              <div className={classes.column}>
              <Typography fontWeight='bold'>Contribute</Typography>
              <Link href=''>
              <Typography className={classes.link} fontWeight="light" color='rgba(255, 255, 255, 0.6)'>Client</Typography>
              </Link>
              <Link href=''>
              <Typography className={classes.link} fontWeight="light" color='rgba(255, 255, 255, 0.6)'>Core</Typography>
              </Link>
              <Link href=''>
              <Typography className={classes.link} fontWeight="light" color='rgba(255, 255, 255, 0.6)'>Website</Typography>
              </Link>
              </div>
              <div className={classes.column}>
              <Typography fontWeight='bold'>Community</Typography>
              <Link   href="https://discord.gg/pBRVWTQPvS">
              <Typography className={classes.link} fontWeight="light" color='rgba(255, 255, 255, 0.6)'>Discord</Typography>
              </Link>
              <Link href="https://github.com/OpportunityProtocol/opportunity-core">
              <Typography className={classes.link} fontWeight="light" color='rgba(255, 255, 255, 0.6)'>Github</Typography>
              </Link>
              </div>
            </Grid>
          </Grid>
      <Divider sx={{borderBottomColor: 'rgba(255, 255, 255, 0.4)' }} />
      <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>
        <Typography fontWeight='400' py={5} color='rgba(255, 255, 255, 0.8)'>
          &copy; 2022 LensTalent
        </Typography>
      </Box>
    </Box>
  );
}
