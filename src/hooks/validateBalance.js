import { arrayValues } from "../variablres/variables";

const validateBalance = (list, balance, activeValue) => {
	console.log(balance, "balance");

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
		console.log(balance);
	};

	list.forEach((obj) => handlerList(obj));

	return { remainderArray, successfulArray, emptyArray, spendMoney };
};

export default validateBalance;
