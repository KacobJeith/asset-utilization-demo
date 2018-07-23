import { createMuiTheme } from 'material-ui/styles';
import bluegrey from 'material-ui/colors/blueGrey';
import lightblue from 'material-ui/colors/lightblue';

const Theme = createMuiTheme({
  palette: {
    primary: {
      main: bluegrey[700],
      contrastText: '#FFF'
    },
    secondary: {
      main: lightblue[500],
      contrastText: "#000"
    }
  },
  typography: {
    display1: {
      fontFamily: `"Fjalla One", "Roboto", "Helvetica", "Arial", sans-serif`,
      textTransform: 'uppercase',
      fontSize: '3rem'
    },
    headline: {
      color: "rgba(0, 0, 0, 0.6)",
      fontFamily: `"Fjalla One", "Roboto", "Helvetica", "Arial", sans-serif`,
      textTransform: 'uppercase',
      fontSize: '2.2rem'
    },
    title: {
      color: "rgba(0, 0, 0, 0.6)",
      fontFamily: `"Fjalla One", "Roboto", "Helvetica", "Arial", sans-serif`,
      textTransform: 'uppercase',
      fontSize: '1.5rem'
    },
    subheading: {
      color: "rgba(0, 0, 0, 0.6)",
      fontSize: '1.3rem'
    },
    body2: {
      color: "rgba(0, 0, 0, 0.7)"
    },
    body1: {
      color: "rgba(0, 0, 0, 0.7)",
      fontSize: '1.2rem'
    },
  },
});

export default Theme;
