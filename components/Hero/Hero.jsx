import { useState } from 'react'
import {
  Grid,
  Fade,
  Link,
  Paper,
  Box,
  IconButton,
  Typography,
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
          width: '100vw',
          height: '100vh',
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
            position: 'relative',
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
              width: '60%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            <Typography
              py={2}
              color="#fff"
              fontSize={45}
              fontWeight="bold"
              textAlign="flex-start"
            >
              The simplest way to access global and permissionless labor markets
            </Typography>
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
                Contribute to our grant
              </Button>
            </Link>
          </Box>
        </div>
      </Box>
    </section>
  )
}

export default Hero
