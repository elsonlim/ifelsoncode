import React from "react";
import { AppBar, Toolbar, Typography } from '@material-ui/core';

export default () => (
  <AppBar position="sticky">
    <Toolbar>
        <Typography variant="h5" color="inherit" className={styles.grow}>
            Blog - Elson
        </Typography>
    </Toolbar>
  </AppBar>
);

const styles = {
  grow: {
    flexGrow: 1,
  }
};