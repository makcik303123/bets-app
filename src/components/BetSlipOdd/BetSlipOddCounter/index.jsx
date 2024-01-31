import React from "react";
import "./BetSlipOddCounter.scss";

import { useActions } from "../../../hooks";

function BetSlipOddCounter({ amount, index = null }) {
	const { handlerAmount } = useActions();

	const eventHandler = (e) => {
		console.log(e);
	};

	return (
		<div className="bet__counter">
			<div className="counter__wrapper">
				<button
					className="counter__button"
					onClick={() => handlerAmount({ type: "decrement", index, amount })}
				>
					<svg width={20} height={20}>
						<use href="./img/icons/sprite.svg#minus-bet-slip"></use>
					</svg>
				</button>
				<input
					inputMode="decimal"
					className="counter__input"
					type="text"
					value={amount || ""}
					onChange={(e) =>
						handlerAmount({ type: "input", index, amount: e.target.value })
					}
				/>
				<button
					className="counter__button"
					onClick={() => handlerAmount({ type: "increment", index, amount })}
				>
					<svg width={20} height={20}>
						<use href="./img/icons/sprite.svg#plus-bet-slip"></use>
					</svg>
				</button>
			</div>
			<button className="counter__max-bet">Max Bet</button>
		</div>
	);
}

export default BetSlipOddCounter;
