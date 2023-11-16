import { arrayValues } from "../variablres/variables";

const validateBalance = (list, balance, activeValue) => {
	console.log(balance, "balance");

	const { multiplayer } = arrayValues[activeValue];

	let result = balance;

	list.forEach((obj) => {
		const amount = obj.amount / multiplayer;

		console.log(amount, "amount");

		result = result - amount;
	});

	return result;
};

export default validateBalance;
