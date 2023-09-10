import { styled } from '@mui/system';

const useStyles = styled((props) => {
  const { theme } = props;

  return {
    appBar: {
      borderRadius: '15px',
      margin: '30px 0',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    heading: {
      color: 'rgba(0, 183, 255, 1)',
    },
    image: {
      marginLeft: '15px',
    },
    [theme.breakpoints.down('sm')]: {
      mainContainer: {
        flexDirection: "column-reverse"
      }
    }
  };
});

export default useStyles;

