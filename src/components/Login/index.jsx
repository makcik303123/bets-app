import React from "react";
import "./login.scss";

const Login = ({ popupLogin, setPopupLogin }) => {
	return (
		<div className={popupLogin ? "active login-wrapper" : "login-wrapper"}>
			<div className="login-box">
				<h2>Login Form</h2>
				<form action="">
					<div className="user-box">
						<input type="text" required />
						<label htmlFor="">Username</label>
					</div>
					<div className="user-box">
						<input type="password" required />
						<label htmlFor="">password</label>
					</div>
					<a href="">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						Login
					</a>
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
