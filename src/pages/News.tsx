import axios from "axios";
import React from "react";
import { apiKey } from "../api/api";

function News() {
	const [news, setNews] = React.useState([]);

	// const options = {
	// 	method: "GET",
	// 	url: "https://esports-news.p.rapidapi.com/news",
	// 	headers: {
	// 		"X-RapidAPI-Key": "0670c7e302mshfaa63a8e4756220p16548djsn7fc7708c61d3",
	// 		"X-RapidAPI-Host": "esports-news.p.rapidapi.com",
	// 	},
	// };

	// React.useEffect(() => {
	// 	async function fetchDataNews() {
	// 		try {
	// 			const response = await axios.request(options);
	// 			console.log(response.data);
	// 			// setNews(response)
	// 		} catch (error) {
	// 			console.error(error);
	// 		}
	// 	}
	// 	fetchDataNews();
	// }, []);

	React.useEffect(() => {
		async function fetchDataNews() {
			try {
				const newsResponce = await axios.get(
					`https://newsdata.io/api/1/news?apikey=${apiKey}&q=esport&language=en`
				);
				setNews(newsResponce.data.results);
			} catch (error) {
				alert("Error");
			}
		}
		fetchDataNews();
	}, []);

	console.log(news);

	const tags: string[] = [
		"all news",
		"dota 2",
		"cs go",
		"lol",
		"loot.bet",
		"games",
		"rainbow six",
		"valorant",
	];

	const [activeTag, setActiveTag] = React.useState(0);

	return (
		<div className="news">
			<div className="news-bar-container">
				<div className="news-bar">
					{tags.map((tag, i) => (
						<div
							key={i}
							onClick={() => setActiveTag(i)}
							className={
								activeTag === i ? "news-pimary-tag active" : "news-pimary-tag"
							}
						>
							<div className="tag-img-container">
								<img src={`./img/N${tag}.png`} alt="nAll" />
							</div>
							<span className="tag-title">{tag}</span>
						</div>
					))}
				</div>
			</div>
			<div className="news-content-container">
				<div className="news-content">
					{news.map((item: any, i) => (
						<div key={i} className="content-block-wrapper">
							<div className="content-block">
								<div className="block-img">
									<img src={item.image_url} alt="img-news" />
								</div>

								<div className="block-info">
									<div className="info-title">
										<div className="title-selectable">{item.title}</div>
										<div className="title-preview">{item.description}</div>
									</div>
									<div className="info-footer">
										<div className="info-data">21 марта 2023 года</div>
									</div>
									<div className="block-logo-game">
										<img src="img/dota2-news.png" alt="dota2-news" />
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default News;
