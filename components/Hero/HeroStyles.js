import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => {
  return {
    introductionSection: {
        height: 'calc(100vh - 80px)',
        display: 'flex',
        flexDirection: 'column',
        background: 'rgb(255,255,255)',
       background: 'linear-gradient(180deg, rgba(255,255,255,1) 8%, rgba(213,244,225,0.25) 100%, rgba(255,255,255,1) 255%)'
    },
    container: {
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
    },
    img: {
      width: '90%',
      height: '90%',
      borderRadius: 20,
    },
    shadowyDiv: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0,0,0,.5)',
      borderRadius: 20,
      position: 'absolute',
      width: '90%',
      height: '90%',
    },
    button: {
      borderRadius: 20
    }
  };
});

export default useStyles;
