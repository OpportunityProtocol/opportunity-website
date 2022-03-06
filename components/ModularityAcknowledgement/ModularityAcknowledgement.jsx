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
        backgroundColor: (theme) => alpha(theme.palette.secondary.main, 0.3),
      }}
    >
      <Grid flexGrow={1} container item sx={{ width: '100%' }}>
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
          }}
        >
          <Typography variant="h4" color="rgba(33, 33, 33, .85)">
            Powered by
          </Typography>
          <Typography
            py={3}
            color="rgba(33, 33, 33, 0.85)"
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
                className={classes.card}
                variant="outlined"
                elevation={0}
                sx={{
                  backgroundColor:
                    'transparent' /*backgroundColor: (theme) => alpha(theme.palette.secondary.main, 0.3),*/ /*boxShadow: '0px 2px 4px -1px #eee, 0px 4px 5px 0px #eee, 0px 1px 10px 0px #eee'*/,
                }}
              >
                <CardContent
                  sx={{
                    height: 250,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <Box
                    sx={{
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Typography
                      color="rgba(33, 33, 33, .85)"
                      fontSize={13}
                      sx={{ textTransform: 'uppercase' }}
                    >
                      Decentralized Labor Markets
                    </Typography>

                    <Typography
                      color="rgba(33, 33, 33, .85)"
                      fontWeight="bold"
                      fontSize={14}
                    >
                      Exchange Tech
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{ color: 'rgba(33, 33, 33, .85)' }}
                      fontSize={25}
                      fontWeight="bold"
                    >
                      GigEarth
                    </Typography>
                    <Typography
                      width="80%"
                      color="rgba(33, 33, 33, .85)"
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
                      color="primary"
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
                sx={{
                  backgroundColor:
                    'transparent' /*backgroundColor: (theme) => alpha(theme.palette.secondary.main, 0.3),*/ /*boxShadow: '0px 2px 4px -1px #eee, 0px 4px 5px 0px #eee, 0px 1px 10px 0px #eee'*/,
                }}
              >
                <CardContent
                  sx={{
                    height: 250,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <Box
                    sx={{
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Typography
                      color="rgba(33, 33, 33, .85)"
                      fontSize={13}
                      sx={{ textTransform: 'uppercase' }}
                    >
                      Decentralized Stablecoin
                    </Typography>
                    <Typography
                      color="rgba(33, 33, 33, .85)"
                      fontWeight="bold"
                      fontSize={14}
                    >
                      Exchange Tech
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{ color: 'rgba(33, 33, 33, .85)' }}
                      fontSize={25}
                      fontWeight="bold"
                    >
                      DAI
                    </Typography>
                    <Typography
                      width="80%"
                      color="rgba(33, 33, 33, .85)"
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
                      color="primary"
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
                  backgroundColor:
                    'transparent' /*backgroundColor: (theme) => alpha(theme.palette.secondary.main, 0.3),*/ /*boxShadow: '0px 2px 4px -1px #eee, 0px 4px 5px 0px #eee, 0px 1px 10px 0px #eee'*/,
                }}
              >
                <CardContent
                  sx={{
                    height: 250,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <Box
                    sx={{
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Typography
                      color="rgba(33, 33, 33, .85)"
                      fontSize={13}
                      sx={{ textTransform: 'uppercase' }}
                    >
                      Decentralized Justice
                    </Typography>
                    <Typography
                      color="rgba(33, 33, 33, .85)"
                      fontWeight="bold"
                      fontSize={14}
                    >
                      Legal Tech
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{ color: 'rgba(33, 33, 33, .85)' }}
                      fontSize={25}
                      fontWeight="bold"
                    >
                      Kleros
                    </Typography>
                    <Typography
                      width="80%"
                      color="rgba(33, 33, 33, .85)"
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
                      color="primary"
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
