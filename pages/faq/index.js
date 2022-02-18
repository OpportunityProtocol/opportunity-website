import React from 'react'
import { Box, Typography } from '@mui/material'

import useStyles from "./styles"
import ExpandableTitleContent from '../../components/ExpandableTitleContent/ExpandableTitleContent'

import faq from '../../json/faq.json'
import AppBar from '../../components/AppBar/AppBar'
const FrequentlyAskedQuestions = () => {
    const classes = useStyles()

    return (
        <>
        <AppBar />
        <Box className={classes.box}>
            <Typography py={5}  variant='h4' fontWeight='light' color='#212121'>
                Frequently Asked Questions
            </Typography>
            {
                faq.faq.map((entry, idx) => {
                    return  <ExpandableTitleContent key={idx} title={entry.title} description={entry.description} />
                })
            }

            <Box mt={8} className={classes.bottomContainer}>
            <Typography py={3} variant='h4' fontWeight='light' color='#212121'>
                Still have questions?
            </Typography>
            <Typography paragraph fontSize={15} py={1} fontWeight='medium' color='rgb(186, 185, 195)'>
                If you still have more questions you can join our discord server <Typography component='span' color='#66C56B'>here</Typography>. Hop in and join the discussion.
            </Typography>
            </Box>
        </Box>
        </>
    )
}

export default FrequentlyAskedQuestions