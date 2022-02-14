import React from 'react'
import {
    Paper,
    Card,
    CardContent,
    CardActions,
    Typography,
    Button
} from '@mui/material'
import useStyles from './MarketDisplayStyles'
import styled from 'styled-components'

export default function MarketDisplay({ marketTitle }) {
    const classes = useStyles()

    return (
        <Card sx={{  margin: '0px 15px',   boxShadow: 'none',  width: '300px', }} variant='outlined' elevation={0}>
            <CardContent>
           
                <Typography fontWeight='semibold' fontSize={15}>
                    {marketTitle}
                </Typography>

                <Typography sx={{ lineClamp: 2 }} fontWeight='light' fontSize={12} color='rgba(33, 33, 33, 0.85)'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at vulputate neque, eu.
                </Typography>
        
            </CardContent>
        
        </Card>
    )
}