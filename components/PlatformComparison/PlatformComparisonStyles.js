import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => {
  return {
      container: {
        backgroundColor: '#fbfbfd',
        padding: '5% 12%',
      },
      card: {
        paddingTop: 2,
      },
      cardContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      cardTitleContainer: {
        height: 60,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }
  };
});

export default useStyles;
