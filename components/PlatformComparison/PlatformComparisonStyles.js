import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => {
  return {
      container: {
        backgroundColor: '#fbfbfd',
        padding: '5% 12%',
      },
      card: {
        boxShadow: 'rgb(147, 227, 178)',
        border: '1px solid rgba(147,227,178,1)',
        paddingTop: 2,
        height: 'auto',
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
