import { useState } from "react";
import "./BetSlip.scss";
import BetSlipOdd from "../BetSlipOdd";
import BetSlipOddCounter from "../BetSlipOdd/BetSlipOddCounter";
import BetSlipOddTotal from "../BetSlipOdd/BetSlipOddTotal";

import { Scrollbars } from "react-custom-scrollbars-2";
import { useSelector, useDispatch } from "react-redux";

import {
  clearBetSlipList,
  changeListType,
} from "../../redux/slices/betSlipListSlice";

function BetSlip() {
  const { list, listType } = useSelector((state) => state.betSlipListReducer);
  const dispatch = useDispatch();

  console.log(list);

  const switcherButtons = ["single", `multi(${list.length})`];

  const listHeight = () => {
    const betHeight = !!listType ? 90 : 195;
    return list.length > 3 ? 3 * betHeight : list.length * betHeight;
  };

  if (!list.length) {
    return <div className="">not found</div>;
  }

  return (
    <div className="bet-slip">
      <div className="bet-slip__head head">
        <div className="head__wrapper">
          <div className="head__switcher">
            {switcherButtons.map((btn, i) => (
              <button
                className={"switcher__btn " + (listType === i ? "active" : "")}
                onClick={() => dispatch(changeListType(i))}
                key={i}
              >
                {btn}
              </button>
            ))}
          </div>
          <button
            className="head__close"
            onClick={() => dispatch(clearBetSlipList())}
          >
            <svg className="medal" width="20" height="20">
              <use href="./img/icons/sprite.svg#delete-bet-slip"></use>
            </svg>
          </button>
        </div>
        <div className="auto-accept">
          <div className="auto-accept__btn">
            <i className="btn__checked active"></i>
            <span className="btn__description">Accept all odds changes</span>
          </div>
          <div className="auto-accept__info">
            <svg className="medal" width="20" height="20">
              <use href="./img/icons/sprite.svg#information-bet-slip"></use>
            </svg>
          </div>
        </div>
      </div>

      <div className="bet-slip__content">
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
          {list.map((item, index) => (
            <BetSlipOdd
              index={index}
              data={item}
              key={item.id}
              listType={listType}
            />
          ))}
          {/* {!!listType || <BetSlipOddCounter amount={amount} setAmount={setAmount} onChangeInput={onChangeInput}/> }
				{!!listType || <BetSlipOddTotal amount={amount} multiplayer={multiplayer}/>} */}
        </Scrollbars>
      </div>

      <div className="bet-slip__footer">
        <button className="button">Make a bet</button>
      </div>
    </div>
  );
}

export default BetSlip;
