var nums = '1234567890';
var chars = 'abcdefghijkmnpqrstuvwxyz';
var syms = "`~!@#$%^&*()-_=+\\|][}{'\";:/?.>,<";
var garbage = "1234567890abcdefghijklmnopqrstuvwxyz`~!@#$%^&*()-_=+\\|][}{'\";:/?.>,<";

var getRandomNum = () => {
  return nums[Math.round(Math.random() * 9)];
};

var getRandomChar = () => {
  return chars[Math.round(Math.random() * (chars.length - 1))];
};

var getRandomSym = () => {
  return syms[Math.round(Math.random() * (syms.length - 1))];
};

export function replaceRandomCharacter() {

}