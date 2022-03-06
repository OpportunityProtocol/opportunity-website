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
    },
    card: {
      width: '100%',
    boxShadow: '0px 2px 4px -1px #eee, 0px 4px 5px 0px #eee, 0px 1px 10px 0px #eee',
    },

    img: {
      width: '100%', height: '100%'
    }

  };
});

export default useStyles;
