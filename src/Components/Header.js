import React from "react";
import { AppBar, Toolbar, Typography } from '@material-ui/core';

export default () => (
  <AppBar position="sticky">
    <Toolbar style={styles.container}>
        <Typography variant="h5" color="inherit">
            Blog - Elson
        </Typography>
    </Toolbar>
  </AppBar>
);

const styles = {
  container: {
    width: '1024px',
    maxWidth: '1024px',
    margin: 'auto',
  },
  grow: {
    flexGrow: 1,
  }
};