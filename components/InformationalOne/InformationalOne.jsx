import {
  Grid,
  Card,
  Typography,
} from '@mui/material'

import useStyles from './InformationalOneStyles'

const InformationalOne = () => {
  const classes = useStyles()
  return (
    <section className={classes.section}>
      <Grid
        spacing={3}
        container
        direction={{ xs: 'column', lg: 'row' }}
        alignItems="center"
        justifyContent="space-between"
      >
        <Grid
          container
          item
          xs={6}
          direction="column"
          alignItems="flex-start"
          justifyContent="space-between"
        >
          <Grid xs={12} md={12} lg={6} item className={classes.fullElement}>
            <Card elevation={0} className={classes.fullElement}>
              <img src="/girl.jpeg" className={classes.descriptionImage} />
            </Card>
          </Grid>

          <Grid
            style={{ display: 'flex', flexDirection: 'column' }}
            xs={12}
            md={12}
            lg={6}
            item
          >
            <Typography py={1} fontSize={16} color="rgba(102, 197, 107, .85)">
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
              Connect a wallet and instantly begin looking for work. Opportunity
              is permissionless so you don't have to worry about your
              geographical location or social class.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={6}
          direction="column"
          alignItems="flex-start"
          justifyContent="space-between"
        >
          <Grid xs={12} md={12} lg={6} item className={classes.fullElement}>
            <Card elevation={0} className={classes.fullElement}>
              <img src="/crosswalk.jpeg" className={classes.descriptionImage} />
            </Card>
          </Grid>

          <Grid xs={12} md={12} lg={6} item>
            <Typography py={1} fontSize={16} color="rgba(102, 197, 107, .85)">
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
              Find work amongst your peers on a global stage. No corporations or
              third parties involved so you keep most of your earnings.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </section>
  )
}

export default InformationalOne
