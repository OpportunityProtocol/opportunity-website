import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => {
  return {
    section: {
        height: 'auto',
        padding: '5% 12%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        background: 'rgb(147,227,178)',
        background: 'linear-gradient(180deg, #fbfbfd 0%, rgba(213,244,225,0.2455357142857143) 30%, rgba(147,227,178,1) 255%)'
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

    img: {
      width: '100%', height: '100%'
    },
    masonryImg: {
      borderRadius: 10,
      display: 'block',
      width: '100%',
    },
    grid: {
      position: 'relative', 
      background: 'transparent',  
      borderRadius: 8
    }

  };
});

export default useStyles;
