import React from "react";
import { Card, CardMedia } from "@material-ui/core";
import {blueGrey} from '@material-ui/core/colors';

export default () => (
  <div style={styles.container}>
    <Card style={styles.card}>
      <CardMedia
        style={styles.profile}
        image="elsonDp.jpg"
        title="This is how I look like"
      />
    </Card>
  </div>    
);

const styles = {
  container: {
    top: '-1.2em',
    position: 'relative',
    zIndex: 1100,
    float: 'right', 
    marginRight: '1.2em',
  },
  card: {
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    height: '15em',
    width: '15em',
    backgroundColor: '#FAFAFA',
  },
  profile: {
    height: '14em',
    width: '14em',
    border: '1px solid #d7d7d7',
    borderRadius: 6,
  }
}