import { useState } from 'react'
import {
  Grid,
  Fade,
  Link,
  Paper,
  Box,
  IconButton,
  Typography,
  Stack,
  Button,
  Card,
  CardContent,
} from '@mui/material'
import useStyles from './HeroStyles'
import MarketDisplay from '../MarketDisplay/MarketDisplay'
import Marquee from 'react-fast-marquee'
import useInterval from 'react-useinterval'
import AppBar from '../AppBar/AppBar'
import { ArrowRight } from '@mui/icons-material'

const Hero = () => {
  const classes = useStyles()

  return (
    <section className={classes.introductionSection}>
      <AppBar />
      <Box
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <img
          src="/girl.jpeg"
          style={{
            width: '90%',
            height: '90%',
            borderRadius: 20,
          }}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0,0,0,.5)',
            borderRadius: 20,
            position: 'absolute',
            width: '90%',
            height: '90%',
          }}
        >
          <Box
            sx={{
              width: {
                xs: '90%',
                md: '60%'
              },
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography
              py={2}
              color="#fff"
              fontSize={40}
              fontWeight="bold"
              textAlign="center"
            >
              The simplest way to access global and permissionless labor markets
            </Typography>
            <Stack direction='row' spacing={3}>
            <Link
              style={{ textDecoration: 'none' }}
              href="https://humble-penalty-bba.notion.site/Opportunity-de5af9fb928f47288055c6c4ac2064ec"
            >
              <Button
                endIcon={<ArrowRight />}
                disableElevation
                sx={{ alignSelf: 'flex-start', p: 1.5, borderRadius: 20 }}
                color="secondary"
                variant="contained"
              >
                Funding
              </Button>
            </Link>

            <Link
              style={{ textDecoration: 'none' }}
              href="https://humble-penalty-bba.notion.site/Opportunity-de5af9fb928f47288055c6c4ac2064ec"
            >
              <Button
                endIcon={<ArrowRight />}
                disableElevation
                sx={{ alignSelf: 'flex-start', p: 1.5, borderRadius: 20 }}
                color="primary"
                variant="contained"
              >
                GigEarth
              </Button>
            </Link>
            </Stack>
          </Box>
        </div>
      </Box>
    </section>
  )
}

export default Hero
