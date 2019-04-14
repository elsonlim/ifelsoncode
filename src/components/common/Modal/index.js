import React from 'react';
import './Modal.css';

export const hideModal = (id) => {
  document.getElementById(id).style.visibility = 'hidden';
}

export const showModal = (id) => {
  document.getElementById(id).style.visibility = 'visible';
}

export const Modal = ({id, children}) => (
  <div id={id} className={'modal'}>
    <div 
      onClick={() => hideModal(id)}
      className={'modal-backdrop'} />
    <div className={'modal-body'}>
      <div
        tabIndex="0"
        onClick={() => hideModal(id)}
        className={'modal-close'}>
          Close
      </div>
      {children}
    </div>
  </div>
);