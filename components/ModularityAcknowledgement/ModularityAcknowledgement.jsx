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
      variant='outlined'
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
                <img src="/globe.png" className={classes.icon} />

                <div>
                  <Typography
                    width="90%"
                    height={80}
                    fontWeight="300"
                    fontSize={25}
                    color='rgba(33, 33, 33, .85)'
                  >
                    Global access to markets on Opportunity
                  </Typography>

                  <Typography fontWeight="light" noWrap={false}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam eu justo et tortor tempus pulvinar.
                  </Typography>
                </div>
              </CardContent>

              <CardActions>
                <Button
                  sx={{
                    color: 'rgba(102, 197, 107, .85)',
                    fontWeight: 'medium',
                    fontSize: 16,
                  }}
                  
                >
                  Learn about Opportunity
                </Button>
              </CardActions>
            </Card>
          </Slide>
        </Grid>

        <Grid xs={12} md={12} lg={4} style={{ height: '100%' }} item>
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
                <img
                  src="/exchange.png"
                  className={classes.icon}
                  style={{ width: '40px' }}
                />

                <div>
                  <Typography
                    width="90%"
                    height={80}
                    fontWeight="300"
                    fontSize={25}
                    color='rgba(33, 33, 33, .85)'
                  >
                    Stable exchange through DAI
                  </Typography>

                  <Typography fontWeight="light" noWrap={false}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam eu justo et tortor tempus pulvinar.
                  </Typography>
                </div>
              </CardContent>

              <CardActions>
              <Link href='https://makerdao.com/en/whitepaper#the-dai-stablecoin'>
              <Button
                  sx={{
                    color: 'rgba(102, 197, 107, .85)',
                    fontWeight: 'medium',
                    fontSize: 16,
                  }}
                >
                  Learn about DAI
                </Button>
            </Link>
                
              </CardActions>
            </Card>
          </Slide>
        </Grid>

        <Grid xs={12} md={12} lg={4} height="100%" item>
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
                <img src="/shield.png" className={classes.icon} />

                <div>
                  <Typography
                    width="90%"
                    height={80}
                    fontWeight="300"
                    fontSize={25}
                    color='rgba(33, 33, 33, .85)'
                  >
                    Dispute protection by Kleros
                  </Typography>

                  <Typography fontWeight="light" noWrap={false}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam eu justo et tortor tempus pulvinar.
                  </Typography>
                </div>
              </CardContent>
              
              <CardActions>
              <Link href='https://kleros.io/#'>
              <Button
                  sx={{
                    color: 'rgba(102, 197, 107, .85)',
                    fontWeight: 'medium',
                    fontSize: 16,
                  }}
                >
                  Learn about Kleros
                </Button>
            </Link>
              </CardActions>
            </Card>
          </Slide>
        </Grid>
      </Grid>
    </section>
  )
}

export default ModularityAcknowledgement
