import { useState, useEffect } from "react";
import "./BetSlip.scss";
import BetSlipOdd from "../BetSlipOdd";
import BetSlipOddCounter from "../BetSlipOdd/BetSlipOddCounter";
import BetSlipOddTotal from "../BetSlipOdd/BetSlipOddTotal";
import { Button } from "../ui/";
import { updateUserData } from "../../firebase";

import { Scrollbars } from "react-custom-scrollbars-2";
import { useActions, useTypedSelector } from "../../hooks";

import validateBalance from "../../utils/helpers/validateBalance";
import { increment } from "firebase/firestore";

function BetSlip() {
  const [sendStatus, setSendStatus] = useState(null);

  const user = useTypedSelector((state) => state.getUserDataReducer.data);
  const uid = useTypedSelector((state) => state.authUidReducer.value);
  const { list, listType, amount } = useTypedSelector(
    (state) => state.betSlipListReducer
  );
  const { unloadBetSlipList, clearBetSlipList, changeListType, removeBetSlip } =
    useActions();

  useEffect(() => {
    const fetchData = async () => {
      if (user?.BetSlipList) {
        unloadBetSlipList(user.BetSlipList);
      } else {
        clearBetSlipList();
      }
    };

    fetchData();
  }, [user]);

  useEffect(() => {
    if (!uid || !user) {
      return;
    }
    if (list.length !== user.BetSlipList.length) {
      updateUserData(uid, { BetSlipList: list });
    }
  }, [uid, list]);

  if (!list.length) {
    return (
      <div className="no-bets">
        <div className="no-bets__wrapper">
          <svg className="no-bets__img" width="80" height="80">
            <use href="./img/icons/sprite.svg#no-bets-img"></use>
          </svg>
          <div className="no-bets__text">
            <span className="no-bets__title">Купон пуст</span>
            <span className="no-bets__message">
              Чтобы сделать ставку, выберите событие
            </span>
          </div>
        </div>
      </div>
    );
  }

  const switcherButtons = ["single", `multi(${list.length})`];

  const listHeight = () => {
    const betHeight = !!listType ? 96 : 195;
    return list.length > 3 ? 3 * betHeight : list.length * betHeight;
  };

  const multiplayer = list.reduce((acc, item) => acc * item.multiplayer, 1);

  const sendBetSlip = () => {
    const { balance, activeValue, historyBetsList } = user;
    const result = validateBalance(list, balance, activeValue);
    const { emptyArray, remainderArray, successfulArray, spendMoney } = result;
    const clearStatus = () => {
      setTimeout(() => setSendStatus(null), 5000);
    };

    if (successfulArray.length) {
      setSendStatus("Bet confirm!");
      successfulArray.forEach((el) => removeBetSlip(el.id));
      clearStatus();
      updateUserData(uid, {
        historyBetsList: {
          active: [...historyBetsList.active, ...successfulArray],
        },
        balance: increment(-Math.round(spendMoney * 100) / 100),
      });
      return;
    }

    if (remainderArray.length) {
      setSendStatus("You dont have money!");
      clearStatus();
      return;
    }
    if (emptyArray.length) {
      setSendStatus("Bet not intered");
      clearStatus();
    }

    console.log(result);
  };

  const checkDuplicate = () => {
    if (!listType) {
      return [];
    }

    const duplicateArray = [];

    list.forEach((obj) => {
      for (const iterator of list) {
        if (iterator.matchId === obj.matchId && iterator.id !== obj.id) {
          duplicateArray.push(obj.id);
        }
      }
    });
    return duplicateArray;
  };

  return (
    <div className="bet-slip">
      <div className="bet-slip__head head">
        <div className="head__wrapper">
          <div className="head__switcher">
            {switcherButtons.map((btn, i) => (
              <button
                className={"switcher__btn " + (listType === i ? "active" : "")}
                onClick={() => changeListType(i)}
                key={i}
              >
                {btn}
              </button>
            ))}
          </div>
          <button className="head__close" onClick={() => clearBetSlipList()}>
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
              invalid={checkDuplicate().includes(item.id)}
            />
          ))}
        </Scrollbars>
        <div>{sendStatus}</div>
        {!!listType && (
          <>
            <BetSlipOddCounter amount={amount} />
            <BetSlipOddTotal amount={amount} multiplayer={multiplayer} />
          </>
        )}
      </div>

      <div className="bet-slip__footer">
        {user.status ? (
          <Button onClick={() => sendBetSlip()}>Make a bet</Button>
        ) : (
          <Button>Login</Button>
        )}
      </div>
    </div>
  );
}

export default BetSlip;
