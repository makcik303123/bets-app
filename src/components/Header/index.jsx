import React from "react";
import "./header.scss";
import Login from "../Login";
import { Link } from "react-router-dom";
import SignUp from "../SignUp";
import { useSelector, useDispatch } from "react-redux";
import { changeAuth } from "../../redux/slices/authSlice";
import { changeActiveValue } from "../../redux/slices/activeValueSlice";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase";

function Header() {
	const authorization = useSelector((state) => state.authReducer.value);
	const activeValue = useSelector((state) => state.activeValueRducer.value);
	const dispatch = useDispatch();
	const selectRef = React.useRef();

	// onAuthStateChanged(auth, (user) => {
	// 	if (user) {
	// 		const uid = user.uid;
	// 		console.log(user);
	// 		// dispatch(changeAuth(true));
	// 	} else {
	// 		console.log("sign out");
	// 	}
	// });

	// const signOutFromAccount = () => {
	// 	signOut(auth)
	// 		.then(() => {
	// 			dispatch(changeAuth());
	// 		})
	// 		.catch((error) => {
	// 			console.log(error);
	// 		});
	// };
	// signOutFromAccount();
	const arrayLinks = [
		"bets",
		"pro",
		"games",
		"streamers",
		"ladder",
		"promo",
		"news",
	];
	let balance = 300;
	const arrayValues = [
		{ value: "USD", multiplayer: 1.1 },
		{ value: "RUB", multiplayer: 100 },
		{ value: "EUR", multiplayer: 1 },
	];

	const [activeLink, setActiveLink] = React.useState(0);
	const [selectValue, setSelectValue] = React.useState(false);
	const [popupLogin, setPopupLogin] = React.useState(false);
	const [popupSignUp, setPopupSignUp] = React.useState(false);

	React.useEffect(() => {
		const handleClickOutside = (e) => {
			if (!e.composedPath().includes(selectRef.current)) {
				setSelectValue(false);
			}
		};
		document.body.addEventListener("click", handleClickOutside);
		return () => document.body.removeEventListener("click", handleClickOutside);
	}, []);

	return (
		<div>
			<Login popupLogin={popupLogin} setPopupLogin={setPopupLogin} />
			<SignUp popupSignUp={popupSignUp} setPopupSignUp={setPopupSignUp} />

			<header className="header">
				<div className="nav container">
					<img width={69} height={30} src="../img/logo.svg" alt="logo" />
					<ul className="nav__left">
						{arrayLinks.map((link, i) => (
							<li className="nav__item" onClick={() => setActiveLink(i)}>
								<Link
									to={"/" + link}
									className={i === activeLink ? "active link" : "link"}
								>
									{link}
								</Link>
							</li>
						))}
						;
					</ul>
					<div className="nav__right">
						{authorization ? (
							<>
								<div className="balance__container">
									<div
										onClick={() => setSelectValue(!selectValue)}
										className="balance__wrapper"
										ref={selectRef}
									>
										<div className="balance">
											<div className="balance__main">
												<div className="main__currency">
													{arrayValues[activeValue].value}
												</div>
												<div className="main__amount">
													{arrayValues[activeValue].multiplayer * balance}
												</div>
											</div>
											<div className="balance__bonus">Bonus: 0.00</div>
										</div>
										{selectValue ? (
											<div className="balance__select-wrapper">
												<div className="balance__select">
													{arrayValues.map((value, i) => (
														<div
															onClick={() => dispatch(changeActiveValue(i))}
															className="select__row"
														>
															<div className="row__value">{value.value}</div>
															<div className="row__result">
																{value.multiplayer * balance}
															</div>
														</div>
													))}
												</div>
											</div>
										) : (
											""
										)}
										<img
											width={15}
											height={15}
											src="../img/down.svg"
											alt="down"
											className={selectValue ? "active" : ""}
										/>
									</div>
								</div>
								<button className="button">+&nbsp;DEPOSIT</button>
								<div className="user">
									<img
										width={35}
										height={35}
										src="../img/user.svg"
										alt="user"
									/>
									<img
										width={15}
										height={15}
										src="../img/down.svg"
										alt="down"
									/>
								</div>
							</>
						) : (
							<>
								<button onClick={() => setPopupLogin(true)} className="button">
									Login
								</button>
								<button onClick={() => setPopupSignUp(true)} className="button">
									Sign Up
								</button>
							</>
						)}
					</div>
				</div>
			</header>
		</div>
	);
}

export default Header;
