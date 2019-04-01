import React from "react";
import { Card, CardMedia } from "@material-ui/core";
import '../styles/AboutMe.css'
import {connect} from 'react-redux';

export const AboutMe = ({isDarkMode = false}) => (
  <div className={["about-me", isDarkMode ? 'dark' : ''].join(' ')} data-testid="AboutMe">
    <Card className={'card'}>
      <CardMedia
        className={"profile"}
        image="elsonDp.jpg"
        title="This is how I look like"
      />
      <p className={"content-text"}>
        Hello, I'm Elson and this is my blog.
        I'm a web developer at Thoughtworks.
        As you can see is still under a WIP (:
      </p> 
    </Card>
  </div>    
);

const mapStateToProps = (state) => ({
  isDarkMode: state.global.isDarkMode,
});

export default connect(mapStateToProps)(AboutMe);

