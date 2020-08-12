import React from "react";
import { connect } from "react-redux";
import { handleLogin, startHandleLogin } from "../redux/userActions";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "../styles/LoginPage.css";
import {useHistory} from 'react-router-dom'

const LoginPage = (props) => {
  const history = useHistory()
  const logIn = () => {
    props.dispatch(startHandleLogin());
  };
  const logOut = () => {
    props.dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="loginPage">
      <div className="loginPage__modal">
        <h1 className="loginPage__heading">Login</h1>
        <form className="loginPage__form" noValidate autoComplete="off">
          <TextField required id="standard-required" label="Login" />
          <TextField
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
          <Button variant="contained" color="primary">
            Login as admin
          </Button>
          <Button variant="contained" color="primary" onClick={() => logIn()}>
            Login as worker
          </Button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps)(LoginPage);
