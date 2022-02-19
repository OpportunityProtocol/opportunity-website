import {
  Grid,
  Card,
  Typography,
  Button
} from '@mui/material'

import Link from 'next/link'

import useStyles from './InformationalOneStyles'

const InformationalOne = () => {
  const classes = useStyles()
  return (
    <>

<section style={{
        background: 'rgb(255,255,255)',
        background:
          'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(250,250,250,1) 50%, rgba(251,251,253,1) 100%)',
      }} className={[classes.section, { display: 'flex', flexDirection: 'column', alignItems: 'center'}]}>

      <Card  elevation={0} className={classes.primarySection}>
        <Grid container direction='column' alignItems='center' justifyContent='space-evenly'>
        <Grid item xs={6} my={3} className={classes.graphImgGridContainer}>
            <img src='/lighter-graph.png' />
          </Grid>
          
          <Grid item xs={6} className={classes.informationTextGridContainer}>
          <Typography
              py={3}
              fontSize={25}
              fontWeight="medium"
              color="rgba(33, 33, 33, 0.85)"

              textAlign='center'
            >
              Opportunity Protocol
            </Typography>
            <Typography fontSize={20} width='80%'  textAlign='center' fontWeight='light' color="rgba(33, 33, 33, 0.85)">
              Create or participate in permission-less labor markets built on top of a behavioral graph of employers and workers.
            </Typography>
          </Grid>

        </Grid>
      </Card>
    </section>

    <section>
    <Grid my={5} width='100%' container direction='row' justifyContent='center' alignItems='center'>
        <Grid item m={5}>
          <Button disabled className={classes.button}  variant='outlined'>
            Read the Developer Docs
          </Button>
        </Grid>

        <Grid item m={5}>
        <Link href='https://humble-penalty-bba.notion.site/Opportunity-de5af9fb928f47288055c6c4ac2064ec'>
        <Button className={classes.button} variant='outlined'>
            Read the Whitepaper
          </Button>
              </Link>
         
        </Grid>
      </Grid>
    </section>

    <Link href='https://humble-penalty-bba.notion.site/Opportunity-de5af9fb928f47288055c6c4ac2064ec'>
              <Typography className={classes.link} mx={2} variant='button'  color='#fff'>
                Whitepaper V1
            </Typography>
              </Link>


    </>
  )
}

export default InformationalOne
