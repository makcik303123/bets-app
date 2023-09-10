import axios from "axios";
import React from "react";
import { apiKey } from "../api/api";

function News() {
  const [news, setNews] = React.useState([]);

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
  const tags = [
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
          <div className="content-block-wrapper">
            <div className="content-block">
              <div className="block-img">
                <img src="img/img-news.jpg" alt="img-news" />
              </div>
              <div className="block-info">
                <div className="info-title">
                  <div className="title-selectable">
                    Как играть за Timbersow: Гайд по Dota 2
                  </div>
                  <div className="title-preview">
                    Гайд по герою Timbersow в Dota 2
                  </div>
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
          <div className="content-block-wrapper">
            <div className="content-block">
              <div className="block-img">
                <img src="img/img-news.jpg" alt="img-news" />
              </div>
              <div className="block-info">
                <div className="info-title">
                  <div className="title-selectable">
                    Как играть за Timbersow: Гайд по Dota 2
                  </div>
                  <div className="title-preview">
                    Гайд по герою Timbersow в Dota 2
                  </div>
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
          <div className="content-block-wrapper">
            <div className="content-block">
              <div className="block-img">
                <img src="img/img-news.jpg" alt="img-news" />
              </div>
              <div className="block-info">
                <div className="info-title">
                  <div className="title-selectable">
                    Как играть за Timbersow: Гайд по Dota 2
                  </div>
                  <div className="title-preview">
                    Гайд по герою Timbersow в Dota 2
                  </div>
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
          <div className="content-block-wrapper">
            <div className="content-block">
              <div className="block-img">
                <img src="img/img-news.jpg" alt="img-news" />
              </div>
              <div className="block-info">
                <div className="info-title">
                  <div className="title-selectable">
                    Как играть за Timbersow: Гайд по Dota 2
                  </div>
                  <div className="title-preview">
                    Гайд по герою Timbersow в Dota 2
                  </div>
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
        </div>
      </div>
    </div>
  );
}

export default News;
