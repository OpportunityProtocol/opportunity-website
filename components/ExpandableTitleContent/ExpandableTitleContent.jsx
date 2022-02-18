import React, { useState } from 'react'
import {
  Paper,
  Card,
  CardContent,
  CardActions,
  Typography,
  Grid,
  IconButton,
  Button,
  CardHeader,
  CardActionArea,
} from '@mui/material'

import {
    KeyboardArrowUp,
    KeyboardArrowDown
} from '@mui/icons-material'

import AnimateHeight from 'react-animate-height';

import useStyles from './ExpandableTitleContentStyles'

export default function ExpandableTitleContent({
  title,
  description,
}) {
  const [focused, setFocused] = useState(false)
  const classes = useStyles()

  return (
    <Card  className={classes.card} variant="outlined" elevation={0}>
        <CardActionArea className={classes.actionArea} onClick={() => setFocused(prevState => !prevState)}>
        
    <Grid container direction='row' alignItems='center' justifyContent='space-between'>
        <Grid item>
        <Typography p={1} fontWeight='medium' fontSize={15} color={focused ? '#66C56B' : '#212121'}>{title}</Typography>
        </Grid>

        <Grid item display={{ xs: 'none', md: 'flex'}}>
            <IconButton>
                {focused ? <KeyboardArrowUp color='#212121'  /> : <KeyboardArrowDown color='#212121' />}
            </IconButton>
        </Grid>
    </Grid>
      <AnimateHeight
      style={{ width: '100%'}}
  duration={ 800 }
  height={ focused === true ? 'auto' : 0 }
>
        <Typography
            pt={1}
            px={1}
          paragraph
          sx={{ lineClamp: 2 }}
          fontWeight="light"
          fontSize={14}
          color="rgba(33, 33, 33, 0.85)"
        >
          {description}
        </Typography>
        </AnimateHeight>
        </CardActionArea>
    </Card>
  )
}
