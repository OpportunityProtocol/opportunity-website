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

    descriptionImage: {
      width: '100%',
      height: 400,
    },

    introductionTextContainer: {
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },

    gradientWhiteToDarker: {
      background: 'rgb(255,255,255)',
      background:
        'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(250,250,250,1) 50%, rgba(251,251,253,1) 100%)',
    },

    gradientDarkerToWhite: {
      background: 'rgb(251,251,253)',
      background:
        'linear-gradient(180deg, rgba(251,251,253,1) 0%, rgba(250,250,250,1) 50%, rgba(255,255,255,1) 100%)',
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

    shadowyCard: {
      position: 'relative',
      width: '100%',
      height: '670px',
      margin: '15px 0px',
    },

    shadowyDiv: {
      position: 'absolute',
      backgroundColor: 'rgba(0,0,0,0.5)',
    },

    shadowyDivContainer: {
      padding: '5% 7%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
      width: '100%',
      height: '670px',
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

    card: {
     
    },
  };
});

export default useStyles;
