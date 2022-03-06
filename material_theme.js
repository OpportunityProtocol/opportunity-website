import { createTheme } from "@mui/material";

export const themeOptions = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#212121",
    },
    secondary: {
      main: "rgb(147, 227, 178)",
    },
    shadowyWhite: '#FBFBFD',
    blacks: {
        black: '#000',
        shadowyBlack: 'rgba(33, 33, 33, .85)'
    },
    whites: {
        white: '#fff'
    },
  },
  typography: {
    button: {
      textTransform: 'none'
    }
  },
  components: {
    MuiButton: {
      textTransform: 'none',
    },
 
  }
});
