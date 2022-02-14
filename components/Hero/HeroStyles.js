import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => {
  return {
   
    section: {
      padding: '5% 12%',
      width: '100%',
    },

    fullElement: {
      width: '100%',
      height: '100%',
    },

    introductionSection: {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
      },
  
      introductionSectionGrid: {
        flex: 1,
        width: '100vw',
      },

      appbar: {
        width: '100vw',
        height: '70px',
      },
  
      appbarPaper: {
        backgroundColor: '#212121',
        color: '#fff',
        padding: '0% 12%',
        display: 'flex',
        alignItems: 'center',
      },
  
      flexedGridItem: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      },
  
      section: {
        padding: '5% 12%',
        width: '100%',
      },

      introductionTextContainer: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
      },
  };
});

export default useStyles;
