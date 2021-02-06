function checkCashRegister(price, cash, cid) {
  // reversing cid for calculations
  cid.reverse();

  // object to return in certain cases
  const INSUFFICIENT = {
    status: "INSUFFICIENT_FUNDS",
    change: [],
  };

  const CLOSED = {
    status: "CLOSED",
    change: [
      ["PENNY", 0],
      ["NICKEL", 0],
      ["DIME", 0],
      ["QUARTER", 0],
      ["ONE", 0],
      ["FIVE", 0],
      ["TEN", 0],
      ["TWENTY", 0],
      ["ONE HUNDRED", 0],
    ],
  };

  const DENOM_NAMES = [
    "ONE HUNDRED",
    "TWENTY",
    "TEN",
    "FIVE",
    "ONE",
    "QUARTER",
    "DIME",
    "NICKEL",
    "PENNY",
  ];

  const DENOM_VALUES = [10000, 2000, 1000, 500, 100, 25, 10, 5, 1];

  // getting total of an array
  function totalCashRegister(reg) {
    let tot = 0;
    reg.forEach((element) => {
      tot += element[1];
    });
    return tot;
  }

  // to fix float issues after calculations
  function parseVal(val) {
    return parseFloat(val.toFixed(2));
  }

  function coinChangeCalc(changeDue, denomNames, denomValues, cid) {
    var changeToGive = [];

    var amount;

    for (let i = 0; i < denomValues.length; i++) {
      amount = Math.floor(changeDue / denomValues[i]);
      let currentValue = (amount * denomValues[i]) / 100;
      let inRegister = cid[i][1];
      let haveEnough = inRegister >= currentValue;
      if (amount > 0 && haveEnough) {
        changeToGive.push([denomNames[i], currentValue]);
        changeDue -= parseVal(currentValue * 100);
      } else if (amount > 0) {
        changeToGive.push([denomNames[i], inRegister]);
        changeDue -= parseVal(inRegister * 100);
      }
    }

    return changeToGive;
  }

  // getting change amount to give out converted in cents
  let changedue = (cash - price) * 100;

  // initial check
  if (price > cash) return INSUFFICIENT;

  // check for available funds
  if (totalCashRegister(cid) * 100 < changedue) {
    return INSUFFICIENT;
  }

  // object to return
  let change = {
    status: "OPEN",
    change: [],
  };

  // getting array of change to hand out
  let changeToGive = coinChangeCalc(changedue, DENOM_NAMES, DENOM_VALUES, cid);

  if (totalCashRegister(changeToGive) * 100 < changedue) return INSUFFICIENT;

  if (totalCashRegister(changeToGive) === totalCashRegister(cid)) {
    changeToGive.reverse();
    for (let i = 0; i < changeToGive.length; i++) {
      if (changeToGive[1] !== 0) {
        CLOSED.change[i][1] = changeToGive[i][1];
      }
    }
    return CLOSED;
  }

  //setting change values to object to return
  change.change = changeToGive;

  return change;
}

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
);
