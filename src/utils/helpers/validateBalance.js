import { arrayValues } from "../constants/variables";

const validateBalance = (list, balance, activeValue) => {
  const remainderArray = [];
  const successfulArray = [];
  const emptyArray = [];
  let spendMoney = 0;

  const { multiplayer } = arrayValues[activeValue];

  const handlerList = (object) => {
    const amount = object.amount / multiplayer;

    if (amount === 0) {
      emptyArray.push(object);
      return;
    }

    if (balance >= amount) {
      successfulArray.push(object);
      balance = balance - amount;
      spendMoney += amount;
    } else {
      remainderArray.push(object);
    }
  };

  list.forEach((obj) => handlerList(obj));

  return { remainderArray, successfulArray, emptyArray, spendMoney };
};

export default validateBalance;
