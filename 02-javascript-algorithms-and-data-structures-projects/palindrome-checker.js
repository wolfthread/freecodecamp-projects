// Return true if the given string is a palindrome. Otherwise, return false.

function palindrome(str) {
  str = str.toLowerCase();

  // grabbing only letters and numbers and storing in variable
  let regex = /[a-z0-9]/gi;
  let splittedStr = str.match(regex);

  // store forward string
  let cleanedStrFwd = splittedStr.join("");

  // reverse array
  splittedStr.reverse();

  // store backward string
  let cleanedStrBwd = splittedStr.join("");

  // compare and return
  return cleanedStrFwd === cleanedStrBwd;
}

console.log(palindrome("eye"));