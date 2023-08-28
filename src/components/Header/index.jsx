import React from "react";
import "./header.scss";
import Link from "../Link";
import Login from "../Login";

function Header() {
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
		{ value: "USD", balance: balance * 1.1 },
		{ value: "RUB", balance: balance * 100 },
		{ value: "EUR", balance: balance },
	];

	const [activeLink, setActiveLink] = React.useState(0);
	const [autorization, setAutorization] = React.useState(false);
	const [selectValue, setSelectValue] = React.useState(false);
	const [activeValue, setactiveValue] = React.useState(1);
	const [popupLogin, setPopupLogin] = React.useState(false);

	return (
		<div>
			<Login popupLogin={popupLogin} setPopupLogin={setPopupLogin} />

			<header className="header">
				<div className="nav container">
					<img src="../img/logo.svg" alt="logo" />
					<ul className="nav__left">
						{arrayLinks.map((link, index) => (
							<Link
								setActiveLink={setActiveLink}
								indexLink={index}
								name={link}
								activeLink={activeLink}
							/>
						))}
						;
					</ul>
					<div className="nav__right">
						{autorization ? (
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
													{arrayValues[activeValue].balance}
												</div>
											</div>
											<div className="balance__bonus">Bonus: 0.00</div>
										</div>
										{selectValue ? (
											<div className="balance__select-wrapper">
												<div className="balance__select">
													{arrayValues.map((value, i) => (
														<div
															onClick={() => setactiveValue(i)}
															className="select__row"
														>
															<div className="row__value">{value.value}</div>
															<div className="row__result">{value.balance}</div>
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
								<button className="button">Sign Up</button>
							</>
						)}
					</div>
				</div>
			</header>
		</div>
	);
}

export default Header;
