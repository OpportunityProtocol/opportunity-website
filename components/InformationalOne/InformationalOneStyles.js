import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => {
  return {
    section: {
        margin: '100px 0px',
        padding: '5% 12%',
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        justifyContent: 'center',
      },
      
    descriptionImage: {
      width: '100%',
      height: 400,
    },


    fullElement: {
      width: '100%',
      height: '100%',
    },

    button: {
      padding: 15
    },

    graphImgGridContainer: {
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center'
    },

    informationTextGridContainer: {
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'flex-start'
    },

    primarySection: {
      marginTop: 30, 
      width: '100%', 
      height: 'auto', 
      padding: 20
    }

  };
});

export default useStyles;
