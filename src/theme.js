import { createMuiTheme } from "@material-ui/core/styles";
import { purple, green, blue } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
      light: blue[300],
    },
    secondary: {
      main: green[500],
    },
  },
});
export default theme;
