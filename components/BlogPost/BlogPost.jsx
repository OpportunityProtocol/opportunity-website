import {
    Grid,
    Card,
    CardActionArea,
    CardContent,
    Button,
    CardMedia,
    Typography,
    Stack,
    Avatar,
} from '@mui/material'

import useStyles  from '../../styles/styles'

const BlogPost = () => {
    const classes = useStyles()
    return (
    <section style={{ backgroundColor: '#fff' }} className={classes.centeredSection}>
    <div>
      <Typography
        color="rgba(33, 33, 33, .85)"
        py={2}
        textAlign="center"
        fontWeight="normal"
        fontSize={30}
      >
        Featured Blog Post
      </Typography>
      <Typography
        color="rgba(33, 33, 33, .85)"
        textAlign="center"
        fontWeight="light"
        fontSize={25}
      >
        Creating a secure protocol for permissionless work
      </Typography>
    </div>

    <Grid
      my={6}
      container
      direction="row"
      alignItems="center"
      justifyContent="space-evenly"
    >
      <Card
        elevation={10}
        sx={{
          boxShadow: '0px 6px 6px -3px #eee, 0px 10px 14px 1px #eee, 0px 4px 18px 3px #eee',
          borderRadius: 2,
          maxWidth: 600,
        }}
      >
        <CardActionArea
          sx={{
            padding: 2,
            display: 'flex',
            height: '100%',
            flexDirection: 'row',
            alignItems: 'flex-start',
          }}
        >
          <CardMedia
            component="img"
            style={{ height: '100%', borderRadius: 5, width: '100%' }}
            image="https://picsum.photos/200"
            alt="green iguana"
          />
          <CardContent
            style={{
              height: '100%',
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              flexDirection: 'column',
            }}
          >
            <Typography gutterBottom variant="h5" component="div">
              The case for a permissionless labor market protocol
            </Typography>
            <Stack direction="row" gap={2} alignItems="center">
              <Avatar sx={{ height: 35, width: 35 }}>EH</Avatar>

              <div>
                <Typography fontSize={12} fontWeight="medium">
                  Elijah Hampton
                </Typography>
                <Typography fontSize={10} color="#aaa">
                  Coming soon
                </Typography>
              </div>
            </Stack>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  </section>
    )
}

export default BlogPost