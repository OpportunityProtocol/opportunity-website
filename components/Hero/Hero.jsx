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
      <Box className={classes.container}>

<Box
            sx={{
              py: 10,
              pb: 15,
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
              fontSize={50}
              fontWeight="bold"
              textAlign="center"
              color='#212121'
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
                className={classes.button}
                color="secondary"
                variant="contained"
              >
                Funding
              </Button>
            </Link>

              <Button
                endIcon={<ArrowRight />}
                disableElevation
                className={classes.button}
                color="primary"
                variant="contained"
                onClick={() => ref.current.scrollIntoView()}
              >
                GigEarth
              </Button>

            </Stack>
          </Box>

          
          <Card sx={{ boxShadow: '0px 2px 4px -1px #eee, 0px 4px 5px 0px #eee, 0px 1px 10px 0px #eee', width: '80%'}}>
          <img  
          src="/gigearth.png"
          className={classes.img}
        />
          </Card>


      </Box>
    </section>
  )
}

export default Hero
