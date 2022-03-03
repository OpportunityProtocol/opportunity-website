import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => {
  return {
    appbar: {
      width: '100vw',
      height: '70px',
    },

    appbarPaper: {
      backgroundColor: '#212121',
      padding: '2% 12%',
      display: 'flex',
      alignItems: 'center',
      color: '#fff'
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
