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

export default function MarketDisplay({ marketTitle, related }) {
    const classes = useStyles()

    return (
        <Card className={classes.card} variant='outlined' elevation={0}>
            <CardContent>
           
                <Typography fontWeight='semibold' fontSize={15}>
                    {marketTitle}
                </Typography>

                <Typography sx={{ lineClamp: 2 }} fontWeight='light' fontSize={12} color='rgba(33, 33, 33, 0.85)'>
                    {related.map((related, idx, arr) => {
                        return idx === arr.length - 1 ?  <span style={{ color: 'rgba(102, 197, 107)',}}>{related}</span> :  <span  style={{ color: 'rgba(102, 197, 107)',}}>{related},{" "}</span>
                    })}
                </Typography>
        
            </CardContent>
        
        </Card>
    )
}