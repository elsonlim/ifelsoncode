
import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { blue, indigo, purple } from '@material-ui/core/colors';

const IfElsonCode = () => {
    return (
      <MuiThemeProvider theme={theme}>
            <AppBar position="sticky">
              <Toolbar>
                  <Typography variant="h5" color="inherit" className={styles.grow}>
                      Blog - Elson
                  </Typography>
              </Toolbar>
            </AppBar>
      </MuiThemeProvider>
    );
}

export default IfElsonCode;

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
  overrides: {
    // Name of the component ⚛️ / style sheet
    MuiButton: {
      // Name of the rule
      text: {
        // Some CSS
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      },
    },
  },
  typography: { useNextVariants: true },
});

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

