import React from "react";
import "./BetSlipOdd.scss";

function BetSlipOdd() {
  return (
    <div className="content__bet">
      <div className="bet__delete">
        <svg width={20} height={20}>
          <use href="./img/icons/sprite.svg#delete-bet-slip"></use>
        </svg>
      </div>
      <div className="bet__information">
        <div className="information__header">Liquid vs Complexity</div>
        <div className="information__user-selected">
          <div className="user-selected__wrapper">
            <span className="user-selected__event">match winner</span>
            <span className="user-selected__team">Complexity</span>
          </div>
          <span className="user-selected__multiplayer">1.73</span>
        </div>
      </div>
      <div className="bet__counter">
        <div className="counter__wrapper">
          <button className="counter__button">
            <svg width={20} height={20}>
              <use href="./img/icons/sprite.svg#minus-bet-slip"></use>
            </svg>
          </button>
          <input inputMode="decimal" className="counter__input" type="text" />
          <button className="counter__button">
            <svg width={20} height={20}>
              <use href="./img/icons/sprite.svg#plus-bet-slip"></use>
            </svg>
          </button>
        </div>
        <button className="counter__max-bet">Max Bet</button>
      </div>

      <div className="bet__total">
        <div className="total__row">
          <span className="total__title">Total Stake</span>
          <span className="total__value">0.00 RUB</span>
        </div>
        <div className="total__row">
          <span className="total__title">LOOT.BET will pay</span>
          <span className="total__value">0.00 RUB</span>
        </div>
      </div>
    </div>
  );
}

export default BetSlipOdd;
