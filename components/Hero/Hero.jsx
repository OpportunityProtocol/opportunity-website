import { useState } from 'react'
import {
  Grid,
  Fade,
  Link,
  Paper,
  Box,
  IconButton,
  Button,
  Card,
  Typography,
} from '@mui/material'
import useStyles from './HeroStyles'
import MarketDisplay from '../MarketDisplay/MarketDisplay'
import Marquee from 'react-fast-marquee'
import useInterval from 'react-useinterval'
import AppBar from '../AppBar/AppBar'
import { ArrowRight } from '@mui/icons-material'

const MARKETS = [
  {
    market: 'Development & IT',
    related: ['Computer Support', 'Software Developer', 'Cybersecurity', 'Computer Research Scientist']
  },
  {
    market: 'Sales & Marketing',
    related: ['Social Media Marketer']
  },
  {
    market: 'Writing & Translation',
    related: ['Content Translator', 'Cross Language Translator']
  },
  {
    market: 'Admin & Customer Support',
    related: ['Human Resource Manager', 'Customer Support Caller']
  },
  {
    market: 'Finance & Accounting',
    related: ['Accountant', 'Auditor']
  },
  {
    market: 'Design & Creative',
    related: ['Graphic Designer', 'UI/UX Designer', 'Photographer', 'Film & Video Editor']
  },
  {
    market: 'Engineering & Architecture',
    related: ['Architect', 'AutoCAD Drafter']
  },
  {
    market: 'Deploy your own',
    related: ['Ride Sharing', 'Food Delivery']
  },
]

const INTRO_TEXT_TRANSLATIONS = [
  {
    first: 'Bringing the gig economy to the blockchain',
    body:
      'The Opportunity protocol envisions a future where every human has the ability to work regardless of geographical location or social status.',
  },
  {
    first: 'Llevando la economia de conciertos a la cadena de bloques',
    body:
      'El Protocolo Opportunity prevé un futuro en el que cada ser humano tenga la capacidad de trabajar independientemente de su ubicación geográfica o estatus social.',
  },
  {
    first: '将零工经济带入区块链',
    body:
      '機遇設想了一個未來，每個人都有能力工作，無論地理位置或社會地位如何。 沒有表格或不必要的文件。 連接錢包並開始工作。 就是這麼簡單。',
  },
  {
    first: 'Apporter la gig economy à la blockchain',
    body:
      "Opportunity envisage un avenir où chaque être humain a la capacité de travailler indépendamment de sa situation géographique ou de son statut social. Pas de formulaires ou de documentation inutile. Connectez un portefeuille et travaillez. C'est aussi simple que ça.",
  },
]

const Hero = () => {
  const classes = useStyles()
  const [currIntroTextIndex, setCurrIntorTextIndex] = useState(0)
  const [firstText, setFirstText] = useState(
    INTRO_TEXT_TRANSLATIONS[currIntroTextIndex].first,
  )
  const [bodyText, setBodyText] = useState(
    INTRO_TEXT_TRANSLATIONS[currIntroTextIndex].body,
  )

  const [fade, toggleFade] = useState(false)
  const onToggleFade = () => toggleFade((prevState) => !prevState)

  useInterval(
    () => {
      onToggleFade()
    },
    3200,
    5,
  )

  return (
    <section className={classes.introductionSection}>
      <AppBar />

      <Grid
        className={classes.introductionSectionGrid}
        container
        direction="columb"
        alignItems="center"
        justifyContent="space-evenly"
      >
        <Grid flexGrow={1} container item direction='row' alignItems="center" justifyContent="space-evenly">
          <Grid className={classes.textContainer} item flexGrow={1}>
          <Typography py={1} fontSize={40} fontWeight='bold' variant='h6' >
            Permissionless and trustless
          </Typography>
          <Typography py={1} noWrap fontSize={40} fontWeight='bold' variant='h6' >
            Labor Markets, <Typography component='span' fontSize={40} fontWeight='light'> Africa </Typography> 
          </Typography>


          <Box my={3} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}}>
          <Button  endIcon={<ArrowRight />} color='secondary' variant='contained' disableElevation sx={{mx: 1, p: 2, borderRadius: 20}}>
              Read the whitepaper
            </Button>

            <Button variant='text' sx={{fontSize: 15, mx: 1 }}>
              Learn more
            </Button>
          </Box>


          </Grid>

          <Grid item flexGrow={1} py={1} alignSelf='center' sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}>
          <img src='/lighter-graph.png' />
          </Grid>
        </Grid>

        <Grid flexGrow={1} container item sx={{width: '100%' }}>
        <div style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start'}}>
              <Typography fontSize={20} >
                Powered by
              </Typography>
            </div>

        <Grid container item justifyContent='space-evenly'  alignItems='center' direction='row' flexGrow={1} my={1} width="100%">
          <Grid item xs={4}>
          <Box component={Card} elevation={0} sx={{padding: 2, mx: 1, height: 210, borderRadius: 4}} variant='outlined'>
              Hello
            </Box>
          </Grid>

          <Grid item xs={4}>
          <Box component={Card} elevation={0} sx={{padding: 2, mx: 1, height: 210, borderRadius: 4}} variant='outlined'>
              Hello
            </Box>
          </Grid>

          <Grid item xs={4}>
          <Box component={Card} elevation={0} sx={{padding: 2, mx: 1, height: 210, borderRadius: 4}} variant='outlined'>
              Hello
            </Box>
          </Grid>
        </Grid>
        </Grid>
      </Grid>
    </section>
  )
}

/*

  <Marquee>
            {MARKETS.map(market => {
              return <MarketDisplay marketTitle={market.market} related={market.related} />
            })}
          </Marquee>

          */
export default Hero
