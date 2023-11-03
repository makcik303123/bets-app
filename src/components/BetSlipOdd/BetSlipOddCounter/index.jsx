import React from "react";
import { useDispatch } from "react-redux";
import { changeAmount } from "../../../redux/slices/betSlipListSlice";
import amountAction from "../../../hooks";

function BetSlipOddCounter({ amount, onChangeInput, setAmount }) {
	const dispatch = useDispatch();
	useDispatch(changeAmount("increment"));

	// console.log(amountAction(555, "increment"));
	return (
		<div className="bet__counter">
			<div className="counter__wrapper">
				<button className="counter__button">
					<svg width={20} height={20} onClick={() => changeAmount("decrement")}>
						<use href="./img/icons/sprite.svg#minus-bet-slip"></use>
					</svg>
				</button>
				<input
					inputMode="decimal"
					className="counter__input"
					type="text"
					value={amount || ""}
					onChange={(e) => onChangeInput(e)}
				/>
				<button className="counter__button">
					<svg width={20} height={20} onClick={() => changeAmount("increment")}>
						<use href="./img/icons/sprite.svg#plus-bet-slip"></use>
					</svg>
				</button>
			</div>
			<button className="counter__max-bet">Max Bet</button>
		</div>
	);
}

export default BetSlipOddCounter;
