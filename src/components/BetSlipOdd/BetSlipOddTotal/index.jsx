import React from "react";
import "./BetSlipOddTotal.scss";

function BetSlipOddTotal({ amount, multiplayer }) {
	return (
		<div className="bet__total">
			<div className="total__row">
				<span className="total__title">Total Stake</span>
				<span className="total__value">{amount} RUB</span>
			</div>
			<div className="total__row">
				<span className="total__title">LOOT.BET will pay</span>
				<span className="total__value">
					{Math.floor(amount * multiplayer * 100) / 100} RUB
				</span>
			</div>
		</div>
	);
}

export default BetSlipOddTotal;
