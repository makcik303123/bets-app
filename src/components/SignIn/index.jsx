import React from "react";
import "./login.scss";

const SignIn = ({ popupSignIn, setPopupSignIn }) => {
	return (
		<div className={popupSignIn ? "active login-wrapper" : "login-wrapper"}>
			<div className="login-box">
				<h2>Sign In</h2>
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
						Sign In
					</a>
				</form>
				<div
					onClick={() => setPopupSignIn(false)}
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

export default SignIn;
