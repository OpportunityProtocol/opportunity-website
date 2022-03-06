import React, { useState, useEffect, useRef } from 'react'
import { Grid, Card, Typography, Box, Fade, IconButton } from '@mui/material'

import useStyles from './LearnStyles'
import { CallMadeSharp } from '@mui/icons-material'
import { TransitionGroup } from 'react-transition-group'
import useOnScreen from '../../hooks/useOnScreen'
import { alpha } from '@mui/material/styles'
import Marquee from 'react-fast-marquee'
import MarketDisplay from '../MarketDisplay/MarketDisplay'

import { FaUserFriends, FaFileContract } from 'react-icons/fa'
import { MdWork } from 'react-icons/md'
import { GoGlobe } from 'react-icons/go'
import { AiFillWechat } from 'react-icons/ai'
import { VscWorkspaceTrusted } from 'react-icons/vsc'

const MARKETS = [
  {
    market: 'Development & IT',
    related: [
      'Computer Support',
      'Software Developer',
      'Cybersecurity',
      'Computer Research Scientist',
    ],
  },
  {
    market: 'Sales & Marketing',
    related: ['Social Media Marketer'],
  },
  {
    market: 'Writing & Translation',
    related: ['Content Translator', 'Cross Language Translator'],
  },
  {
    market: 'Admin & Customer Support',
    related: ['Human Resource Manager', 'Customer Support Caller'],
  },
  {
    market: 'Finance & Accounting',
    related: ['Accountant', 'Auditor'],
  },
  {
    market: 'Design & Creative',
    related: [
      'Graphic Designer',
      'UI/UX Designer',
      'Photographer',
      'Film & Video Editor',
    ],
  },
  {
    market: 'Engineering & Architecture',
    related: ['Architect', 'AutoCAD Drafter'],
  },
  {
    market: 'Deploy your own',
    related: ['Ride Sharing', 'Food Delivery'],
  },
]

const COMPONENTS = [
  {
    title: 'Users',
    description:
      'Maintain identity across all markets regardless of being an employer or worker',
  },
  {
    title: 'Markets',
    description:
      'Participate in any market regardless of geographical location or social class',
  },
  {
    title: 'Relationships',
    description:
      'Employers and workers connect on GigEarth to faciliate fair and transparent contracts',
  },
  {
    title: 'Escrows',
    description: 'Secure and trustless payouts between employer and workers',
  },
  {
    title: 'Reviews',
    description:
      'Submit or read reviews for all employers and workers across the network in any market',
  },
  {
    title: 'Trust',
    description:
      'Earn trust from your peers and increase your trust across markets',
  },
]

const renderIcon = (component) => {
  switch (component) {
    case 'Users':
      return <FaUserFriends fontSize='large' color="#42c976" />
    case 'Markets':
      return <MdWork fontSize='large' color="#42c976" />
    case 'Relationships':
      return <GoGlobe fontSize='large' color="#42c976" />
    case 'Escrows':
      return <FaFileContract fontSize='large' color="#42c976" />
    case 'Reviews':
      return <AiFillWechat fontSize='large' color="#42c976" />
    case 'Trust':
      return <VscWorkspaceTrusted fontSize='large' color="#42c976" />
    default:
  }
}

const Learn = () => {
  const classes = useStyles()
  const [cardsAnimated, setCardsAnimated] = useState(false)
  const sectionRef = useRef(null)
  const sectionIsVisible = useOnScreen(sectionRef)

  useEffect(() => {
    if (sectionIsVisible == true && cardsAnimated === false) {
      setCardsAnimated(true)
    }
  }, [sectionIsVisible])

  return (
    <React.Fragment>
      <section ref={sectionRef} className={classes.section}>
        <Typography variant="h4" color="rgba(33, 33, 33, .85)">
          Learn the components
        </Typography>
        <Typography
          py={3}
          color="rgba(33, 33, 33, 0.85)"
          fontWeight="regular"
          width="90%"
        >
          GigEarth uses a number of components to ensure trustless markets.
        </Typography>
        <Grid container spacing={4} direction="row" alignItems="center">
          {COMPONENTS.map(({ title, description }, idx, arr) => {
            return (
              <Grid item sm={12} md={6} lg={4}>
                <Fade in={cardsAnimated} timeout={1800 * (idx + 1)}>
                  <Card
                    key={title}
                    classes={{
                      root: classes.learnCard,
                    }}
                    elevation={5}
                    variant="elevation"
                    sx={{
                      boxShadow:
                        '0px 2px 4px -1px #eee, 0px 4px 5px 0px #eee, 0px 1px 10px 0px #eee',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      {renderIcon(title)}
                      <Typography
                        fontSize={18}
                        px={1}
                        variant="h6"
                        color="rgb(33, 33, 33, .85)"
                      >
                        {title}
                      </Typography>
                    </Box>
                    <Typography fontSize={14}>{description}</Typography>
                  </Card>
                </Fade>
              </Grid>
            )
          })}
        </Grid>
      </section>

      <Box sx={{ py: 5 }}>
        <Marquee>
          {MARKETS.map((market) => {
            return (
              <MarketDisplay
                marketTitle={market.market}
                related={market.related}
              />
            )
          })}
        </Marquee>
      </Box>
    </React.Fragment>
  )
}

export default Learn
