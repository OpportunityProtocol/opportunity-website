import { useState } from 'react'
import {
  Grid,
  Fade,
  Paper,
  IconButton,
  Typography,
  Box
} from '@mui/material'
import useStyles from './AppBarStyles'
import Link from 'next/link'
import LongMenu from '../LongMenu/LongMenu'
const AppBar = () => {
    const classes = useStyles()
    return (
<Paper
        className={classes.appbarPaper}
        square={true}
        classes={{ outlined: classes.appbar }}
        elevation={0}
        variant="outlined"
      >
        <Box sx={{ display: { xs: 'block', md: 'none'  }, width: '100%', justifyContent: 'flex-end' }}>
          <LongMenu />
        </Box>

        <Box
          sx={{ display: { xs: 'none', md: 'flex'  } }}
          component={Grid}
          container
          direction="row"
          spacing={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item className={classes.flexedGridItem}>
            <img src='/logo2.png' style={{width: 40, height: 40 }} />
            <Link href='/'>
            <Typography className={classes.link} variant="h6" mx={2} color='#fff'>
              Opportunity
            </Typography>
            </Link>
          </Grid>

          <Grid item className={classes.flexedGridItem}>
              <Link href='https://humble-penalty-bba.notion.site/Opportunity-de5af9fb928f47288055c6c4ac2064ec'>
              <Typography className={classes.link} mx={2} variant='button'  color='#fff'>
                Whitepaper V1
            </Typography>
              </Link>

              <Link href='https://github.com/OpportunityProtocol/opportunity-core'>
              <Typography className={classes.link} mx={2} variant='button' color='#fff'>
                Github
            </Typography>
              </Link>

              <Link href='https://discord.gg/pBRVWTQPvS'>
              <Typography className={classes.link} mx={2} variant='button' color='#fff'>
                Discord
            </Typography>
              </Link>

              <Link href='/faq'>
              <Typography className={classes.link} mx={2} variant='button' color='#fff'>
                FAQ
            </Typography>
              </Link>

          </Grid>
        </Box>
      </Paper>
)
}

export default AppBar