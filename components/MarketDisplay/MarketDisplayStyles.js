import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => {
  return {
    card: {
    height: 120,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
      margin: '0px 15px',
      boxShadow: 'none',
      width: '300px',
    },
  };
});

export default useStyles;
