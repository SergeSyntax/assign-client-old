import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontSize: 22.4,
  },
  palette: {
    primary: {
      main: '#318BD3',
    },
  },
  overrides: {
    MuiBackdrop: {
      root: {
        backgroundColor: 'rgba(9, 30, 66, 0.54)',
      },
    },
  },
});

export default theme;
