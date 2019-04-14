import React, { useState } from "react";
import { Modal, Button, showModal, hideModal } from "./common";
import '../styles/Login.css';
import * as firebase from 'firebase/app';
import 'firebase/auth';

const loginModalId = 'loginModalId';


const login = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password)
    .then(
      resolve => console.log('loggedin'),
      error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
        return Promise.reject();
      }
    );
};

const loginWithInput = (callback) => {
  const email = document.getElementById('user-email').value;
  const password = document.getElementById('user-password').value;
  login(email, password).then(callback);
};

const logout = (callback) => {
  firebase.auth().signOut().then(() => {
    // Sign-out successful.
    callback();
    document.getElementById('user-email').value = null;
    document.getElementById('user-password').value = null;
  }).catch(function (error) {
    // An error happened.
  });
};

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className={"login"}>
      <Modal id={loginModalId}>
        <label htmlFor="user-email">Email: </label>
        <input id="user-email" type="text"></input>
        <br />
        <label htmlFor="user-password">Password: </label>
        <input id="user-password" type="password"></input>

        <Button
          onClick={() => loginWithInput(() => {
            setIsLoggedIn(true);
            hideModal(loginModalId);
          })}>
          Login
        </Button>
      </Modal>
      <Button
        theme={'dark'}
        onClick={() => isLoggedIn ? logout(() => {
          setIsLoggedIn(false);
        }) : showModal(loginModalId)}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </Button>
    </div>
  )
};

export default Login;