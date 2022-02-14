import React, { useState, useEffect, useRef } from 'react'
import { Grid, Card, Typography, Fade, IconButton } from '@mui/material'

import useStyles from './LearnStyles'
import { CallMadeSharp } from '@mui/icons-material'
import { TransitionGroup } from 'react-transition-group'
import useOnScreen from '../../hooks/useOnScreen'

const COMPONENTS = [
  {
    title: 'Users',
    description: 'Keep your identity and reputation across all markets.',
  },
  {
    title: 'Markets',
    description:
      'Participate in any market on a global scale or deploy your own',
  },
  {
    title: 'Relationships',
    description:
      'Employers and workers connect on Opportunity to faciliate fair and transparent contracts.',
  },
  {
    title: 'Escrows',
    description:
      'Secure payouts between employer and workers with customizable escrows.',
  },
  {
    title: 'Reputation',
    description: 'Record good and bad behavior to signal untrustworthy users.',
  },
]

const Learn = () => {
  const classes = useStyles()
  const [cardsAnimated, setCardsAnimated] = useState(false);
  const sectionRef = useRef(null);
  const sectionIsVisible = useOnScreen(sectionRef);

  useEffect(() => {
    if (sectionIsVisible == true && cardsAnimated === false) {
        setCardsAnimated(true);
    }
  }, [sectionIsVisible]);

  return (
    <section 
    ref={sectionRef} 
    style={{ backgroundColor: '#fbfbfd' }} 
    className={classes.section}>
      <Grid
        p={3}
        style={{
          backgroundColor: 'transparent',
          borderRadius: 8,
          border: '1px solid #eee',
        }}
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid xs={12} md={12} lg={6} item>
          <Typography variant="h4" color='#212121'>Learn the components</Typography>
          <Typography
            py={3}
            color="rgba(33, 33, 33, 0.85)"
            fontWeight="regular"
            width="90%"
          >
            The simplest way to work without worrying about KYC, a bank account
            or unnecessary documentation with three simple components.
          </Typography>

            {COMPONENTS.map(({ title, description }, idx, arr)=> {
              return (
                <Fade in={cardsAnimated} timeout={1800 * (idx + 1)}>
                  <Card
                  key={title}
                    classes={{
                      root: classes.learnCard,
                    }}
                    elevation={0}
                    variant="outlined"
                  >
                    <Typography
                      fontSize={18}
                      variant="h6"
                      color="rgb(33, 33, 33, .85)"
                    >
                      {title}
                    </Typography>
                    <Typography fontSize={14}>
                      {description}
                    </Typography>

                    <CallMadeSharp
                      style={{
                        padding: 10,
                        position: 'absolute',
                        top: 0,
                        right: 0,
                      }}
                      sx={{ color: '#66C56B' }}
                    />
                  </Card>
                </Fade>
              )
            })}
    
        </Grid>

        <Grid
          xs={12}
          sm={12}
          md={12}
          lg={6}
          item
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
          }}
        >
          <img
            src="/world.png"
            style={{ opacity: 0.4, width: '80%', height: 250 }}
          />
        </Grid>
      </Grid>
    </section>
  )
}

export default Learn
