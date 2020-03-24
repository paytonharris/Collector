var nums = '1234567890';
var chars = 'abcdefghijkmnpqrstuvwxyz';
var syms = '$#';

var getRandomNum = () => {
  return nums[Math.round(Math.random() * 9)];
}

var getRandomChar = () => {
  return chars[Math.round(Math.random() * (chars.length - 1))];
}

var getRandomSym = () => {
  return syms[Math.round(Math.random() * (syms.length - 1))];
}

export function getPassword() {
  var password = "";

  password += getRandomChar();
  password += getRandomChar();
  password += getRandomChar();
  password += getRandomNum();
  password += getRandomNum();
  password += getRandomSym();
  password += getRandomChar();
  password += getRandomChar();

  return password;
}