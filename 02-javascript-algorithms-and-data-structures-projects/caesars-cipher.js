function rot13(str) {
  // setting ascii bounds for uppercase letters
  let low = 64;
  let high = 90;
  let decoded = "";
  // since this is ROT13
  let key = 13;

  // main loop to decipher
  for (let i = 0; i < str.length; i++) {
    // converting to ascii
    let inAscii = str[i].charCodeAt();
    if (inAscii > low && inAscii <= high) {
      let rotated = inAscii - key;
      if (rotated <= low) {
        rotated = high - (low - rotated);
      }
      // converting back to char
      decoded += String.fromCharCode(rotated);
    } else {
      decoded += str[i];
    }
  }
  return decoded;
}