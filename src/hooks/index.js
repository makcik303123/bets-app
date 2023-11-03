import React from "react";

const amountAction = (amount, type) => {
	switch (type) {
		case "input":
			break;

		case "increment":
			return amount + 1;

		case "decrement":
			return amount-- < 0 ? 0 : amount;
	}
};

export default amountAction;
