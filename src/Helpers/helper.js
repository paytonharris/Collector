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

var makePathFromXToY = (arrayOfText, startingX, endingX, startingY, endingY) => {
  for (var y = startingY; y <= endingY; y++) {
    for (var x = startingX; x <= endingX; x++) {
      arrayOfText[y] = `${arrayOfText[y].substring(0, x)} ${arrayOfText[y].substring(x + 1)}`;
    }
  }
}

export var writeWordAtXY = (text, arrayOfText, x, y) => {
  arrayOfText[y] = `${arrayOfText[y].substring(0, x)}${text}${arrayOfText[y].substring(x + text.length)}`;
}

export function makePaths(arrayOfText) {
  var startingCoords = { x: 30, y: 30 };

  var nextX = startingCoords.x;
  var nextY = startingCoords.y;

  // for (var i = 0; i < 100; i++) {
  //   nextX = nextX + 1;

  //   arrayOfText[nextY] = `${arrayOfText[nextY].substring(0, nextX)} ${arrayOfText[nextY].substring(nextX + 1)}`;
  // }

  makePathFromXToY(arrayOfText, 20, 40, 68, 70);
  makePathFromXToY(arrayOfText, 29, 31, 37, 70);
  makePathFromXToY(arrayOfText, 26, 34, 50, 56);
  makePathFromXToY(arrayOfText, 32, 40, 37, 39);
  makePathFromXToY(arrayOfText, 41, 41, 27, 28);
  makePathFromXToY(arrayOfText, 41, 41, 30, 39);
  makePathFromXToY(arrayOfText, 35, 48, 15, 26);
  makePathFromXToY(arrayOfText, 49, 51, 17, 18);
  makePathFromXToY(arrayOfText, 53, 79, 17, 18);
  makePathFromXToY(arrayOfText, 74, 85, 11, 23);
  
  makePathFromXToY(arrayOfText, 79, 80, 24, 37);
  makePathFromXToY(arrayOfText, 70, 85, 38, 49);
  makePathFromXToY(arrayOfText, 90, 142, 38, 49);

  writeWordAtXY('DEL', arrayOfText, 38, 37);
  writeWordAtXY('DEL', arrayOfText, 27, 53);
  writeWordAtXY('cin >>', arrayOfText, 37, 19);
  writeWordAtXY('cout <<', arrayOfText, 36, 22);

  writeWordAtXY('Take this:', arrayOfText, 75, 13);
  writeWordAtXY('*', arrayOfText, 79, 15);
  writeWordAtXY('cin >>', arrayOfText, 76, 21);
  
  writeWordAtXY('if(" "=="*")', arrayOfText, 71, 40);
  writeWordAtXY('"#"=" ";', arrayOfText, 73, 41);

  writeWordAtXY(' ## ', arrayOfText, 86, 43);
  writeWordAtXY(' ## ', arrayOfText, 86, 44);
  
  writeWordAtXY('YOU WIN!', arrayOfText, 100, 44);
  writeWordAtXY('CONGRATULATIONS!', arrayOfText, 125, 44);

  return arrayOfText;
}