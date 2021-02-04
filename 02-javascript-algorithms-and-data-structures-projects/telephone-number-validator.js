function telephoneCheck(str) {
  // chacking for parenthesis matching
  function checkParenthesis(str) {
    let opened = 0;
    let closed = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "(") {
        opened++;
      }
      if (str[i] === ")") {
        closed++;
      }
    }
    return opened === closed;
  }

  // calling func
  if (!checkParenthesis(str)) {
    return false;
  }

  // setting min and max lengths
  let maxLength = 11;
  let minLength = 10;

  // simple regex patterns to pull out all digits
  let regNum = /[0-9]/g;
  let onlyNumsArray = str.match(regNum);

  // simple regex pattern to pull out all special characters
  let regSpec = /\W/g;
  let onlySpecArray = str.match(regSpec);

  // checking for non accepted characters
  if (onlySpecArray) {
    onlySpecArray.forEach((char) => {
      if (char !== " " && char !== "-" && char !== "(" && char !== ")")
        return false;
    });
  }
  if (str.includes("?")) return false;
  if (str[0] === "-") return false;

  // checks for lengths
  if (onlyNumsArray.length > maxLength) return false;
  if (onlyNumsArray.length < minLength) return false;

  // check for starting number if max length
  // else if starting with ( must close after 3 digits
  if (onlyNumsArray.length === maxLength) {
    if (onlyNumsArray[0] !== "1") return false;
  } else {
    if (str[0] === "(" && str[4] !== ")") return false;
  }

  return true;
}