import { darken } from '@material-ui/core';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => {
  return {
    root: {
      width: '100%',
      backgroundColor: darken('#062e03', 0.82),
      minHeight: '100vh',
      color: 'white',
    },
    container: {
      backgroundColor: darken('#062e03', 0.82),
      height: 'calc(100vh - 70px)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
    },
    left: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    marquee: {
      paddingTop: 5,
      paddingBottom: 5,
      marginTop: 15,
      bgcolor: 'transparent',
    },
  };
});

export default useStyles;
