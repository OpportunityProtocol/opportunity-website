import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => {
  return {
   
    section: {
      padding: '5% 12%',
      width: '100%',
    },

    learnCard: {
        position: 'relative',
        margin: '15px 0px',
        padding: 20,
    },

    worldGridContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
    },

    worldImg: {
      opacity: 0.4, width: '80%', height: 250
    },

    gridContainer: {
      backgroundColor: 'transparent',
      borderRadius: 8,
      border: '1px solid #eee',
    }
  };
});

export default useStyles;
