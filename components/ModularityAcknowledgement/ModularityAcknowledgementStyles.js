import { makeStyles } from '@mui/styles';
import { darken } from '@mui/material'
const useStyles = makeStyles(() => {
  return {
    icon: {
      margin: '20px 0px',
      width: '50px',
      height: '50px'
    },

    root: {
      padding: '5% 12%',
      backgroundColor: darken('#062e03', 0.82),
        color: '#fff',
        height: 550,
    },

    modularSectionCard: {
      border: '1px solid #eee',
    },

    modularSectionCardContent: {
      color: '#fff',
      height: 250,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },

    modularCardBox: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },

    fullElement: {
      width: '100%',
      height: '100%',
    },

    learnMoreButton: {
      backgroundColor: 'transparent'
    },
    container: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
    },
    card: {
      border: '1px solid #ddd',
      backgroundColor: 'transparent',
    },
    textButton: {
      margin: '0px !important',
      padding: '0px !important',
    }
  };
});

export default useStyles;
