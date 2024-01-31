import React from "react";
import { useActions, useTypedSelector } from "../../hooks";

import "./header.scss";
import Login from "../Login";
import { Link } from "react-router-dom";
import SignUp from "../SignUp";
import { arrayLinks, arrayValues } from "../../utils/constants/variables";

import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";
import { auth, updateUserData, usersRef } from "../../firebase";

function Header() {
	const user = useTypedSelector((state) => state.getUserDataReducer.data);
	const authUid = useTypedSelector((state) => state.authUidReducer.value);
	const { changeAuthUid, changeUserData } = useActions();
	const selectRef = React.useRef();

	React.useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				const uid = user.uid;
				changeAuthUid(uid);
			} else {
				changeAuthUid(undefined);
			}
		});
	}, []);

	React.useEffect(() => {
		if (authUid) {
			const unsub = onSnapshot(doc(usersRef, authUid), (doc) => {
				changeUserData(doc.data());
				console.log("Current data: ", doc.data());
			});
			return unsub;
		} else {
			changeUserData(false);
		}
	}, [authUid]);

	const signOutFromAccount = () => {
		signOut(auth)
			.then(() => {
				changeUserData(false);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const clickOnValue = (index) => {
		if (user.activeValue === index) {
			return;
		}

		updateUserData(authUid, { activeValue: index });
	};

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

	const { balance, status, activeValue } = user;

	return (
		<div>
			<Login popupLogin={popupLogin} setPopupLogin={setPopupLogin} />
			<SignUp popupSignUp={popupSignUp} setPopupSignUp={setPopupSignUp} />

			<header className="header">
				<div className="nav container">
					<img width={69} height={30} src="../img/logo.svg" alt="logo" />
					<ul className="nav__left">
						{arrayLinks.map((link, i) => (
							<li
								className="nav__item"
								onClick={() => setActiveLink(i)}
								key={i}
							>
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
						{status ? (
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
													{Math.round(
														arrayValues[activeValue].multiplayer * balance * 100
													) / 100}
												</div>
											</div>
											<div className="balance__bonus">Bonus: 0.00</div>
										</div>
										{selectValue ? (
											<div className="balance__select-wrapper">
												<div className="balance__select">
													{arrayValues.map((value, i) => (
														<div
															onClick={() => clickOnValue(i)}
															className="select__row"
														>
															<div className="row__value">{value.value}</div>
															<div className="row__result">
																{Math.round(value.multiplayer * balance * 100) /
																	100}
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
										onClick={() => signOutFromAccount()}
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
