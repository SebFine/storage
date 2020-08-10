import React from "react";
import { connect } from "react-redux";
import { handleLogin } from "../redux/userActions";

const LoginPage = (props) => {
  const handleClick = () => {
    props.dispatch(handleLogin());
  };
  return (
    <div className="modal modal--login">
      This is login page
      {!props.state.user && (
        <>
          <p>Logged in</p>
          <button onClick={handleClick}>Log In</button>
        </>
      )}
      {!!props.state.user && (
        <>
          <p>Logged out</p>
          <button onClick={handleClick}>Log Out</button>
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps)(LoginPage);
