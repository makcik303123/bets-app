import React from "react";
import "./login.scss";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

import type { LoginProps } from "./Login.type";

const Login = ({ popupLogin, setPopupLogin }: LoginProps) => {
	const dispatch = useDispatch();
	const [inputEmail, setInputEmail] = React.useState("");
	const [inputPassword, setinptPassword] = React.useState("");

	function signInAccount(email: string, password: string) {
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				console.log("You clicked submit.");
				setPopupLogin(false);
			})
			.catch((error) => {
				console.log(error);
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorCode);
				console.log(errorMessage);
			});
	}

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		signInAccount(inputEmail, inputPassword);
	}

	return (
		<div className={popupLogin ? "active login-wrapper" : "login-wrapper"}>
			<div className="login-box">
				<h2>Login Form</h2>
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
