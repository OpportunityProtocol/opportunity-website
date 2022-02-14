import {
    Grid,
    Card,
    Typography,
    IconButton
} from '@mui/material'

import useStyles  from './LearnStyles'
import { CallMadeSharp } from '@mui/icons-material';

const Learn = () => {
    const classes = useStyles()
    return (
        <section style={{ backgroundColor: '#fbfbfd' }} className={classes.section}>
        <Grid
          p={3}
          style={{ backgroundColor: 'transparent', borderRadius: 8, border: '1px solid #eee' }}
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid xs={12} md={12} lg={6} item>
            <Typography variant="h4">Learn the components</Typography>
            <Typography py={3} color="rgba(33, 33, 33, 0.85)" fontWeight="regular" width="90%">
              The simplest way to work without worrying about KYC, a bank account or unnecessary
              documentation with three simple components.
            </Typography>

            <Card
              classes={{
                root: classes.learnCard,
              }}
              elevation={0}
              variant="outlined"
            >
              <Typography fontSize={18} variant="h6" color="rgb(33, 33, 33, .85)">
                Users
              </Typography>
              <Typography fontSize={14}>
                Keep your identity and reputation across all markets.
              </Typography>

              <IconButton style={{ padding: 10, position: 'absolute', top: 0, right: 0 }}>
                <CallMadeSharp sx={{ color: '#66C56B' }} />
              </IconButton>
            </Card>

            <Card
              classes={{
                root: classes.learnCard,
              }}
              elevation={0}
              variant="outlined"
            >
              <Typography fontSize={18} variant="h6" color="rgb(33, 33, 33, .85)">
                Markets
              </Typography>
              <Typography fontSize={14}>
                Participate in any market on a global scale or deploy your own
              </Typography>

              <IconButton style={{ padding: 10, position: 'absolute', top: 0, right: 0 }}>
                <CallMadeSharp sx={{ color: '#66C56B' }} />
              </IconButton>
            </Card>

            <Card
              classes={{
                root: classes.learnCard,
              }}
              elevation={0}
              variant="outlined"
            >
              <Typography fontSize={18} variant="h6" color="rgb(33, 33, 33, .85)">
                Relationships
              </Typography>
              <Typography fontSize={14}>
                Employers and workers connect on Opportunity to faciliate fair and transparent
                contracts.
              </Typography>

              <IconButton style={{ padding: 10, position: 'absolute', top: 0, right: 0 }}>
                <CallMadeSharp sx={{ color: '#66C56B' }} />
              </IconButton>
            </Card>
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
            <img src="/world.png" style={{ opacity: 0.4, width: '80%', height: 250 }} />
          </Grid>
        </Grid>
      </section>
    )
}

export default Learn