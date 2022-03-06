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
    },

    modularSectionCard: {
      backgroundColor: 'transparent',
      border: 'transparent'
      //borderRadius: 15,
    },

    modularSectionCardContent: {
      //padding: 20,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },

    fullElement: {
      width: '100%',
      height: '100%',
    },

    learnMoreButton: {
      backgroundColor: 'transparent'
    }
  };
});

export default useStyles;
