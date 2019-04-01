import React from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {blueGrey} from '@material-ui/core/colors';
import Header from './Header';
import Footer from './Footer';
import AboutMe from './AboutMe';
import {Grid} from '@material-ui/core';
import '../styles/Blog.css';
import {connect} from 'react-redux';

export const Blog = ({isDarkMode = false}) => {
  console.log("isDarkMode: " + isDarkMode);
  return (
    <div className={['blog', isDarkMode ? 'dark': ''].join(' ')}>
    <MuiThemeProvider theme={theme} >
        <Header />
        <div style={{
          display: "flex",
          justifyContent: "center",
          flex: 1
          }}>
          <div style={{
            justifySelf: "center",
            maxWidth: '1024px',
            width: "100%",
            padding: '1.2em'
          }}>
            <Grid container spacing={8} direction="row-reverse">
              <Grid item sm={3} xs={12}><AboutMe /></Grid>
            </Grid>
          </div>
        </div>
        <Footer />
    </MuiThemeProvider>
    </div>
  );
}

const mapStateToProps = state => ({
  isDarkMode: state.global.isDarkMode,
});

export default connect(mapStateToProps)(Blog);

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
