import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Button,
  Typography,
  Slide,
  Avatar,
  CardActions,
  Stack,
} from '@mui/material'
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link'
import useOnScreen from '../../hooks/useOnScreen';

import useStyles from './ModularityAcknowledgementStyles'

const ModularityAcknowledgement = () => {
  const classes = useStyles()
  const [moduleSectionCardAnimated, setModuleSectionCardAnimated] = useState(false);
  const modularSectionRef = useRef(null);
  const moduleSectionIsVisible = useOnScreen(modularSectionRef);

  useEffect(() => {
    if (moduleSectionIsVisible == true && moduleSectionCardAnimated === false) {
      setModuleSectionCardAnimated(true);
    }
  }, [moduleSectionIsVisible]);

  return (
    <section
      ref={modularSectionRef}
      style={{
        background: 'rgb(255,255,255)',
        background:
          'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(250,250,250,1) 50%, rgba(251,251,253,1) 100%)',
      }}
      className={classes.section}
    >
      {/*<Typography width="80%" variant="h4" py={2}  color="rgba(33, 33, 33, .85)">
        A modular application focused on doing one thing
    </Typography>*/}
      <Grid
        wrap={false}
        spacing={2}
        container
        direction="row"
        justifyContent="space-evenly"
      >
        <Grid xs={12} md={12} lg={4} item>
          <Slide
            timeout={1000}
            direction="up"
            in={moduleSectionCardAnimated}
            container={modularSectionRef.current}
          >
            <Card elevation={0} variant='outlined' className={classes.modularSectionCard}>
              <CardContent className={classes.modularSectionCardContent}>
                <img src="/logo2.png" style={{ width: 60, height: 60}} />

                  <Typography
                    width="90%"
                    fontWeight="bold"
                    fontSize={25}
                  >
                    Global markets
                  </Typography>

                  <Typography width='85%' fontWeight="normal" color='rgba(33, 33, 33, 0.85)' fontSize={14} noWrap={false}>
                  Build decentralized apps on a developer-friendly platform that features low fees, high speeds, and infinite scalability.
                  </Typography>


                  <CardActions sx={{ padding: '0px !important', margin: '0px !important'}}>
                <Button
                className={classes.button}
                variant='outlined'
                color='primary'
                  sx={{
                    color: 'rgba(33, 33, 33, .85)',
                    fontWeight: 'medium',
                    fontSize: 16,
                  }}
                  
                >
                  Learn about Opportunity
                </Button>
              </CardActions>
              </CardContent>

            </Card>
          </Slide>
        </Grid>

        <Grid xs={12} md={12} lg={4} item>
          <Slide
            timeout={1300}
            direction="up"
            in={moduleSectionCardAnimated}
            container={modularSectionRef.current}
          >
            <Card
              elevation={0}
              variant="outlined"
              className={classes.modularSectionCard}
            >
              <CardContent className={classes.modularSectionCardContent}>
              <img src="/dai.png" style={{ width: '80%', height: 60}} />

      
                  <Typography
                    width="90%"
                    fontSize={25}
                    fontWeight="bold"
                  >
                    Stable exchange
                  </Typography>

                  <Typography width='85%' fontWeight="normal" color='rgba(33, 33, 33, 0.85)' fontSize={15} noWrap={false}>
                  Build decentralized apps on a developer-friendly platform that features low fees, high speeds, and infinite scalability.
                  </Typography>
             

                  <CardActions sx={{ padding: '0px !important', margin: '0px !important'}}>
              <Link href='https://makerdao.com/en/whitepaper#the-dai-stablecoin'>
              <Button
                  variant='outlined'
                  color='primary'
                    sx={{
                      color: 'rgba(33, 33, 33, .85)',
                      fontWeight: 'medium',
                      fontSize: 16,
                    }}
                >
                  Learn about DAI
                </Button>
            </Link>
                
              </CardActions>
              </CardContent>


            </Card>
          </Slide>
        </Grid>

        <Grid xs={12} md={12} lg={4} item>
          <Slide
            timeout={1500}
            direction="up"
            in={moduleSectionCardAnimated}
            container={modularSectionRef.current}
          >
            <Card
              elevation={0}
              variant="outlined"
              className={classes.modularSectionCard}
            >
              <CardContent className={classes.modularSectionCardContent}>
              <img src="/kleros_logo.svg" style={{ width: 60, height: 60}} />


                  <Typography
                    width="90%"
                    fontWeight="bold"
                    fontSize={25}
                  >
                    Dispute protection
                  </Typography>

                  <Typography width='85%' fontWeight="normal" color='rgba(33, 33, 33, 0.85)' fontSize={15} noWrap={false}>
                  Build decentralized apps on a developer-friendly platform that features low fees, high speeds, and infinite scalability.
                  </Typography>
              

                <CardActions sx={{ padding: '0px !important', margin: '0px !important'}}>
              <Link href='https://kleros.io/#'>
              <Button
                  variant='outlined'
                  color='primary'
                    sx={{
      
                      color: 'rgba(33, 33, 33, .85)',
                      fontWeight: 'medium',
                      fontSize: 16,
                    }}
                >
                  Learn about Kleros
                </Button>
            </Link>
              </CardActions>
              </CardContent>
              

            </Card>
          </Slide>
        </Grid>
      </Grid>
    </section>
  )
}

export default ModularityAcknowledgement
