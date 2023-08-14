import React from "react";
import "./header.scss";
import Link from "../Link";

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

	const [activeLink, setActiveLink] = React.useState(0);

	return (
		<div>
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
						<div className="balance__container">
							<div className="balance__wrapper">
								<div className="balance">
									<div className="balance__main">
										<div className="main__currency">RUB</div>
										<div className="main__amount">15000.00</div>
									</div>
									<div className="balance__bonus">Bonus: 0.00</div>
								</div>
								{/* <div className="balance__drop">
									<div className="balance">
										<div className="balance__main">
											<div className="main__currency">RUB</div>
											<div className="main__amount">15000.00</div>
										</div>
										<div className="balance__bonus">Bonus: 0.00</div>
									</div>
									<div className="balance">
										<div className="balance__main">
											<div className="main__currency">RUB</div>
											<div className="main__amount">15000.00</div>
										</div>
										<div className="balance__bonus">Bonus: 0.00</div>
									</div>
								</div> */}
							</div>
							<img width={15} height={15} src="../img/down.svg" alt="down" />
						</div>
						<button className="button">+&nbsp;ДЕПОЗИТ</button>
						<div className="user">
							<img width={35} height={35} src="../img/user.svg" alt="user" />
							<img width={15} height={15} src="../img/down.svg" alt="down" />
						</div>
					</div>
				</div>
			</header>
		</div>
	);
}

export default Header;
