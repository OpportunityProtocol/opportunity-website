import React from 'react'
import {
    Paper,
    Card as MuiCard,
    CardContent,
    CardActions,
    Typography,
    Button
} from '@mui/material'
import useStyles from './MarketDisplayStyles'
import styled from 'styled-components'

const Card = styled(MuiCard)`
  box-shadow: none;
  padding: 20px 15px;
  margin: 0px 10px;
  width: 300px;
  height: auto;
  display: inline-block;
}`

export default function MarketDisplay({ marketTitle }) {
    const classes = useStyles()

    return (
        <Card variant='outlined' elevation={0}>
            <CardContent>
           
                <Typography fontWeight='bold' fontSize={15}>
                    Web Development
                </Typography>
                <Typography noWrap={false} className={classes.wrapText} align='center' variant='body2' fontWeight='light' fontSize={12} >
                
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at vulputate neque, eu pretium magna. Aliquam at lectus sapien. Aenean gravida, magna eget 
           
                   
                </Typography>
        
            </CardContent>
            <CardActions>
            <Button variant='text' color='secondary'>
                Coming soon
            </Button>
            </CardActions>
        </Card>
    )
}