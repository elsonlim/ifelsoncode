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
      <p style={styles.contentText}>
        Hello, I'm Elson and this is my blog.
        I'm a web developer at Thoughtworks.
        As you can see is still under a WIP (:
      </p> 
    </Card>
  </div>    
);

const styles = {
  container: {
    marginTop: '1.2em',
    position: 'relative',
    zIndex: 1100,
    float: 'right', 
    display: 'flex',
    flexDirection: "row",
  },
  card: {
    display: 'flex',
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: '0.7em',
    border: '1px solid',
    borderColor: blueGrey[50],
  },
  profile: {
    width: '100%',
    height: '10em',
    border: '1px solid',
    borderColor: blueGrey[50],
    borderRadius: 5,
  },
  contentText: {
    textAlign: 'justify',
    fontsize: '0.9em',
    fontWeight: 600,
    color: blueGrey[800]
  }
}