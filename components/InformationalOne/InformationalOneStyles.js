import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => {
  return {
    section: {
        padding: '5% 12%',
        width: '100%',
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
