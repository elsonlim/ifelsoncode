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
    top: '-20px',
    position: 'relative',
    zIndex: 1100,
    float: 'right', 
    marginRight: '20px',
  },
  card: {
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    height: '220px',
    width: '220px',
    backgroundColor: '#FAFAFA',
  },
  profile: {
    height: '200px',
    width: '200px',
    border: '1px solid #d7d7d7',
    borderRadius: 6,
  }
}