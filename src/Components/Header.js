import React from "react";
import { AppBar, Toolbar, Typography } from '@material-ui/core';

export default () => (
  <AppBar position="sticky" style={styles.header}>
    <Toolbar style={styles.container}>
        <Typography variant="h5" color="inherit" style={styles.title}>
            Blog - Elson
        </Typography>
    </Toolbar>
  </AppBar>
);

const styles = {
  header: {
    alignItems: 'center',
  },
  container: {
    maxWidth: '1024px',
    width: '100%',
    overflow: 'hidden',
    justifyContent: 'flex-start',
    margin: 0,
    padding: 0,
  },
  title: {
    marginLeft: "1em",
  }
};