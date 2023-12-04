import { useState } from "react";
import "./History.scss";
import Card from "./Card";

function History() {
	const switcherButtons = ["All", "Pending", "Resulted"];

	const [active, setActive] = useState(0);

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
				<Card />
			</div>
		</div>
	);
}

export default History;
