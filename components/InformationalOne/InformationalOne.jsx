
import { Grid, Card, CardContent, Typography, Button } from '@mui/material'
import { ArrowRight } from '@mui/icons-material'
import useStyles from './InformationalOneStyles'

const InformationalOne = () => {
  const classes = useStyles()
  return (
    <section className={classes.section}>
      <Grid sx={{ p: 5, background: 'transparent' }} component={Card} elevation={0} container flexWrap='nowrap' justifyContent='space-between' direction='row' alignItems='flex-start'>

      <Grid item>
      <Typography
        color="rgba(33, 33, 33, .85)"
        fontWeight="medium"
        fontSize={25}
        px={2}
        sx={{
          width: '80%',
        }}
      >
        What is GigEarth?
      </Typography>
      <Typography
        color="rgba(33, 33, 33, .85)"
        fontWeight="medium"
        fontSize={16}
        px={2}
        py={1}
        sx={{
          width: '80%',
        }}
      >
        A decentralized application serving as a gateway to unstoppable labor markets.
      </Typography>
      <Typography
        color="rgba(33, 33, 33, .85)"
        fontWeight="medium"
        fontSize={16}
        px={2}
        py={1}
        sx={{
          width: '80%',
        }}
      >
        Talent from anywhere in the world can engage in any digital based labor market.
      </Typography>
      <Button sx={{m: 2, borderRadius: 20, fontWeight: 'normal',}} size='large'  color='secondary' variant='contained' endIcon={<ArrowRight />}>
        Take a peak
      </Button>
      </Grid>   

            <Grid item>
      <Card
        sx={{
          width: 470,
          height: 320,
          borderRadius: 2, 
        }}
        elevation={10}
        className={classes.card}
      >
        <img src="gigearth.png" className={classes.img} />
      </Card>
      </Grid>


       </Grid>

        
    </section>
  )
}

export default InformationalOne
