import React from "react";
import "./login.scss";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addUserInDatabase } from "../../firebase";

import type { SignUpProps } from "./SignUp.type";

const SignUp = ({ popupSignUp, setPopupSignUp }: SignUpProps) => {
  const [inputEmail, setInputEmail] = React.useState("");
  const [inputPassword, setinptPassword] = React.useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    createAccount(inputEmail, inputPassword);
  }

  function createAccount(email: string, password: string) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const { uid } = userCredential.user;
        console.log(uid);
        addUserInDatabase({ uid, email, password, createTime: Date.now() });
        setPopupSignUp(false);
      })
      .catch((error) => {
        console.log(error);
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

  return (
    <div className={popupSignUp ? "active login-wrapper" : "login-wrapper"}>
      <div className="login-box">
        <h2>Sign Up</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="user-box">
            <input
              type="text"
              required
              value={inputEmail}
              onChange={(e) => setInputEmail(e.target.value)}
            />
            <label htmlFor="">Username</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              required
              value={inputPassword}
              onChange={(e) => setinptPassword(e.target.value)}
            />
            <label htmlFor="">password</label>
          </div>
          <button type="submit">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Sign Up
          </button>
        </form>
        <div
          onClick={() => setPopupSignUp(false)}
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

export default SignUp;
