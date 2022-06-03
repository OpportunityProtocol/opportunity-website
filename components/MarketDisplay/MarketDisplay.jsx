import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import useStyles from './MarketDisplayStyles';

export default function MarketDisplay({ marketTitle, related }) {
  const classes = useStyles();

  return (
    <Card className={classes.card} variant="outlined" elevation={0}>
      <CardContent>
        <Typography pt={2} fontWeight="bold" fontSize={15} height={30}>
          {marketTitle}
        </Typography>
        <Typography
          sx={{ lineClamp: 2 }}
          height={40}
          fontWeight="light"
          fontSize={12}
          color="rgba(33, 33, 33, 0.85)"
        >
          {related.map((related, idx, arr) => {
            return idx === arr.length - 1 ? (
              <span color="#212121">{related}</span>
            ) : (
              <span color="#212121">{related}, </span>
            );
          })}
        </Typography>
      </CardContent>
    </Card>
  );
}
