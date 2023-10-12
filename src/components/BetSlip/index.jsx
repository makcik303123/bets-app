import React from "react";
import "./BetSlip.scss";
import BetSlipOdd from "../BetSlipOdd";

import { Scrollbars } from "react-custom-scrollbars-2";
import { useSelector, useDispatch } from "react-redux";

import { clearBetSlipList } from "../../redux/slices/betSlipListSlice";

function BetSlip() {
	const list = useSelector((state) => state.betSlipListReducer.list);
	const dispatch = useDispatch();

	if (!list.length) {
		return <div className="">not found</div>;
	}

	return (
		<div className="bet-slip">
			<div className="bet-slip__head head">
				<div className="head__wrapper">
					<div className="head__switcher">
						<button className="switcher__btn active">single</button>
						<button className="switcher__btn">multi(2)</button>
					</div>
					<button
						className="head__close"
						onClick={() => dispatch(clearBetSlipList())}
					>
						<svg className="medal" width="20" height="20">
							<use href="./img/icons/sprite.svg#delete-bet-slip"></use>
						</svg>
					</button>
				</div>
				<div className="auto-accept">
					<div className="auto-accept__btn">
						<i className="btn__checked active"></i>
						<span className="btn__description">Accept all odds changes</span>
					</div>
					<div className="auto-accept__info">
						<svg className="medal" width="20" height="20">
							<use href="./img/icons/sprite.svg#information-bet-slip"></use>
						</svg>
					</div>
				</div>
			</div>

			<div className="bet-slip__content">
				<Scrollbars
					style={{ height: "100%" }}
					autoHide
					autoHideTimeout={1000}
					autoHideDuration={200}
					renderThumbVertical={(props) => (
						<div {...props} className="thumb-vertical" />
					)}
					renderView={(props) => <div {...props} className="view" />}
				>
					{list.map((item) => (
						<BetSlipOdd data={item} key={item.id} />
					))}
				</Scrollbars>
			</div>

			<div className="bet-slip__footer">
				<button className="button">Make a bet</button>
			</div>
		</div>
	);
}

export default BetSlip;
