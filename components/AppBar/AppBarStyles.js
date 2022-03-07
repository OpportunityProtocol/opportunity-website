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
      color: '#212121',
     // boxShadow: '0px 2px 4px -1px #eee, 0px 4px 5px 0px #eee, 0px 1px 10px 0px #eee'
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
