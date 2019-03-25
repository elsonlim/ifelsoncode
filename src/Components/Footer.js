import React, {useState} from "react";
import './Footer.css';
import Switch from '@material-ui/core/Switch';
import * as Actions from '../actions';
import { connect } from 'react-redux';

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
    </div>
  );
};

const mapStateToProps = state => ({
  isDarkMode: state.global.isDarkMode,
});

export default connect(mapStateToProps, Actions)(footer);
