import React from "react";
import BetSlip from "../BetSlip";

import "./Helper.scss";

function Helper() {
	const buttons = ["betslip", "history", "quest"];
	const [activeButton, setActiveButton] = React.useState(0);

	return (
		<div className="helper">
			<div className="switcher">
				{buttons.map((button, i) => (
					<button
						onClick={() => setActiveButton(i)}
						className={
							"switcher-button" + (activeButton === i ? " active" : "")
						}
					>
						{button}
					</button>
				))}
			</div>
			<div className="content">
				{(() => {
					switch (activeButton) {
						case 0:
							return <BetSlip />;
						case 1:
							return null;
						case 2:
							return null;
						default:
							return null;
					}
				})()}
			</div>
		</div>
	);
}

export default Helper;
