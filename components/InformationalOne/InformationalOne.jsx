import {
  Grid,
  Card,
  Box,
  Typography,
} from '@mui/material'
import useStyles from './InformationalOneStyles'
import Masonry from '@mui/lab/Masonry'

const InformationalOne = () => {
  const classes = useStyles()
  return (
    <section className={classes.section}>
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
        <Grid item sx={{ py: 5 }}>
          <Typography
            color="rgba(33, 33, 33, .85)"
            fontWeight="bold"
            fontSize={30}
            textAlign="center"
          >
            A decentralized protocol for permissionless work
          </Typography>
          <Typography
            color="rgba(33, 33, 33, .85)"
            fontWeight="light"
            fontSize={20}
            py={1}
            textAlign="center"
          >
            Talent from anywhere in the world can participant regardless of
            geographical location or social class
          </Typography>
        </Grid>
      </Grid>

      <Box sx={{ width: '100%' }}>
        <FreelancerMasonry />
      </Box>
    </section>
  )
}

function FreelancerMasonry() {
  const classes = useStyles()
  return (
    <Box sx={{ width: '100%', minHeight: 829 }}>
      <Masonry sx={{ width: '100%' }} columns={7} spacing={2}>
        {itemData.map((item, index) => (
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
  )
}

const itemData = [
  {
    img: '/girl.jpeg',
    title: 'Fern',
  },
  {
    img: 'freelance10.jpeg',
    title: 'Snacks',
  },
  {
    img: 'freelance2.jpeg',
    title: 'Mushrooms',
  },
  {
    img: 'freelance3.jpeg',
    title: 'Tower',
  },
  {
    img: 'freelance4.jpeg',
    title: 'Sea star',
  },
  {
    img: 'freelance5.jpeg',
    title: 'Honey',
  },
  {
    img: 'freelance6.jpeg',
    title: 'Basketball',
  },
  {
    img: 'freelance7.jpeg',
    title: 'Breakfast',
  },
  {
    img: 'freelance8.jpeg',
    title: 'Tree',
  },
  {
    img: 'freelance9.jpeg',
    title: 'Burger',
  },
  {
    img: 'freelance1.jpeg',
    title: 'Camera',
  },
  {
    img: 'freelance16.jpeg',
    title: 'Coffee',
  },
  {
    img: 'freelance12.jpeg',
    title: 'Camping Car',
  },
  {
    img: 'freelance13.jpeg',
    title: 'Hats',
  },
  {
    img: 'freelance14.jpeg',
    title: 'Tomato basil',
  },
  {
    img: 'freelance15.jpeg',
    title: 'Mountain',
  },
  {
    img: 'freelance11.jpeg',
    title: 'Bike',
  },
]
export default InformationalOne
