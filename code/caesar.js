export const caesar = (word, shift) => {
  let tmp = [...word];
  for (let i = 0; i < tmp.length; i++) {
    let num = tmp[i].charCodeAt(0);
    if (num >= 65 && num <= 90) {
      num -= 65 - shift;
      num %= 26;
      num += 65;
      tmp[i] = String.fromCharCode(num);
    } else if (num >= 97 && num <= 122) {
      num -= 97 - shift;
      num %= 26;
      num += 97;
      tmp[i] = String.fromCharCode(num);
    }
  }
  let result = tmp.join("");
  return result;
};

caesar("zzzz", 1);
