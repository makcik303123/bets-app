import { useState } from "react";
import "./History.scss";

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
        <div className="history-card">
          <div className="history-card__event">
            <div className="event__tableStake">
              <span className="label">Match up Winner</span>
              <span className="value">Team Liquid</span>
            </div>
            <div className="event__tableStake">
              <span>Total Stake</span>
              <span className="value">800.00RUB</span>
            </div>
            <div className="event__tableStake">
              <span>LOOT.BET pays</span>
              <span className="value">0.00RUB</span>
            </div>
          </div>
          <div className="history-card__result">
            <div className="result__status status-loss">Loss</div>
            <div className="result__details">details</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default History;
