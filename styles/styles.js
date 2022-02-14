import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => {
  return {
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

    introductionTextContainer: {
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },

    appbar: {
      width: '100vw',
      height: '70px',
    },

    appbarPaper: {
      backgroundColor: '#FBFBFD',
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

    centeredSection: {
      padding: '5% 12%',
      width: '100%',
      background: '#FBFBFD',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },

    shadowyDiv: {
      position: 'absolute',
      backgroundColor: 'rgba(0,0,0,0.5)',
    },

    icon: {
      margin: '20px 0px',
      width: '50px',
      height: '50px',
    },

    modularSectionCard: {
      backgroundColor: 'rgb(236, 237, 242)',
      borderRadius: 15,
    },

    modularSectionCardContent: {
      padding: 20,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
    },

    fullElement: {
      width: '100%',
      height: '100%',
    },

    learnCard: {
      position: 'relative',
      margin: '15px 0px',
      padding: 20,
    },
  };
});

export default useStyles;
