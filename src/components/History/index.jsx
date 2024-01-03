import { useState } from "react";
import "./History.scss";
import Card from "./Card";
import { Scrollbars } from "react-custom-scrollbars-2";
import { useSelector, useDispatch } from "react-redux";

function History() {
	const [active, setActive] = useState(0);

	const user = useSelector((state) => state.getUserDataReducer.data);
	const { historyBetsList } = useSelector(
		(state) => state.getUserDataReducer.data
	);

	if (!user) {
		return;
	}

	const switcherButtons = ["All", "Pending", "Resulted"];

	let itemsCard = [...historyBetsList.active].reverse();

	if (active === 2) {
		itemsCard = [];
	}

	console.log(!!itemsCard);

	const listHeight = () => {
		const betHeight = 138;
		return itemsCard.length > 3 ? 3 * betHeight : itemsCard.length * betHeight;
	};

	return (
		<div className="history">
			<div className="history__filter">
				<div className="filter__container">
					<div className="filter__switcher">
						{switcherButtons.map((btn, i) => (
							<button
								className={"switcher__btn " + (active === i ? "active" : "")}
								key={i}
								onClick={() => setActive(i)}
							>
								{btn}
							</button>
						))}
					</div>
				</div>
			</div>
			<div className="history__list">
				{!!itemsCard.length && (
					<Scrollbars
						style={{ height: listHeight() + "px" }}
						autoHide
						autoHideTimeout={1000}
						autoHideDuration={200}
						renderThumbVertical={(props) => (
							<div {...props} className="thumb-vertical" />
						)}
						renderView={(props) => <div {...props} className="view" />}
					>
						{itemsCard.map((card, i) => (
							<Card key={i} data={card} />
						))}
					</Scrollbars>
				)}
				{!!itemsCard.length || <span>List is clear</span>}
			</div>
		</div>
	);
}

export default History;
