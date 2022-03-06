import { Grid, Card, Typography, Button } from '@mui/material'

import useStyles from './InformationalOneStyles'

const InformationalOne = () => {
  const classes = useStyles()
  return (
    <section className={classes.section}>
          <Card
            sx={{
              height: {
                xs: 280,
                sm: 420,
                md: 550,
                lg: 800
              }
            }}
            elevation={4}
            style={{
              width: '100%',
              boxShadow:
                '0px 2px 4px -1px #eee, 0px 4px 5px 0px #eee, 0px 1px 10px 0px #eee',
            }}
          >
            <img src="gigearth.png" style={{ width: '100%', height: '100%' }} />
          </Card>
          <Typography
            py={3}
            color="rgba(33, 33, 33, .85)"
            fontWeight="medium"
            fontSize={18}
            sx={{
              width: {
                xs: '100%',
                md: '80%'
              }
            }}
          >
            GigEarth is a decentralized application built to provide access to
            labor markets regardless of geographical location or social class.
          </Typography>
    </section>
  )
}

export default InformationalOne
