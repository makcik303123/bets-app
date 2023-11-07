import React from "react";
import { useDispatch } from "react-redux";
import { handlerAmount } from "../../../redux/slices/betSlipListSlice";

function BetSlipOddCounter({ amount, index = null }) {
  const dispatch = useDispatch();

  //   dispatch(changeAmount("increment"));

  const eventHandler = (e) => {
    console.log(e);
  };

  return (
    <div className="bet__counter">
      <div className="counter__wrapper">
        <button
          typeattribute="decrement"
          className="counter__button"
          onClick={(e) => eventHandler(e)}
        >
          <svg width={20} height={20}>
            <use href="./img/icons/sprite.svg#minus-bet-slip"></use>
          </svg>
        </button>
        <input
          typeattribute="input"
          inputMode="decimal"
          className="counter__input"
          type="text"
          value={amount || ""}
          onChange={(e) =>
            dispatch(
              handlerAmount({ type: "input", index, amount: e.target.value })
            )
          }
        />
        <button
          typeattribute="increment"
          className="counter__button"
          onClick={() =>
            dispatch(handlerAmount({ type: "increment", index, amount }))
          }
        >
          <svg width={20} height={20}>
            <use href="./img/icons/sprite.svg#plus-bet-slip"></use>
          </svg>
        </button>
      </div>
      <button className="counter__max-bet">Max Bet</button>
    </div>
  );
}

export default BetSlipOddCounter;
