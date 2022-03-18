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
            className={classes.card}
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
            sx={{
              boxShadow:
            '0px 2px 4px -1px #eee, 0px 4px 5px 0px #eee, 0px 1px 10px 0px #eee',
              paddingTop: 2,
              height: 'auto',
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
