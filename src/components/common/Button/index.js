import React from "react";
import './Button.css';

export default ({children, onClick, theme}) => {

  let buttonClass = '';
  switch (theme) {
    case 'dark':
      buttonClass = 'button--dark';
      break;
    default:
      break;
  }

  return (
    <div onClick={onClick} className={`button ${buttonClass}`}>
      {children}
    </div>  
  )
};