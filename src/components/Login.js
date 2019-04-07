import React from "react";
import { Modal, Button, showModal } from "./common";
import '../styles/Login.css';

const loginModalId = 'loginModalId';

export default () => (
  <div className={"login"}>
    <Modal id={loginModalId}>
      <label htmlFor="user-email">Email: </label>
      <input id="user-email" type="text"></input>
      <br />
      <label htmlFor="user-password">Password: </label>
      <input id="user-password" type="password"></input>

      <Button>login</Button>
    </Modal>
    <Button theme={'dark'} onClick={() => showModal(loginModalId)}>Login</Button>
  </div>
)