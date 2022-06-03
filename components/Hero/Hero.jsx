import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
} from '@mui/material';
import useStyles from './HeroStyles';
import MarketDisplay from '../MarketDisplay/MarketDisplay';
import Marquee from 'react-fast-marquee';
import AppBar from '../AppBar/AppBar';
import { MARKETS }from './constant'

const Hero = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar />
      <Container maxWidth="xl" className={classes.container}>
        <Box className={classes.left}>
          <Box width={900}>
            <Typography fontSize={50}>
              An integrated freelancing network to make working easier, fairer and quicker.
            </Typography>
            <Typography fontSize={16} fontWeight={200}>
              We imagine a world where internet users only have to click at max twice to create or
              accept work and have the ability to carry and show those services across any network
              based application.  Essentially GigEarth has the vision of becoming the cooperation
              layer of the internet.{' '}
              <Typography component="span" color={(theme) => theme.palette.secondary.main}>
                Welcome to the cooperation layer of the internet.
              </Typography>
            </Typography>
            <Button sx={{ mt: 2 }} variant="contained" color="secondary">
              Preview the beta
            </Button>
          </Box>
          <img
            src="/logo.png"
            style={{ width: 300, height: 300, animation: `spin 18s linear infinite` }}
          />
        </Box>
        <Box className={classes.marquee}>
          <Marquee gradient={false}>
            {MARKETS.map((market) => {
              return <MarketDisplay marketTitle={market.market} related={market.related} />;
            })}
          </Marquee>
        </Box>
      </Container>
    </div>
  );
};

export default Hero;
