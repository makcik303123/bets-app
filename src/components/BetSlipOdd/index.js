import React from "react";
import "./BetSlipOdd.scss";

import { useDispatch } from "react-redux";

import { removeBetSlip } from "../../redux/slices/betSlipListSlice";

function BetSlipOdd({ data }) {
	const { id, firstTeam, secondTeam, teamWinner, event, multiplayer } = data;
	const [amount, setAmount] = React.useState(0);
	const dispatch = useDispatch();

	const onChangeInput = (event) => {
		const value = event.target.value.replace(/[^0-9.]/g, "");
		setAmount(+value.slice(0, 6));
	};

	return (
		<div className="content__bet">
			<div className="bet__delete" onClick={() => dispatch(removeBetSlip(id))}>
				<svg width={20} height={20}>
					<use href="./img/icons/sprite.svg#delete-bet-slip"></use>
				</svg>
			</div>
			<div className="bet__information">
				<div className="information__header">
					{firstTeam + " vs " + secondTeam}
				</div>
				<div className="information__user-selected">
					<div className="user-selected__wrapper">
						<span className="user-selected__event">{event}</span>
						<span className="user-selected__team">{teamWinner}</span>
					</div>
					<span className="user-selected__multiplayer">{multiplayer}</span>
				</div>
			</div>
			<div className="bet__counter">
				<div className="counter__wrapper">
					<button className="counter__button">
						<svg width={20} height={20} onClick={() => setAmount(amount - 1)}>
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
						<svg width={20} height={20} onClick={() => setAmount(amount + 1)}>
							<use href="./img/icons/sprite.svg#plus-bet-slip"></use>
						</svg>
					</button>
				</div>
				<button className="counter__max-bet">Max Bet</button>
			</div>

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
		</div>
	);
}

export default BetSlipOdd;
