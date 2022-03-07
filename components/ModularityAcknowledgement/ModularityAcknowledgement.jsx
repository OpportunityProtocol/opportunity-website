import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Button,
  Typography,
  Box,
  Slide,
  Avatar,
  CardActions,
  Stack,
} from '@mui/material'
import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import useOnScreen from '../../hooks/useOnScreen'
import { alpha } from '@mui/material/styles'
import useStyles from './ModularityAcknowledgementStyles'
import { ArrowRight } from '@mui/icons-material'
const ModularityAcknowledgement = () => {
  const classes = useStyles()
  const [moduleSectionCardAnimated, setModuleSectionCardAnimated] = useState(
    false,
  )
  const modularSectionRef = useRef(null)
  const moduleSectionIsVisible = useOnScreen(modularSectionRef)

  useEffect(() => {
    if (moduleSectionIsVisible == true && moduleSectionCardAnimated === false) {
      setModuleSectionCardAnimated(true)
    }
  }, [moduleSectionIsVisible])

  return (
    <Box
      className={classes.section}
      sx={{
        backgroundColor: '#212121',
      }}
    >
      <Grid flexGrow={1} container item sx={{ width: '100%' }}>
        <div className={classes.container}>
          <Typography variant="h4" color="#fff">
            Powered by
          </Typography>
          <Typography
            py={3}
            color="#fff"
            fontWeight="regular"
            width="90%"
          >
            GigEarth operates using existing and proven web3 protocols.
          </Typography>
        </div>

        <Grid
          component={Box}
          ref={modularSectionRef}
          container
          item
          spacing={2}
          alignItems="center"
          direction="row"
          my={1}
          width="100%"
        >
          <Grid xs={12} md={12} lg={4} item>
            <Slide
              timeout={1000}
              direction="up"
              in={moduleSectionCardAnimated}
              container={modularSectionRef.current}
            >
              <Card
                variant="outlined"
                elevation={0}
                sx={{
                  border: '1px solid #fff',
                  backgroundColor:
                    'transparent'
                }}
              >
                <CardContent className={classes.modularSectionCardContent}>
                  <Box className={classes.modularCardBox}>
                    <Typography
                      fontSize={13}
                      sx={{ textTransform: 'uppercase' }}
                    >
                      Decentralized Labor Markets
                    </Typography>

                    <Typography
                      fontWeight="bold"
                      fontSize={14}
                    >
                      Exchange Tech
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      fontSize={25}
                      fontWeight="bold"
                    >
                      GigEarth
                    </Typography>
                    <Typography
                      width="80%"
                      paragraph
                      pt={1}
                      fontSize={15}
                    >
                      Explore permissionless labor markets regardless of
                      geographical location or social class
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Button
                      disableRipple
                      disableFocusRipple
                      className={classes.learnMoreButton}
                      color="secondary"
                      variant="text"
                      endIcon={<ArrowRight />}
                      sx={{
                        margin: '0px !important',
                        padding: '0px !important',
                      }}
                    >
                      Learn about GigEarth
                    </Button>
                    <img src="/logo.svg" style={{ width: 30, height: 30 }} />
                  </Box>
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
                className={classes.card}
                variant="outlined"
                elevation={0}
                sx={{ border: '1px solid #fff', bgcolor: 'transparent' }}
              >
                <CardContent
                className={classes.modularSectionCardContent}>
                  <Box className={classes.modularCardBox}>
                    <Typography
                      fontSize={13}
                      sx={{ textTransform: 'uppercase' }}
                    >
                      Decentralized Stablecoin
                    </Typography>
                    <Typography
                      fontWeight="bold"
                      fontSize={14}
                    >
                      Exchange Tech
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      fontSize={25}
                      fontWeight="bold"
                    >
                      DAI
                    </Typography>
                    <Typography
                      width="80%"
                      paragraph
                      pt={1}
                      fontSize={15}
                    >
                      Earn money in a decentralized and stable cryptocurrency.
                      Off ramp using any centralized exchange of your choice.
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Button
                      color='secondary'
                      variant="text"
                      endIcon={<ArrowRight />}
                      sx={{
                        margin: '0px !important',
                        padding: '0px !important',
                      }}
                    >
                      Learn about DAI
                    </Button>

                    <img
                      src="/dai_logo2.png"
                      style={{ width: 35, height: 35 }}
                    />
                  </Box>
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
                className={classes.card}
                variant="outlined"
                elevation={0}
                sx={{
                  border: '1px solid #fff',
                  backgroundColor:
                    'transparent' /*backgroundColor: (theme) => alpha(theme.palette.secondary.main, 0.3),*/ /*boxShadow: '0px 2px 4px -1px #eee, 0px 4px 5px 0px #eee, 0px 1px 10px 0px #eee'*/,
                }}
              >
                <CardContent className={classes.modularSectionCardContent}>
                  <Box className={classes.modularCardBox}>
                    <Typography
                      fontSize={13}
                      sx={{ textTransform: 'uppercase' }}
                    >
                      Decentralized Justice
                    </Typography>
                    <Typography
                      fontWeight="bold"
                      fontSize={14}
                    >
                      Legal Tech
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      fontSize={25}
                      fontWeight="bold"
                    >
                      Kleros
                    </Typography>
                    <Typography
                      width="80%"
                      paragraph
                      pt={1}
                      fontSize={15}
                    >
                      Disputes are solved using the Kleros protocol. Users
                      escape the bias of centralized services on GigEarth.
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Button
                      color="secondary"
                      variant="text"
                      endIcon={<ArrowRight />}
                      sx={{
                        margin: '0px !important',
                        padding: '0px !important',
                      }}
                    >
                      Learn about Kleros
                    </Button>
                    <img
                      src="/kleros_logo.svg"
                      style={{ width: 30, height: 30 }}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Slide>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ModularityAcknowledgement
