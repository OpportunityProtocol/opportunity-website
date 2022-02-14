import {
  Grid,
  Fade,
  Paper,
  IconButton,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import { FaGithub, FaDiscord } from 'react-icons/fa'
import useStyles from './HeroStyles'
import MarketDisplay from '../MarketDisplay/MarketDisplay'
import Marquee from 'react-fast-marquee'
import useInterval from 'react-useinterval'

const MARKETS = [
    {
        market: 'Development & IT',
        related: ['Computer Support', 'Software Developer', 'Cybersecurity', 'Computer Research Scientist']
    },
    {
        market: 'Sales & Marketing',
        related: ['Social Media Marketer' ]
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
        market:  'Design & Creative',
        related: ['Graphic Designer', 'UI/UX Designer', 'Photographer', 'Film & Video Editor']
    },
    {
        market: 'Engineering & Architecture',
        related: ['Architect', 'AutoCAD Drafter' ]
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
      <Paper
        className={classes.appbarPaper}
        square={true}
        classes={{ outlined: classes.appbar }}
        elevation={0}
        variant="outlined"
      >
        <Grid
          container
          direction="row"
          spacing={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item className={classes.flexedGridItem}>
            <Typography variant="h6" mx={2}>
              Opportunity
            </Typography>
          </Grid>

          <Grid item className={classes.flexedGridItem}>
            <IconButton mx={2}>
              <FaGithub size={28} color='#fff' onClick={() => window.location.replace('https://github.com/OpportunityProtocol/opportunity-core')} />
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
        <Grid flexGrow={1} container item alignItems="center" justify="center">
          <Fade
            in={fade}
            timeout={200}
            onExited={() => {
              if (currIntroTextIndex == INTRO_TEXT_TRANSLATIONS.length - 1) {
                setCurrIntorTextIndex(0)
              } else {
                setCurrIntorTextIndex((prevState) => prevState + 1)
              }

              setFirstText(INTRO_TEXT_TRANSLATIONS[currIntroTextIndex].first)
              setBodyText(INTRO_TEXT_TRANSLATIONS[currIntroTextIndex].body)
            }}
          >
            <div className={classes.introductionTextContainer}>
              <Typography
                py={2}
                fontSize={40}
                color="rgba(33, 33, 33, .85)"
                fontWeight="medium"
                width="80%"
              >
                {firstText}
              </Typography>
              <Typography
                width="80%"
                variant="body1"
                fontSize={15}
                color="#8f8f8f"
              >
                {bodyText}
              </Typography>
            </div>
          </Fade>
        </Grid>

        <Grid item my={6} width="100%">
          <Marquee>
            {MARKETS.map(market => {
              return <MarketDisplay marketTitle={market.market} related={market.related} />
            })}
          </Marquee>
        </Grid>
      </Grid>
    </section>
  )
}

export default Hero
