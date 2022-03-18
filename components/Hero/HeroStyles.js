import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => {
  return {
    introductionSection: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: '#fbfbfd',
        width: '100vw',
       //background: 'linear-gradient(180deg, rgba(255,255,255,1) 8%, rgba(213,244,225,0.03545168067226889) 100%, rgba(255,255,255,1) 255%)'
    },
    container: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-around',
      padding: '80px 0px'
    },
    img: {
      width: '100%',
      borderRadius: 0,
    },
    button: {
      borderRadius: 20
    }
  };
});

export default useStyles;
