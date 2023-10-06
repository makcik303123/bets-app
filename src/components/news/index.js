import React from "react";

function BlockNews({ data }) {
	return (
		<div className="content-block-wrapper">
			<div className="content-block">
				<div className="block-img">
					<img src="img/img-news.jpg" alt="img-news" />
				</div>
				<div className="block-info">
					<div className="info-title">
						<div className="title-selectable">
							{data.title.slice(0, 50)}
							{data.title.length > 50 ? "..." : ""}
						</div>
						<div className="title-preview">
							{data.description.slice(0, 50)}...
						</div>
					</div>
					<div className="info-footer">
						<div className="info-data">{data.pubDate}</div>
					</div>
					<div className="block-logo-game">
						<img src="img/dota2-news.png" alt="dota2-news" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default BlockNews;
