// Convert the given number into a roman numeral.

function convertToRoman(num) {
  // setting roman numerals key
  const etTuBrute = {
    1: {
      U: "I",
      D: "X",
      C: "C",
    },
    2: {
      U: "II",
      D: "XX",
      C: "CC",
    },
    3: {
      U: "III",
      D: "XXX",
      C: "CCC",
    },
    4: {
      U: "IV",
      D: "XL",
      C: "CD",
    },
    5: {
      U: "V",
      D: "L",
      C: "D",
    },
    6: {
      U: "VI",
      D: "LX",
      C: "DC",
    },
    7: {
      U: "VII",
      D: "LXX",
      C: "DCC",
    },
    8: {
      U: "VIII",
      D: "LXXX",
      C: "DCCC",
    },
    9: {
      U: "IX",
      D: "XC",
      C: "CM",
    },
  };

  // placeholders
  let allRomanParts = [];
  let numToArray = [];
  const getMarker = {
    1: "U",
    2: "D",
    3: "C",
  };

  // main operation
  let numToString = num.toString();
  for (let i = 0; i < numToString.length; i++) {
    numToArray.push(numToString[i]);
  }

  // treating thousands first
  if (numToArray.length > 3) {
    allRomanParts.push("M".repeat(parseInt(numToArray[0])));
    numToArray.shift();
  }

  while (numToArray.length >= 1) {
    let thisNum = numToArray[0];
    if (thisNum !== "0") {
      let marker = getMarker[numToArray.length];
      let romanPart = etTuBrute[parseInt(thisNum)][marker];
      allRomanParts.push(romanPart);
      numToArray.shift();
    } else {
      numToArray.shift();
    }
  }

  // returning array as a string
  return allRomanParts.join("");
}

convertToRoman(2);