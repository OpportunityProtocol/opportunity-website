import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => {
  return {
    icon: {
      margin: '20px 0px',
      width: '50px',
      height: '50px',
    },

    section: {
      padding: '5% 12%',
      width: '100%',
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
  };
});

export default useStyles;
