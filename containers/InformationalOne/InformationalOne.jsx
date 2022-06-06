import { Grid, Card, Box, Typography, Container, darken } from '@mui/material';
import useStyles from './InformationalOneStyles';
import Masonry from '@mui/lab/Masonry';
import { pictures } from './constant'

const InformationalOne = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Container
        maxWidth="xl"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Grid
          className={classes.grid}
          component={Card}
          elevation={0}
          container
          flexWrap="nowrap"
          justifyContent="center"
          direction="row"
          alignItems="center"
        >
          <Grid item sx={{ py: 10 }}>
            <Typography color="white" fontWeight="bold" fontSize={30} textAlign="center">
            A permissionless way to earn and work for everyone
            </Typography>
            <Typography color="white" fontWeight="light" fontSize={20} py={1} textAlign="center">
            LensTalent is a decentralized freelancing protocol so anyone in the world can access it regardless of their geographical location.
            </Typography>
          </Grid>
        </Grid>

        <Box sx={{ width: '100%' }}>
          <FreelancerMasonry />
        </Box>
      </Container>
    </Box>
  );
};

function FreelancerMasonry() {
  const classes = useStyles();
  return (
    <Box sx={{ width: '100%' }}>
      <Masonry sx={{ width: '100%' }} columns={7} spacing={2}>
        {pictures.map((item, index) => (
          <div key={index}>
            <img
              src={`${item.img}?w=162&auto=format`}
              srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              className={classes.masonryImg}
            />
          </div>
        ))}
      </Masonry>
    </Box>
  );
}

export default InformationalOne;
