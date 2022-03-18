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
      //backgroundColor: 'transparent',
      border: '1px solid #eee',
      //borderRadius: 15,
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
    }
  };
});

export default useStyles;
