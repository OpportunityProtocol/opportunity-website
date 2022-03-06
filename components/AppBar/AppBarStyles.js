import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => {
  return {
    appbar: {
      width: '100vw',
      height: '70px',
    },

    appbarPaper: {
      backgroundColor: '#fff',
      padding: '2% 8%',
      display: 'flex',
      alignItems: 'center',
      color: '#212121'
    },

    flexedGridItem: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },

    link: {
        cursor: 'pointer'
    }

  };
});

export default useStyles;
