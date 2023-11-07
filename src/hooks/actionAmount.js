import React from "react";

const actionAmount = (amount, type) => {
  switch (type) {
    case "input":
      return +amount.replace(/[^0-9.]/g, "").slice(0, 6);

    case "increment":
      return amount + 1;

    case "decrement":
      return amount-- < 1 ? 0 : amount;
  }
};

export default actionAmount;
