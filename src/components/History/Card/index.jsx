import React from "react";
import "./Card.scss";

function Card() {
	return (
		<div className="history-card">
			<div className="history-card__event">
				<div className="event__tableStake">
					<span className="label">Match up Winner</span>
					<span className="value">Team Liquid</span>
				</div>
				<div className="event__tableStake">
					<span>Total Stake</span>
					<span className="value">800.00RUB</span>
				</div>
				<div className="event__tableStake">
					<span>LOOT.BET pays</span>
					<span className="value">0.00RUB</span>
				</div>
			</div>
			<div className="history-card__result">
				<div className="result__status status-loss">Loss</div>
				<div className="result__details">details</div>
			</div>
		</div>
	);
}

export default Card;
