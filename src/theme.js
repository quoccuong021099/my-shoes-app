import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#202325',
    },
    secondary: {
      main: '#19857b',
    },
    third: {
      main: '#90caf9',
    },
    error: {
      main: red.A400,
    },
    white: {
      main: '#fff',
    },
    black: {
      main: '#000',
      dark: '#1A1C1D',
    },
    text: {
      main: '#ffdc1a',
    },
  },
});

export default theme;
