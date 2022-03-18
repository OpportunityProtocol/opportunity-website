import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => {
  return {
   
    section: {
      padding: '5% 12%',
      backgroundColor: 'red',
    },

    learnCard: {
        position: 'relative',
        padding: 20,
        width: '100%',
        minHeight: 120,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        background: 'transparent'
    },

    worldGridContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
    },

    worldImg: {
      opacity: 0.4, width: '80%', height: 190
    },

    gridContainer: {
      backgroundColor: 'transparent',
      borderRadius: 8,
      border: '1px solid #eee',
    },

    iconContainer: {
      padding: 6, 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      backgroundColor: '#eee', 
      borderRadius: 8
    }
  };
});

export default useStyles;
