import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => {
  return {

    textContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start'
    },
   
    section: {
      padding: '5% 8%',
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
        width: '100%',
        padding: '0% 8%',
        height: '100vh',
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

      card: {
       /* boxShadow: '0px 2px 4px -1px #eee, 0px 4px 5px 0px #eee, 0px 1px 10px 0px #eee',
        '&:hover': {
          boxShadow: '0px 8px 10px -5px #eee, 0px 16px 24px 2px #eee, 0px 6px 30px 5px #eee'
        }*/

      },
      
  };
});

export default useStyles;
