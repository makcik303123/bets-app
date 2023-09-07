import React from "react";
import "./header.scss";
import Login from "../Login";
import { Link } from "react-router-dom";
import SignIn from "../SignIn";
import { useSelector, useDispatch } from "react-redux";
// import { changeAuth } from "../../redux/slices/authSlice";
import { changeActiveValue } from "../../redux/slices/activeValueSlice";

function Header() {
	const authorization = useSelector((state) => state.authReducer.value);
	const activeValue = useSelector((state) => state.activeValueRducer.value);
	const dispatch = useDispatch();

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
	const [popupSignIn, setPopupSignIn] = React.useState(false);

	return (
		<div>
			<Login popupLogin={popupLogin} setPopupLogin={setPopupLogin} />
			<SignIn popupSignIn={popupSignIn} setPopupSignIn={setPopupSignIn} />

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
								<button className="button">+&nbsp;ДЕПОЗИТ</button>
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
								<button onClick={() => setPopupSignIn(true)} className="button">
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
