import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const IfElsonCode = () => {
    return (
        <div>
             <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" color="inherit" className={styles.grow}>
                        Elson
                    </Typography>
                </Toolbar>
             </AppBar>
        </div>
    );
}

export default IfElsonCode;

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

