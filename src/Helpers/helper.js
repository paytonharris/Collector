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

  return arrayOfText
}

export function makePaths(arrayOfText) {
  var startingCoords = { x: 30, y: 30 };

  var nextX = startingCoords.x;
  var nextY = startingCoords.y;

  for (var i = 0; i < 100; i++) {
    nextX = nextX + 1;

    arrayOfText[nextY] = `${arrayOfText[nextY].substring(0, nextX)} ${arrayOfText[nextY].substring(nextX + 1)}`;
  }

  makePathFromXToY(arrayOfText, 20, 40, 20, 40);

  return arrayOfText;
}