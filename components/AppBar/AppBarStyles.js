import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => {
  return {
    appbar: {
      height: '70px',
    },

    appbarPaper: {
      backgroundColor: '#fff',
      padding: '1% 8%',
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
