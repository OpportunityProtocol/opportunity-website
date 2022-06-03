import { useState } from 'react';
import {
  Grid,
  Fade,
  Paper,
  Button,
  IconButton,
  Typography,
  AppBar,
  Stack,
  Box,
  Toolbar,
  darken
} from '@mui/material';
import useStyles from './AppBarStyles';
import Link from 'next/link';
import LongMenu from '../LongMenu/LongMenu';

const AppBarBar = () => {
  const classes = useStyles();
  return (
    <AppBar
      square={true}
      elevation={0}
      sx={{ bgcolor: darken('#062e03', 0.82), padding: '0px 40px' }}
      position="sticky"
    >
      <Box
        sx={{
          display: { xs: 'block', md: 'none' },

          justifyContent: 'flex-end',
        }}
      >
        <LongMenu />
      </Box>
      <Toolbar sx={{ display: { xs: 'none', md: 'flex' } }}>
        <Grid
          container
          direction="row"
          spacing={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item>
            <Stack spacing={1} direction="row" alignItems="center">
              <img src="/logo.svg" style={{ width: 30, height: 30 }} />
              <Link href="/">
                <Typography className={classes.link} variant="h6" color="#ffffff">
                  LensTalent
                </Typography>
              </Link>
            </Stack>
          </Grid>
          <Grid item className={classes.flexedGridItem}>
            <Link href="https://humble-penalty-bba.notion.site/Opportunity-de5af9fb928f47288055c6c4ac2064ec">
              <Typography
                className={classes.link}
                fontSize={16}
                mx={2}
                variant="button"
                sx={{ textTransform: 'none' }}
              >
                Whitepaper
              </Typography>
            </Link>
            <Link href="https://github.com/OpportunityProtocol/opportunity-core">
              <Typography
                className={classes.link}
                fontSize={16}
                mx={2}
                variant="button"
                sx={{ textTransform: 'none' }}
              >
                Github
              </Typography>
            </Link>
            <Link href="https://discord.gg/pBRVWTQPvS">
              <Typography
                className={classes.link}
                fontSize={16}
                mx={2}
                variant="button"
                sx={{ textTransform: 'none' }}
              >
                Discord
              </Typography>
            </Link>

            <Link href="/faq">
              <Typography
                className={classes.link}
                fontSize={16}
                mx={2}
                variant="button"
                sx={{ textTransform: 'none' }}
              >
                FAQ
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarBar;
