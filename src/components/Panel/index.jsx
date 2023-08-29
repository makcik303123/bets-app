import React from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import Game from "../Game";
import "./Panel.scss";

function Panel({ dataGames }) {
	return (
		<div className="table-container container">
			<div className="table-head">
				<div className="table-row_left">
					<span className=" table-head__date">Date</span>
					<span className=" table-head__game">Game</span>
				</div>
				<div className="table-row_center">
					<div className="select">
						<span className="table-head__market">Select</span>
					</div>
					<div className="teamLeft">
						<span>1</span>
					</div>
					<div className="draw">
						<span className="table-head__draw">Draw</span>
					</div>
					<div className="teamRight">
						<span>2</span>
					</div>
				</div>
				<div className="table-row_right">
					<span className="table-head__more">More</span>
				</div>
			</div>

			<div className="table-content">
				<Scrollbars
					style={{ height: 504 }}
					autoHide
					autoHideTimeout={1000}
					autoHideDuration={200}
					renderThumbVertical={(props) => (
						<div {...props} className="thumb-vertical" />
					)}
				>
					{dataGames.map((dataGame) => (
						<Game dataGame={dataGame} />
					))}
				</Scrollbars>
			</div>
		</div>
	);
}

export default Panel;
