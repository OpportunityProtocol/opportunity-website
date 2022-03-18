import React from 'react'

import {
  Box,
  Card,
  Typography,
  Divider,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemText,
  ThemeProvider,
  alpha,
} from '@mui/material'
import useStyles from './PlatformComparisonStyles'

const OUR_FEATURES = [
  'Fees: 2%',
  'Maintain identity and trust across all markets',
  'Unlimited access regardless of geographical location',
  'No deplatformation risk',
  'Decentralized and unbiased dispute resolution',
]

const OTHER_PLATFORMS_FEATURES = [
  'Fees: Up to 20%',
  'Lose reputation switching platforms',
  'Unavailable in some countries/regions',
  'Risk of being deplatformed',
  'Centralized and biased dispute resolution',
]

function PlatformComparison() {
    const classes = useStyles()
  return (
    <Box className={classes.container}
    >
           <Typography
            sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}
            color="rgba(33, 33, 33, .85)"
            fontWeight="bold"
            fontSize={30}
            textAlign="center"
            py={5}
          >
            How does GigEarth compare?
          </Typography>
      <Box
        component={Grid}
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={2}
        container
        flexWrap='nowrap'
        sx={{ bgcolor: '#fbfbfd', display: { xs: 'none', sm: 'none', md: 'flex' } }}
      >
        <Grid item xs={4}>
          <Card
            elevation={15}
            classes={{
              root: classes.card
            }}
            sx={{
              border: '1px solid rgba(147,227,178,1)',
              height: 650, 
              boxShadow: '0px 8px 9px -5px #eee, 0px 15px 22px 2px #eee, 0px 6px 28px 5px #eee' 
            }}
          >
            <CardContent className={classes.cardContent}>
              <Box className={classes.cardTitleContainer}
              >
                <img
                  src="logo.svg"
                  style={{ alignSelf: 'center', width: 80, height: 80 }}
                />
              </Box>
              <List>
                {OUR_FEATURES.map((feature, idx, arr) => {
                  return (
                    <ListItem
                      key={feature}
                      divider={idx === arr.length - 1 ? false : true}
                      sx={{ height: 100 }}
                    >
                      <ListItemText
                        primary={feature}
                        primaryTypographyProps={{
                          textAlign: 'center',
                          color: idx === 2 ? 'green' : '#212121',
                        }}
                      />
                    </ListItem>
                  )
                })}
              </List>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Card
            elevation={5}
            classes={{
              root: classes.card
            }}
            sx={{
              boxShadow: '0px 6px 6px -3px #eee, 0px 10px 14px 1px #eee, 0px 4px 18px 3px #eee',
              height: 620,
            }}
          >
            <CardContent className={classes.cardContent}>
              <Box className={classes.cardTitleContainer}>
                <Typography
                  fontSize={16}
                  fontWeight="bold"
                  variant="h5"
                  color="rgba(33, 33, 33, .85)"
                  sx={{ textTransform: 'uppercase' }}
                >
                  OTHER PLATFORMS
                </Typography>
              </Box>
              <List>
                {OTHER_PLATFORMS_FEATURES.map((feature, idx, arr) => {
                  return (
                    <ListItem
                      key={feature}
                      divider={idx === arr.length - 1 ? false : true}
                      sx={{ height: 100 }}
                    >
                      <ListItemText
                        primary={feature}
                        primaryTypographyProps={{
                          textAlign: 'center',
                        }}
                      />
                    </ListItem>
                  )
                })}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Box>
    </Box>
  )
}

export default PlatformComparison
