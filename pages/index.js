import Head from 'next/head';
import styles from '../styles/Home.module.css';
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
  CardMedia,
  CardActions,
  CardContent,
  ThemeProvider,
  Toolbar,
  Typography,
  Divider,
} from '@mui/material';
import { themeOptions } from '../material_theme';
import Marquee from 'react-fast-marquee';
import useStyles from '../styles/styles';
import { ArrowRight, KeyboardArrowRight } from '@mui/icons-material';
import MarketDisplay from '../components/MarketDisplay/MarketDisplay';
import Footer from '../components/Footer/Footer';
const MARKETS = [
  'Development & IT',
  'Design & Creative',
  'Sales & Marketing',
  'Writing & Translation',
  'Admin & Customer Support',
  'Writing & Translation',
  'Finance & Accounting',
  'Legal',
  'HR & Training',
  'Engineering & Architecture',
  'Deploy your own',
];
const BUTTONS = ['Exchange', 'Markets', 'Payouts', 'DAO'];

export default function Home() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={themeOptions}>
      <div className={styles.container}>
        <Head>
          <title>Opportunity - Decentralized Job Markets</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
          
          <link rel="preconnect" href="https://fonts.googleapis.com" /> 
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin /> 
<link href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet" />


          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
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
              <Grid container direction="row" spacing={4} alignItems="center">
                <Grid item>
                  <Typography variant="h6">Opportunity</Typography>
                </Grid>

                <Grid item>
                  <Typography fontSize={15}>Blog</Typography>
                </Grid>

                <Grid item>
                  <Typography fontSize={15}>Discord</Typography>
                </Grid>
              </Grid>
            </Paper>
            <Paper
              elevation={0}
              sx={{
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100vw ',
                height: 50,
                background: 'rgb(170,226,173)',
                background:
                  'linear-gradient(90deg, rgba(103,231,110,1) 0%, rgba(103,231,110,1) 25%, rgba(161,241,166,1) 100%)',
              }}
            >
              <Typography fontWeight="regular">Read the whitepaper (coming soon)</Typography>
            </Paper>

            <Grid
              className={classes.introductionSectionGrid}
              container
              direction="column"
              alignItems="center"
              justifyContent="space-evenly"
            >
              <Grid
                container
                item
                alignItems="center"
                justify="space-around"
                style={{ width: '100vw', padding: '0% 15%', flexGrow: 1}}
              >
                <Grid item style={{flex: 1.5, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <div className={classes.introductionTextContainer}>
                    <Typography
                      py={2}
                      fontSize={40}
                      color="rgba(33, 33, 33, .85)"
                      fontWeight="medium"
                      width='75%'
                    >
                      Earning money shouldn't be a&nbsp;
                      <span
                        style={{ color: 'rgba(102, 197, 107, .85)' }}
                        fontWeight="bold"
                        variant="h1"
                        fontSize={40}
                      >
                        privilege
                      </span>
                    </Typography>
                    <Typography
                      width="70%"
                      variant='body1'
                      fontSize={15}
                      color="#8f8f8f"
                    >
                      Opportunity envisions a future where every human has the ability to work regardless of geographical location or class status.  No forms or unecessary documentation. Connect a wallet and work. It's just
                      that simple.
                    </Typography>

                    <Button sx={{ padding: '0px !important', mt: 2}}  variant='text'>
                      Learn more
                    </Button>
                  </div>
                </Grid>

                <Grid item style={{flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <img className={classes.backgroundImage} src="/world.png" />
                </Grid>
              </Grid>

              <Grid item style={{ padding: '50px 0px', width: '100vw' }}>
                <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Typography py={5} variant='h5' color='rgba(33, 33, 33, .85)'>
                  Don't see a market that fits your work?  Deploy your own.
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
            <Grid container direction="row" alignItems="center" justifyContent="space-between">
              <Grid item style={{ flex: 1 }}>
                  <Card
                    elevation={0}
                    style={{ width: '420px', height: '100%'}}
                  >
                    <img
                      src="/girl.jpeg"
                      style={{  width: '100%', height: '100%' }}
                    />
                  </Card>
              </Grid>

              <Grid item style={{ flex: 1 }}>
                <Typography py={1} fontSize={16} color="rgba(102, 197, 107, .85)">
                  Earn money with no hassle
                </Typography>

                <Typography py={1} fontSize={30} fontWeight="medium" color="rgba(33, 33, 33, 0.85)">
                  The ability to work made easy
                </Typography>

                <Typography
                  py={1}
                  fontSize={15}
                  fontWeight="regular"
                  color="#8f8f8f"
                  lineHeight={1.5}
                >
                  Connect a wallet and instantly begin looking for work. Opportunity is
                  permissionless so you don't have to worry about your geographical location or class status.
                </Typography>
              </Grid>
            </Grid>
          </section>

          {/* Section 3 */}
          <section className={classes.section}>
            <Grid container  direction='row' alignItems="center" justifyContent="space-between">
            <Grid item style={{ flex: 1 }}>
                <Card elevation={0} style={{width: '420px', height: '100%' }}>
                <img
                      src="/guy.jpeg"
                      style={{  width: '100%', height: '100%' }}
                    />
                </Card>
              </Grid>
              
              <Grid item style={{ flex: 1 }}>
                <Typography py={1} fontSize={16} color="rgba(102, 197, 107, .85)">
                  Made for individuals
                </Typography>

                <Typography py={1} fontSize={30} fontWeight="medium" color="rgba(33, 33, 33, 0.85)">
                  No corporations, just people
                </Typography>

                <Typography
                  py={1}
                  fontSize={15}
                  fontWeight="light"
                  fontWeight="regular"
                  color="#8f8f8f"

                  lineHeight={1.5}
                >
                  Find work amongst your peers on a global stage. No corporations
                  or third parties involved so you keep most of your earnings.
                </Typography>
              </Grid>
            </Grid>
          </section>

          <section style={{

background: 'rgb(255,255,255)',
background: 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(250,250,250,1) 50%, rgba(251,251,253,1) 100%)'

          }} className={classes.section}>
            <Grid container alignItems="center" justifyContent="center">
              <Card
                elevation={1}
                style={{ position: 'relative', width: '100%', height: '600px', margin: '15px 0px' }}
              >
                <div
                  className={classes.shadowyDiv}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    width: '100%',
                    height: '600px',
                    padding: 100,
                  }}
                >
                  <Typography color="#fff" variant="h6" fontSize={40}>
                    The ability to work is now in the hands of everyone.
                  </Typography>
                  <Button variant="text" sx={{ color: '#fff' }} endIcon={<KeyboardArrowRight />}>
                    Our mission
                  </Button>
                </div>
                <img src="/crowd.jpeg" style={{ width: '100%', height: '100%' }} />
              </Card>
            </Grid>
          </section>

          {/* Section 4 */}
          <section style={{ backgroundColor: '#fbfbfd',}} className={classes.section}>
            <Grid
              spacing={10}
              container
              direction="row"
              justifyContent="space-evenly"
              alignItems="flex-start"
            >
              <Grid style={{ flex: 1.5 }} item className={classes.fullGrid}>
                <Card
                  elevation={4}
                  style={{
                    width: '100%',
                    height: 500,
                    boxShadow: '0px 2px 4px -1px #eee, 0px 4px 5px 0px #eee, 0px 1px 10px 0px #eee',
                  }}>
                  <img style={{width: '100%', height: '100%'}} src="/uniswap.png" />
                </Card>
                <Typography py={3} color="rgba(33, 33, 33, 0.85)" fontWeight="regular" width="80%">
                  The simplest way to work without worrying about KYC, a bank account or unnecessary
                  documentation.
                </Typography>
              </Grid>

              <Grid style={{ flex: 1 }} item className={classes.fullGrid}>
                <Card
              //variant="outlined"
                  elevation={0}
                  style={{
                    backgroundColor: 'transparent',
                   // padding: 30,
                    width: '100%',
                    height: 210,
                    // boxShadow: '0px 2px 4px -1px #eee, 0px 4px 5px 0px #eee, 0px 1px 10px 0px #eee'
                  }}
                >
                  <Typography fontWeight="medium">
                    OPPORTUNITY
                  </Typography>

                  <Grid
                    height={'100%'}
                    container
                    item
                    direction="column"
                    flex={1}
                    justifyContent="space-evenly"
                  >
                    <Grid item>
                      <Typography fontWeight="light" fontSize={15}>
                        Earn TIP when you complete jobs
                      </Typography>
                    </Grid>

                    <Grid item>
                      <Typography fontWeight="light" fontSize={15}>
                        Work without KYC or other certifications
                      </Typography>
                    </Grid>

                    <Grid item>
                      <Typography fontWeight="light" fontSize={15}>
                        Lower fees than most freelancing platforms
                      </Typography>
                    </Grid>

                    <Grid item>
                      <Typography fontWeight="light" fontSize={15}>
                        Transfers and payouts in a global and decentralized currency
                      </Typography>
                    </Grid>
                  </Grid>
                </Card>

                <Button
                  sx={{ padding: 2, margin: '50px 0px' }}
                  variant="outlined"
                  className={classes.learnMoreButton}
                >
                  Learn more
                </Button>

                <Grid
                  container
                  item
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Grid item>
                    <Button variant="text" className={classes.textButton}>
                      Markets
                    </Button>
                  </Grid>

                  <Grid item>
                    <Button variant="text" className={classes.textButton}>
                      Contracts
                    </Button>
                  </Grid>

                  <Grid item>
                    <Button variant="text" className={classes.textButton}>
                      Messenger
                    </Button>
                  </Grid>

                  <Grid item>
                    <Button variant="text" className={classes.textButton}>
                      Profile
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </section>


          <section style={{background: 'rgb(251,251,253)',
background: 'linear-gradient(180deg, rgba(251,251,253,1) 0%, rgba(250,250,250,1) 50%, rgba(255,255,255,1) 100%)', display: 'flex', flexDirection: 'column', alignItems: 'center',}} className={classes.section}>
                <Grid wrap={false} spacing={2}  container direction='row' justifyContent='space-evenly'>
                  <Grid xs={4} item>
                    <Card elevation={0} variation='outlined' style={{backgroundColor: 'rgb(236, 237, 242)', border: '0px solid #eee', borderRadius: 15}}>
                      <CardContent style={{padding: 20, display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', }}>
                      <img src="/globe.png" style={{ margin: '20px 0px', width: '50px', height: '50px'}} />
                        
                        <div>
                        <Typography width='90%' fontWeight='300' fontSize={30}>
                            Global access to markets on Opportunity
                        </Typography>


                        <Typography py={3} fontWeight='light' noWrap={false}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Aliquam eu justo et tortor tempus pulvinar.
                        </Typography>
                        </div>
                      </CardContent>

                      <CardActions>
                        <Button sx={{ color: 'rgba(102, 197, 107, .85)', fontWeight: 'light'}}>
                          Learn about Kleros
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>

                  <Grid xs={4}  item>
                    <Card elevation={0} variation='outlined' style={{backgroundColor: 'rgb(236, 237, 242)', border: '0px solid #eee', borderRadius: 15}}>
                      <CardContent style={{padding: 20, display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', }}>
                      <img src="/exchange.png" style={{ margin: '20px 0px', width: '40px', height: '50px'}} />
                        
                        <div>
                        <Typography width='90%' fontWeight='300' fontSize={30}>
                            Stable exchange through DAI
                        </Typography>


                        <Typography py={3} fontWeight='light' noWrap={false}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Aliquam eu justo et tortor tempus pulvinar. 
                        </Typography>
                        </div>
                      </CardContent>

                      <CardActions>
                        <Button sx={{ color: 'rgba(102, 197, 107, .85)', fontWeight: 'light'}}>
                          Learn about Kleros
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>

                  <Grid xs={4} height='100%' item>
                    <Card elevation={0} variation='outlined' style={{flexGrow: 1, backgroundColor: 'rgb(236, 237, 242)', border: '0px solid #eee', borderRadius: 15}}>
                      <CardContent style={{padding: 22, display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', }}>
                      <img src="/shield.png" style={{ margin: '20px 0px', width: '50px', height: '50px'}} />
                        
                        <div>
                        <Typography width='90%' fontWeight='300' fontSize={30} >
                            Dispute protection by Kleros
                        </Typography>


                        <Typography py={3} fontWeight='light' noWrap={false}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Aliquam eu justo et tortor tempus pulvinar.
                        </Typography>
                        </div>
                      </CardContent>

                      <CardActions>
                        <Button sx={{ color: 'rgba(102, 197, 107, .85)', fontWeight: 'light'}}>
                          Learn about Kleros
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                </Grid>
          </section>

          {/* Section 6 */}
          <section style={{ backgroundColor: '#fff' }} className={classes.centeredSection}>
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
                  boxShadow: '0px 6px 6px -3px #eee, 0px 10px 14px 1px #eee, 0px 4px 18px 3px #eee',
                  borderRadius: 2,
                  maxWidth: 600,
                }}
              >
                <CardActionArea
                  sx={{
                    padding: 2,
                    display: 'flex',
                    height: '100%',
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                  }}
                >
                  <CardMedia
                    component="img"
                    style={{ height: '100%', borderRadius: 5, width: 300 }}
                    image="https://picsum.photos/200"
                    alt="green iguana"
                  />
                  <CardContent
                    style={{
                      height: '100%',
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      flexDirection: 'column',
                    }}
                  >
                    <Typography gutterBottom variant="h5" component="div">
                      The case for a permissionless freelancing network
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
              <Card
                elevation={1}
                style={{ position: 'relative', width: '100%', height: '670px', margin: '15px 0px' }}
              >
                <div
                  className={classes.shadowyDiv}
                  style={{
                    padding: '5% 7%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    width: '100%',
                    height: '670px',
                  }}
                >
                  <Typography py={3} color="#fff" variant="h6" fontSize={40}>
                    The future of work relies on highly skilled individuals, not corporations.
                  </Typography>
                  <Button
                    size="large"
                    variant="outlined"
                    sx={{ color: '#fff', borderColor: '#eee' }}
                  >
                    Learn more
                  </Button>
                </div>
                <img src="/freelance.jpg" style={{ width: '100%', height: '100%' }} />
              </Card>
            </Grid>
          </section>

          <Footer />
        </main>
      </div>
    </ThemeProvider>
  );
}
