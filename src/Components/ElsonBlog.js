import React from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {blueGrey} from '@material-ui/core/colors';
import Header from './Header';
import AboutMe from './AboutMe';
import {Grid} from '@material-ui/core';

const ElsonBlog = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Header />
      <div style={{display: "flex", justifyContent: "center"}}>
        <div style={{
          justifySelf: "center",
          maxWidth: '1024px',
          width: "100%",
        }}>
          <Grid container direction="row-reverse">
            <Grid item xs={3}><AboutMe /></Grid>
          </Grid>
        </div>
      </div>
    </MuiThemeProvider>
  );
}

export default ElsonBlog;

const theme = createMuiTheme({
  palette: {
    primary: blueGrey,
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

