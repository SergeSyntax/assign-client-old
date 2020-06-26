import {red} from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontSize: 22.4,
  },
  palette: {
    primary: {
      main: '#318BD3',
    },
    secondary: {
      main: '#19857b',
    },
    
    default: {
      main: '#fff'
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;
