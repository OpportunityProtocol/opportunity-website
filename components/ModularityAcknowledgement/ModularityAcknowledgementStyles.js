import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => {
  return {
    icon: {
      margin: '20px 0px',
      width: '50px',
      height: '50px'
    },

    section: {
      padding: '5% 12%',
      width: '100%',
      display: 'flex', 
      justifyContent: 'space-evenly',
    },

    modularSectionCard: {
      backgroundColor: 'transparent',
      border: 'transparent',
      height: 360,
      //borderRadius: 15,
    },

    modularSectionCardContent: {
      //padding: 20,
      height: 360,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
    },

    fullElement: {
      width: '100%',
      height: '100%',
    },

    button: {
      madding: '0px !important'
    }
  };
});

export default useStyles;
