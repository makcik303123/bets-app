import React from "react";
import "./header.scss";

function Header() {
	return (
		<div>
			<header className="header">
				<div className="nav container">
					<img src="../img/logo.svg" alt="logo" />
					<ul className="nav__left">
						<li className="nav__item">
							<a href="#" className="link active">
								Bets
							</a>
						</li>
						<li className="nav__item">
							<a href="#" className="link">
								Pro
							</a>
						</li>
						<li className="nav__item">
							<a href="#" className="link">
								Games
							</a>
						</li>
						<li className="nav__item">
							<a href="#" className="link">
								Streamers
							</a>
						</li>
						<li className="nav__item">
							<a href="#" className="link">
								{" "}
								Ladder
							</a>
						</li>
						<li className="nav__item">
							<a href="#" className="link">
								Promo
							</a>
						</li>
						<li className="nav__item">
							<a href="#" className="link">
								News
							</a>
						</li>
					</ul>
					<div className="nav__right">
						<div className="balance__wrapper">
							<div className="balance">
								<div className="balance__main">
									<div className="main__currency">RUB</div>
									<div className="main__amount">15000.00</div>
								</div>
								<div className="balance__bonus">Bonus: 0.00</div>
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
