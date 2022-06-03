import { makeStyles } from '@mui/styles';
import { darken } from '@mui/material'

const useStyles = makeStyles(() => {
  return {
    root: {
        backgroundColor: darken('#062e03', 0.82), py: 10, pb: 20
      },
    grid: {
      position: 'relative', 
      background: 'transparent',  
      borderRadius: 8
    },
    masonryImg: {
      borderRadius: 10,
      display: 'block',
      width: '100%',
    },
  };
});

export default useStyles;