import { Grid, Card, CardContent, Button, Typography, Box, Slide, darken } from '@mui/material';
import { useRef, useState, useEffect } from 'react';
import useOnScreen from '../../hooks/useOnScreen';
import useStyles from './ModularityAcknowledgementStyles';
import { ArrowRight } from '@mui/icons-material';

const ModularityAcknowledgement = () => {
  const classes = useStyles();
  const [moduleSectionCardAnimated, setModuleSectionCardAnimated] = useState(false);
  const modularSectionRef = useRef(null);
  const moduleSectionIsVisible = useOnScreen(modularSectionRef);

  useEffect(() => {
    if (moduleSectionIsVisible == true && moduleSectionCardAnimated === false) {
      setModuleSectionCardAnimated(true);
    }
  }, [moduleSectionIsVisible]);

  return (
    <Box className={classes.root}>
      <Grid flexGrow={1} container item sx={{ width: '100%' }}>
        <div className={classes.container}>
          <Typography variant="h4" color="rgba(147,227,178,1)">
            Powered by
          </Typography>
          <Typography py={3} color="rgba(147,227,178,1)" fontWeight="regular" width="90%">
            GigEarth is built on top existing and web3 protocols.
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
              <Card variant="outlined" elevation={0} className={classes.card}>
                <CardContent className={classes.modularSectionCardContent}>
                  <Box className={classes.modularCardBox}>
                    <Typography fontSize={13} color="rgba(147,227,178,1)" sx={{}}>
                      Decentralized Social Graph
                    </Typography>

                    <Typography fontWeight="bold" fontSize={14}>
                      Social Tech
                    </Typography>
                  </Box>
                  <Box>
                    <Typography fontSize={25} fontWeight="bold">
                      Lens Protocol
                    </Typography>
                    <Typography width="80%" paragraph pt={1} fontSize={15}>
                      Interact with a decentralized and permissionless social graph providing the
                      basis for network building, reviews and resaleable content.
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
                      color="secondary"
                      variant="text"
                      endIcon={<ArrowRight />}
                      className={classes.textButton}
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
              <Card variant="outlined" elevation={0} className={classes.card}>
                <CardContent className={classes.modularSectionCardContent}>
                  <Box className={classes.modularCardBox}>
                    <Typography
                      fontSize={13}
                      color="rgba(147,227,178,1)"
                      sx={{ textTransform: 'uppercase' }}
                    >
                      Decentralized Stablecoin
                    </Typography>
                    <Typography fontWeight="bold" fontSize={14}>
                      Exchange Tech
                    </Typography>
                  </Box>
                  <Box>
                    <Typography fontSize={25} fontWeight="bold">
                      DAI
                    </Typography>
                    <Typography width="80%" paragraph pt={1} fontSize={15}>
                      Earn money in a decentralized and stable cryptocurrency. Off ramp using any
                      centralized exchange of your choice.
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
                      className={classes.textButton}
                    >
                      Learn about DAI
                    </Button>

                    <img src="/dai_logo2.png" style={{ width: 35, height: 35 }} />
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
              <Card variant="outlined" elevation={0} className={classes.card}>
                <CardContent className={classes.modularSectionCardContent}>
                  <Box className={classes.modularCardBox}>
                    <Typography
                      fontSize={13}
                      color="rgba(147,227,178,1)"
                      sx={{ textTransform: 'uppercase' }}
                    >
                      Decentralized Justice
                    </Typography>
                    <Typography fontWeight="bold" fontSize={14}>
                      Legal Tech
                    </Typography>
                  </Box>
                  <Box>
                    <Typography fontSize={25} fontWeight="bold">
                      Kleros
                    </Typography>
                    <Typography width="80%" paragraph pt={1} fontSize={15}>
                      Disputes are solved using the Kleros protocol. Users escape the bias of
                      centralized services on GigEarth.
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
                      className={classes.textButton}
                    >
                      Learn about Kleros
                    </Button>
                    <img src="/kleros_logo.svg" style={{ width: 30, height: 30 }} />
                  </Box>
                </CardContent>
              </Card>
            </Slide>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ModularityAcknowledgement;
