import React from "react";
import "./login.scss";
import { useSelector, useDispatch } from "react-redux";
import { changeAuth } from "../../redux/slices/authSlice";

const Login = ({ popupLogin, setPopupLogin }) => {
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(changeAuth());
    console.log("You clicked submit.");
    setPopupLogin(false);
  }

  return (
    <div className={popupLogin ? "active login-wrapper" : "login-wrapper"}>
      <div className="login-box">
        <h2>Login Form</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="user-box">
            <input type="text" required />
            <label htmlFor="">Username</label>
          </div>
          <div className="user-box">
            <input type="password" />
            <label htmlFor="">password</label>
          </div>
          <button href="" type="submit">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Login
          </button>
        </form>
        <div
          onClick={() => setPopupLogin(false)}
          className="login-close-wrapper"
        >
          <div className="login-close">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
