// This file is for theming MUI
import { createTheme } from '@mui/material/styles';

const palette = {
  primary: {
    main: '#333333',
  },
  secondary: {
    main: '#D4BBAA',
  },

  background: {
    default: '#FFFFFF',
    paper: '#FFFFFF',
  },

  text: {
    primary: '#333333',
  },
};

const theme = createTheme({
  palette: palette,

  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },

  // This changes the MUI Components
  components: {
    // NAvbar
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: palette.background.paper,
          color: palette.text.primary,
          boxShadow: 'none',
          borderBottom: '1px solid #E0E0E0',
        },
      },
    },

    // Cards
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },

    // Buttons
    MuiButton: {
      styleOverrides: {
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },

        outlined: {
          borderColor: palette.primary.main,
        },
      },
    },

    // Cart Icon
    MuiBadge: {
      styleOverrides: {
        badge: {
          backgroundColor: palette.primary.main,
          color: 'white',
        },
      },
    },
  },
});

export default theme;
