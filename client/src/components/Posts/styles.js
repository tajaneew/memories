import { styled } from '@mui/system';

const useStyles = styled((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: 'center',
  },
}));  

export default useStyles;

