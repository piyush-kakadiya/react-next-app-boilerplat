import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
export const theme = createTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      '"Manrope"'
    ].join(','),
  },
  palette: {
    primary: {
      main: '#885FFF',
    },
    secondary: {
      main: '#18D7A9',
    },
    error: {
      main: red.A400,
    },
  },
});