import React, {useState} from "react";
import '../styles/Footer.css';
import Switch from '@material-ui/core/Switch';
import * as Actions from '../actions';
import { connect } from 'react-redux';
import Login from "./Login";

const footer = ({isDarkMode, updateDarkMode}) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = (darkMode) => {
    updateDarkMode(!darkMode);
    setDarkMode(!darkMode);
  };

  return (
    <div className="footer">
      
      <Switch
        checked={darkMode}
        onChange={() => toggleDarkMode(darkMode)}
        value="checkedB"
        color="primary"
      />
      <Login />
    </div>
  );
};

const mapStateToProps = state => ({
  isDarkMode: state.global.isDarkMode,
});

export default connect(mapStateToProps, Actions)(footer);
