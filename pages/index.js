import React, { useState, useRef } from "react";

import Head from "next/head";
import styles from "../styles/Home.module.css";
import {
  AppBar,
  Avatar,
  Button,
  Paper,
  Box,
  Card,
  Grid,
  Stack,
  CardActionArea,
  Fade,
  CardMedia,
  IconButton,
  Slide,
  CardActions,
  CardContent,
  ThemeProvider,
  Toolbar,
  Typography,
  Divider,
} from "@mui/material";
import { themeOptions } from "../material_theme";
import Marquee from "react-fast-marquee";
import useStyles from "../styles/styles";
import { ArrowRight, KeyboardArrowRight, CallMadeSharp } from "@mui/icons-material";
import MarketDisplay from "../components/MarketDisplay/MarketDisplay";
import Footer from "../components/Footer/Footer";
import { useEffect } from "react";
import useOnScreen from "../hooks/useOnScreen";
import useInterval from 'react-useinterval';

import { FaGithub, FaDiscord } from "react-icons/fa";

const MARKETS = [
  "Development & IT",
  "Design & Creative",
  "Sales & Marketing",
  "Writing & Translation",
  "Admin & Customer Support",
  "Writing & Translation",
  "Finance & Accounting",
  "Legal",
  "HR & Training",
  "Engineering & Architecture",
  "Deploy your own",
];
const BUTTONS = ["Exchange", "Markets", "Payouts", "DAO"];

const INTRO_TEXT_TRANSLATIONS = [
  {
    first: 'Bringing the gig economy to the blockchain',
    body: "Opportunity envisions a future where every human has the ability to work regardless of geographical location or social status. No forms or unecessary documentation. Connect a wallet and work. It's just that simple."
  },
  {
    first: 'Llevando la economia de conciertos a la cadena de bloques',
    body: "Opportunity prevé un futuro en el que cada ser humano tenga la capacidad de trabajar independientemente de su ubicación geográfica o estatus social. Sin formularios ni documentación innecesaria. Conecte una billetera y trabaje. Es así de simple."
  },
  {
    first: '将零工经济带入区块链',
    body: "機遇設想了一個未來，每個人都有能力工作，無論地理位置或社會地位如何。 沒有表格或不必要的文件。 連接錢包並開始工作。 就是這麼簡單。"
  },
  {
    first: 'Apporter la gig economy à la blockchain',
    body: "Opportunity envisage un avenir où chaque être humain a la capacité de travailler indépendamment de sa situation géographique ou de son statut social. Pas de formulaires ou de documentation inutile. Connectez un portefeuille et travaillez. C'est aussi simple que ça."
  }
]

//set state var for all

//every 2 seconds

//go to next arr position and set state var

//tell it to re grow

export default function Home() {
  const classes = useStyles();
  const [moduleSectionCardAnimated, setModuleSectionCardAnimated] = useState(false);
  const modularSectionRef = useRef(null);
  const moduleSectionIsVisible = useOnScreen(modularSectionRef);
  const [currIntroTextIndex, setCurrIntorTextIndex] = useState(0)
  const [firstText, setFirstText] = useState(INTRO_TEXT_TRANSLATIONS[currIntroTextIndex].first)
  const [bodyText, setBodyText] = useState(INTRO_TEXT_TRANSLATIONS[currIntroTextIndex].body)

  const [fade, toggleFade] = useState(false)
  const onToggleFade = () => toggleFade(prevState => !prevState)
  
  useEffect(() => {
    if (moduleSectionIsVisible == true && moduleSectionCardAnimated === false) {
      setModuleSectionCardAnimated(true);
    }
  }, [moduleSectionIsVisible]);

  useInterval(() => {
onToggleFade()

  }, 4000, 5);

  return (
    <ThemeProvider theme={themeOptions}>
      <div className={styles.container}>
        <Head>
          <title>Opportunity</title>
          <meta name="description" content="A Decentralized and Permissionless Labor Market Protocol" />
          <link rel="icon" href="/favicon.ico" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
            rel="stylesheet"
          />

          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
        </Head>

        <main className={styles.main}>
          {/* Introduction Section */}
          <section className={classes.introductionSection}>
            <Paper
              className={classes.appbarPaper}
              square={true}
              classes={{ outlined: classes.appbar }}
              elevation={0}
              variant="outlined"
            >
              <Grid container direction="row" spacing={4} justifyContent='space-between' alignItems="center">
                <Grid item className={classes.flexedGridItem}>
                  <Typography variant="h6" mx={2}>Opportunity</Typography>

                  <Typography fontSize={15} mx={2}>Blog</Typography>

                  <Typography fontSize={15} mx={2}>Discord</Typography>

                  <Typography fontSize={15} mx={2}>FAQ</Typography>
                </Grid>

                <Grid item className={classes.flexedGridItem}>
                  <IconButton mx={2}>
                  <FaGithub size={28} />
                  </IconButton>

                  <IconButton mx={2}>
                  <FaDiscord size={34} />
                  </IconButton>
                </Grid>

              </Grid>
            </Paper>
         

            <Grid
              className={classes.introductionSectionGrid}
              container
              direction="column"
              alignItems="center"
              justifyContent="space-evenly"
            >
              <Grid
              flexGrow={1}
                container
                item
                alignItems="center"
                justify="center"
                style={{ width: "100vw", flexGrow: 1 }}
              >
               
                  <Fade in={fade} timeout={500} onExited={() => {
                    if (currIntroTextIndex == INTRO_TEXT_TRANSLATIONS.length - 1) {
                      setCurrIntorTextIndex(0)
                    } else {
                      setCurrIntorTextIndex(prevState => prevState + 1) 
                    } 
                
                      setFirstText(INTRO_TEXT_TRANSLATIONS[currIntroTextIndex].first)
                      setBodyText(INTRO_TEXT_TRANSLATIONS[currIntroTextIndex].body)
                  }}>

                  <div className={classes.introductionTextContainer}>
                    <Typography
                      py={2}
                      fontSize={40}
                      color="rgba(33, 33, 33, .85)"
                      fontWeight="medium"
                      width="70%"
                    >
                      {firstText}
                    </Typography>
                    <Typography
                      width="50%"
                      variant="body1"
                      fontSize={15}
                      color="#8f8f8f"
                    >
                      {bodyText}
                    </Typography>

                    <Button
                      sx={{ padding: "0px !important", mt: 2 }}
                      variant="text"
                    >
                      Learn more
                    </Button>
                  </div>
                  </Fade>
  

         
              </Grid>

              <Grid item style={{ padding: "50px 0px", width: "100vw" }}>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography py={5} variant="h5" color="rgba(33, 33, 33, .85)">
                    Don't see a market that fits your work? Deploy your own.
                  </Typography>
                </Box>

                <Marquee>
                  {MARKETS.map((market) => {
                    return <MarketDisplay marketTitle={market} />;
                  })}
                </Marquee>
              </Grid>
            </Grid>
          </section>

          {/* Section 2 */}
          <section className={classes.section}>
            <Grid spacing={3} container direction={{ xs: 'column', lg: 'row'}} alignItems="center" justifyContent='space-between'>

                {/* First */}
                <Grid
     
              container
              item
              xs={6}
              direction="column"
              alignItems="flex-start"
              justifyContent='space-between'
            >
              <Grid xs={12} md={12} lg={6} item style={{width: '100%'}}>
                <Card elevation={0} style={{ width: "100%", height: "100%" }}>
                  <img
                    src="/girl.jpeg"
                    style={{ width: "100%", height: 400 }}
                  />
                </Card>
              </Grid>

              <Grid style={{display: 'flex', flexDirection: 'column',}}  xs={12} md={12} lg={6} item>
                <Typography
                  py={1}
                  fontSize={16}
                  color="rgba(102, 197, 107, .85)"
                >
                  Earn money with no hassle
                </Typography>

                <Typography
                  py={1}
                  fontSize={30}
                  fontWeight="medium"
                  color="rgba(33, 33, 33, 0.85)"
                >
                  The ability to work made easy
                </Typography>

                <Typography
                  py={1}
                  fontSize={15}
                  fontWeight="regular"
                  color="#8f8f8f"
                  lineHeight={1.5}
              
                >
                  Connect a wallet and instantly begin looking for work.
                  Opportunity is permissionless so you don't have to worry about
                  your geographical location or class status.
                </Typography>
              </Grid>
            </Grid>
            {/* end first */}



            {/* second */}
            <Grid
              container
              item
              xs={6}
              direction="column"
              alignItems="flex-start"
              justifyContent="space-between"
            >
              <Grid xs={12} md={12} lg={6} item style={{width: '100%'}}>
                <Card elevation={0} style={{ width: "100%", height: "100%" }}>
                  <img
                    src="/guy.jpeg"
                    style={{ width: "100%", height: 400 }}
                  />
                </Card>
              </Grid>

              <Grid  xs={12} md={12} lg={6} item>
                <Typography
                  py={1}
                  fontSize={16}
                  color="rgba(102, 197, 107, .85)"
                >
                  Made for individuals
                </Typography>

                <Typography
                  py={1}
                  fontSize={30}
                  fontWeight="medium"
                  color="rgba(33, 33, 33, 0.85)"
                >
                  No corporations, just people
                </Typography>

                <Typography
                  py={1}
                  fontSize={15}
                  fontWeight="regular"
                  color="#8f8f8f"
                  lineHeight={1.5}
              
                >
                  Find work amongst your peers on a global stage. No
                  corporations or third parties involved so you keep most of
                  your earnings.
                </Typography>
              </Grid>
            </Grid>
            {/* end second */}
            </Grid>
          </section>


          <section
            style={{
              background: "rgb(255,255,255)",
              background:
                "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(250,250,250,1) 50%, rgba(251,251,253,1) 100%)",
            }}
            className={classes.section}
          >
            <Grid container alignItems="center" justifyContent="center">
              <Card
                elevation={1}
                style={{
                  position: "relative",
                  width: "100%",
                  height: "600px",
                  margin: "15px 0px",
                }}
              >
                <div
                  className={classes.shadowyDiv}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    flexDirection: "column",
                    justifyContent: "center",
                    width: "100%",
                    height: "600px",
                    padding: 100,
                  }}
                >
                  <Typography color="#fff" variant="h6" fontSize={40}>
                    The ability to work is now in the hands of everyone.
                  </Typography>
                  <Button
                    variant="text"
                    sx={{ color: "#fff" }}
                    endIcon={<KeyboardArrowRight />}
                  >
                    Our mission
                  </Button>
                </div>
                <img
                  src="/crowd.jpeg"
                  style={{ width: "100%", height: "100%" }}
                />
              </Card>
            </Grid>
          </section>

          {/* Section 4 */}
          <section
            style={{ backgroundColor: "#fbfbfd" }}
            className={classes.section}
          >
            <Grid
              p={3}
              style={{backgroundColor: 'transparent', borderRadius: 8, border: '1px solid #eee'}}
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid  xs={12} md={12} lg={6} item className={classes.fullGrid}>
                <Typography variant='h4'>
                  Learn the components
                </Typography>
                <Typography
                  py={3}
                  color="rgba(33, 33, 33, 0.85)"
                  fontWeight="regular"
                  width='90%'
                >
                  The simplest way to work without worrying about KYC, a bank
                  account or unnecessary documentation with three simple components.
                  </Typography>
                  
                  <Card elevation={0} variant='outlined' sx={{position: 'relative', margin: '15px 0px', padding: 4}}>
                    <Typography fontSize={18} variant='h6' color="rgb(33, 33, 33, .85)">
                      Users
                    </Typography>
                    <Typography fontSize={14}>
                      Keep your identity and reputation across all markets.
                    </Typography>

                    <IconButton style={{padding: 10, position: 'absolute', top: 0, right: 0}}>
                      <CallMadeSharp sx={{color: "#66C56B"}} />
                    </IconButton>
                  </Card>

                  <Card elevation={0} variant='outlined' sx={{position: 'relative', margin: '15px 0px', padding: 4}}>
                  <Typography fontSize={18} variant='h6' color="rgb(33, 33, 33, .85)">
                      Markets
                    </Typography>
                    <Typography fontSize={14}>
                      Participate in any market on a global scale or deploy your own
                    </Typography>

                    <IconButton style={{padding: 10, position: 'absolute', top: 0, right: 0}}>
                      <CallMadeSharp sx={{color: "#66C56B"}} />
                    </IconButton>
                  </Card>

                  <Card elevation={0} variant='outlined' sx={{position: 'relative', margin: '15px 0px', padding: 4}}>
                  <Typography fontSize={18} variant='h6' color="rgb(33, 33, 33, .85)">
                      Relationships
                    </Typography>
                    <Typography fontSize={14}>
                      Employers and workers connect on Opportunity to faciliate fair and transparent contracts.
                    </Typography>

                    <IconButton style={{padding: 10, position: 'absolute', top: 0, right: 0}}>
                      <CallMadeSharp sx={{color: "#66C56B"}} />
                    </IconButton>
                  </Card>
              </Grid>

              <Grid xs={12} sm={12} md={12} lg={6}  item className={classes.fullGrid}>
                <img src='/world.png' style={{opacity: 0.3, width: '100%', height: '100%'}} />
              </Grid>
            </Grid>
          </section>

          <section
            ref={modularSectionRef}
            style={{
              background: "rgb(251,251,253)",
              background:
                "linear-gradient(180deg, rgba(251,251,253,1) 0%, rgba(250,250,250,1) 50%, rgba(255,255,255,1) 100%)",
            }}
            className={classes.section}
          >
            <Typography
              width="80%"
              fontWeight="regular"
              fontSize={25}
              py={2}
              color="#8f8f8f"
            >
              A modular application focused on doing one thing and letting
              the ecosystem do the rest
            </Typography>
            <Grid
              wrap={false}
              spacing={2}
              container
              direction="row"
              justifyContent="space-evenly"
            >
              <Grid xs={12} md={12} lg={4} item>
                <Slide
                  timeout={500}
                  direction="up"
                  in={moduleSectionCardAnimated}
                  container={modularSectionRef.current}
                >
                  <Card
                    elevation={0}
                    className={classes.modularSectionCard}
                  >
                    <CardContent className={classes.modularSectionCardContent}>
                      <img src="/globe.png" className={classes.icon} />

                      <div>
                        <Typography
                          width="90%"
                          height={80}
                          fontWeight="300"
                          fontSize={25}
                        >
                          Global access to markets on Opportunity
                        </Typography>

                        <Typography py={3} fontWeight="light" noWrap={false}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Aliquam eu justo et tortor tempus pulvinar.
                        </Typography>
                      </div>
                    </CardContent>

                    <CardActions>
                      <Button
                        sx={{
                          color: "rgba(102, 197, 107, .85)",
                          fontWeight: "light",
                        }}
                      >
                        Learn about Opportunity
                      </Button>
                    </CardActions>
                  </Card>
                </Slide>
              </Grid>

              <Grid xs={12} md={12} lg={4} style={{ height: "100%" }} item>
                <Slide
                  timeout={1000}
                  direction="up"
                  in={moduleSectionCardAnimated}
                  container={modularSectionRef.current}
                >
                  <Card
                    elevation={0}
                    variation="outlined"
                    className={classes.modularSectionCard}
                  >
                    <CardContent className={classes.modularSectionCardContent}>
                      <img
                        src="/exchange.png"
                        className={classes.icon}
                        style={{ width: "40px" }}
                      />

                      <div>
                        <Typography
                          width="90%"
                          height={80}
                          fontWeight="300"
                          fontSize={25}
                        >
                          Stable exchange through DAI
                        </Typography>

                        <Typography py={3} fontWeight="light" noWrap={false}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Aliquam eu justo et tortor tempus pulvinar.
                        </Typography>
                      </div>
                    </CardContent>

                    <CardActions>
                      <Button
                        sx={{
                          color: "rgba(102, 197, 107, .85)",
                          fontWeight: "light",
                        }}
                      >
                        Learn about DAI
                      </Button>
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
                    variation="outlined"
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
                        >
                          Dispute protection by Kleros
                        </Typography>

                        <Typography py={3} fontWeight="light" noWrap={false}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Aliquam eu justo et tortor tempus pulvinar.
                        </Typography>
                      </div>
                    </CardContent>

                    <CardActions>
                      <Button
                        sx={{
                          color: "rgba(102, 197, 107, .85)",
                          fontWeight: "light",
                        }}
                      >
                        Learn about Kleros
                      </Button>
                    </CardActions>
                  </Card>
                </Slide>
              </Grid>
            </Grid>
          </section>

          {/* Section 6 */}
          <section
            style={{ backgroundColor: "#fff" }}
            className={classes.centeredSection}
          >
            <div>
              <Typography
                color="rgba(33, 33, 33, .85)"
                py={2}
                textAlign="center"
                fontWeight="normal"
                fontSize={30}
              >
                Featured Blog Post
              </Typography>
              <Typography
                color="rgba(33, 33, 33, .85)"
                textAlign="center"
                fontWeight="light"
                fontSize={25}
              >
                Creating a secure protocol for permissionless work
              </Typography>
            </div>

            <Grid
              my={6}
              container
              direction="row"
              alignItems="center"
              justifyContent="space-evenly"
            >
              <Card
                elevation={10}
                sx={{
                  boxShadow:
                    "0px 6px 6px -3px #eee, 0px 10px 14px 1px #eee, 0px 4px 18px 3px #eee",
                  borderRadius: 2,
                  maxWidth: 600,
                }}
              >
                <CardActionArea
                  sx={{
                    padding: 2,
                    display: "flex",
                    height: "100%",
                    flexDirection: "row",
                    alignItems: "flex-start",
                  }}
                >
                  <CardMedia
                    component="img"
                    style={{ height: "100%", borderRadius: 5, width: '100%' }}
                    image="https://picsum.photos/200"
                    alt="green iguana"
                  />
                  <CardContent
                    style={{
                      height: "100%",
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      flexDirection: "column",
                    }}
                  >
                    <Typography gutterBottom variant="h5" component="div">
                      The case for a permissionless labor market protocol
                    </Typography>
                    <Stack direction="row" gap={2} alignItems="center">
                      <Avatar sx={{ height: 35, width: 35 }}>EH</Avatar>

                      <div>
                        <Typography fontSize={12} fontWeight="medium">
                          Elijah Hampton
                        </Typography>
                        <Typography fontSize={10} color="#aaa">
                          Coming soon
                        </Typography>
                      </div>
                    </Stack>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </section>

          {/* Section 7*/}
          <section className={classes.section}>
            <Grid container alignItems="center" justifyContent="center">
              <Grid item xs={12}>
              <Card
                elevation={1}
                style={{
                  position: "relative",
                  width: "100%",
                  height: "670px",
                  margin: "15px 0px",
                }}
              >
                <div
                  className={classes.shadowyDiv}
                  style={{
                    padding: "5% 7%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    width: "100%",
                    height: "670px",
                  }}
                >
                  <Typography py={3} color="#fff" variant="h6" fontSize={40}>
                    The future of work relies on highly skilled individuals, not
                    corporations.
                  </Typography>
                  <Button
                    size="large"
                    variant="outlined"
                    sx={{ color: "#fff", borderColor: "#eee" }}
                  >
                    Learn more
                  </Button>
                </div>
                <img src="/freelance.jpg" className={classes.fullElement} />
              </Card>
              </Grid>
            </Grid>
          </section>

          <Footer />
        </main>
      </div>
    </ThemeProvider>
  );
}
