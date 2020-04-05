import React from 'react';
import GameConsole from './GameConsole';
import { makePaths } from './Helpers/helper'

let Styles = {
  labelStyle: {
    color: 'lightgray',
    backgroundColor: 'black',
    lineHeight: '24px',
    letterSpacing: '12px',
    userSelect: 'none'
  },
  divStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  inputStyle: {
    backgroundColor: 'black',
    fontFamily: 'VT323',
    color: 'lightgray',
    fontSize: '32px',
    borderStyle: 'hidden',
    paddingBottom: '10px',
    outline: 'none',
    width: '600px'
  },
  highlighted: {
    color: '#222',
    backgroundColor: '#eee',
    lineHeight: '24px',
    letterSpacing: '12px',
    userSelect: 'none'
  },
  playerHighlight: {
    color: '#222',
    backgroundColor: '#ffe0b5',// '#fadadd', //'#f9c0cc', 96787e, light green: d5dbc0, cedba2
    lineHeight: '24px',
    letterSpacing: '12px',
    userSelect: 'none'
  },
  container: {
    display: 'flex',
  },
  consoleSpacing: {
    width: '400px'
  }
};

let totalRowsToDisplay = 29;
let worldWidth = 145;

class Grid extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      worldText: makePaths(this.convertWorldTextToArrays(props.worldText)),
      divXY: {x: 100, y: 100, height: 100, width: 100},
      mouseCoords: {x: 0, y: 0},
      playerCoords: {x: 10, y: 10},
      playerCommands: [
        {name: '', func: () => {}},
        {name: "cout <<", func: this.cout},
        {name: "DEL", func: () => this.deleteChar()},
        {name: "replace([A-Za-z]), ' ');", func: () => this.replaceCharWithDot()}
      ],
      currentCommand: 0, // 0 is null
      currentInput: '',
      messages: [""]
    }
  }

  componentDidMount() {
    this.setState({...this.state, divXY: this.getCurrentDivPosition()});

    this.startConsoleMessages();

    document.getElementById("GameInput").focus();
  }

  startConsoleMessages = () => {
    setTimeout(() => {
      this.messageToConsole("Hi!");
    }, 1000);
    
    setTimeout(() => {
      this.messageToConsole("I'm an abandoned garbage collector process.");
    }, 3000);
    
    setTimeout(() => {
      this.messageToConsole("But that's ok!");
    }, 6000);

    setTimeout(() => {
      this.messageToConsole("Hint: Press 1 and 2 to change commands");
    }, 9000);

    setTimeout(() => {
      this.messageToConsole("Click on a character to execute the command!");
    }, 12000);
  };

  messageToConsole = (message) => {
    this.setState({...this.state, messages: [message, ...this.state.messages]});
  };

  convertWorldTextToArrays = (worldText) => {
    var worldTextArray = [];

    if (worldText.length < this.worldWidth * this.worldWidth) {
      console.log("The world is too small");

      return [""];
    }

    for (var i = 0; i <= worldWidth; i++) {
      worldTextArray.push(worldText.substring(i * worldWidth, (i+1) * worldWidth));
    }

    console.log(worldTextArray);

    return worldTextArray;
  }

  deleteChar = () => {
    var xToDel = this.state.mouseCoords.x + this.state.playerCoords.x - 14;
    var yToDel = this.state.mouseCoords.y + this.state.playerCoords.y - 14;

    if (xToDel >= 0 && yToDel >= 0 && xToDel <= 144 && yToDel <= 144) { //within bounds of area
      let currentRow = this.state.worldText[yToDel];

      let newRow = `${currentRow.substring(0, xToDel)}\u00a0${currentRow.substring(xToDel + 1)}`;

      var oldWorldText = this.state.worldText;

      oldWorldText[yToDel] = newRow;

      this.setState({ ...this.state, worldText: oldWorldText });
    }
  }

  replaceCharWithDot = () => {
    var xToDel = this.state.mouseCoords.x + this.state.playerCoords.x - 14;
    var yToDel = this.state.mouseCoords.y + this.state.playerCoords.y - 14;

    if (xToDel >= 0 && yToDel >= 0 && xToDel <= 144 && yToDel <= 144) { //within bounds of area
      let currentRow = this.state.worldText[yToDel];

      if (!currentRow[xToDel].match(/[a-zA-Z]/g)) return;

      let newRow = `${currentRow.substring(0, xToDel)}.${currentRow.substring(xToDel + 1)}`;

      var oldWorldText = this.state.worldText;

      oldWorldText[yToDel] = newRow;

      this.setState({ ...this.state, worldText: oldWorldText });
    }
  }

  cout = () => {
    //this.messageToConsole(this.state.currentInput);

    var xToDel = this.state.mouseCoords.x + this.state.playerCoords.x - 14;
    var yToDel = this.state.mouseCoords.y + this.state.playerCoords.y - 14;

    if (xToDel >= 0 && yToDel >= 0 && xToDel <= 144 && yToDel <= 144) { //within bounds of area
      let currentRow = this.state.worldText[yToDel];

      let newRow = `${currentRow.substring(0, xToDel)}${this.state.currentInput}${currentRow.substring(xToDel + 1)}`;

      var oldWorldText = this.state.worldText;

      oldWorldText[yToDel] = newRow;

      this.setState({ ...this.state, worldText: oldWorldText });
    }
  }

  getCurrentDivPosition = () => {
    var element = document.getElementById('GameBounds');
    var position = element.getBoundingClientRect();
    var currentX = position.left;
    var currentY = position.top;

    console.log(`THE DIV IS x: ${currentX}, y: ${currentY}, height: ${position.height}, width: ${position.width}`);

    return {x: currentX + 10, y: currentY + 3, height: position.height - 49.4, width: position.width}
  };

  trackMouseCoords = (event) => {
    var xCoord = Math.round(((event.clientX - this.state.divXY.x) / this.state.divXY.width) * totalRowsToDisplay);
    var yCoord = Math.round(((event.clientY - this.state.divXY.y) / this.state.divXY.height) * totalRowsToDisplay);

    if (xCoord !== this.state.mouseCoords.x || yCoord !== this.state.mouseCoords.y) {
      this.setState({...this.state, mouseCoords: {x: xCoord, y: yCoord}});
      //console.log(`current spot: ${JSON.stringify(this.state.mouseCoords)}`);
    }
  };

  getRowOfWorldText = (num) => {
    // a box is 29x29. 
    // the grid is 5x5 of boxes
    // total chars is 21025
    // 145x145 so the max your coords could be is 144,144!

    var outText = '\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0';

    let currentRowToRender = this.state.playerCoords.y - 14 + num;
    let currentColumnRange = { start: this.state.playerCoords.x - 14, stop: this.state.playerCoords.x + 15 }

    if (currentRowToRender < 0 || currentRowToRender >= this.worldWidth) {
      return outText;
    }

    let thisFullRow = this.state.worldText[this.state.playerCoords.y - 14 + num] || outText;
    
    if (currentColumnRange.start >= 0 && currentColumnRange.stop <= this.worldWidth) {
      outText = (thisFullRow.substring(currentColumnRange.start, currentColumnRange.stop));
    } else if (currentColumnRange.start >= 0) { // the start is good but the end is past the range
      outText = thisFullRow.substring(currentColumnRange.start) + outText;
      outText = outText.substring(0, 29);
    } else { // the start is before the start of the range
      outText = outText + thisFullRow.substring(0, currentColumnRange.stop);
      outText = outText.substring(outText.length - 29);
    }

    return outText.replace(/ /g, "\u00a0");
  };

  createLines = () => {
    var items = [];
  
    for (var i = 0; i < totalRowsToDisplay; i++) {
      if (this.state.mouseCoords.y === i) {
        items.push(<span style={Styles.labelStyle}>
          {this.createInnerContents(this.getRowOfWorldText(i), i)}
        </span>);
      } else if (i === (totalRowsToDisplay - 1) / 2) {
        items.push(<span style={Styles.labelStyle}>
          {this.createInnerContentsForCharacter(this.getRowOfWorldText(i))}
        </span>);
      } else {
        items.push(<span style={Styles.labelStyle}>{this.getRowOfWorldText(i)}</span>);
      }
    }
  
    return items;
  };

  createInnerContents = (text, i) => {
    let playerPos = (totalRowsToDisplay - 1) / 2;

    if (i === playerPos && playerPos !== this.state.mouseCoords.x) { // the player and mouse highlight are on the same row
      if (this.state.mouseCoords.x > playerPos) {
        var firstPart = text.substring(0, playerPos);
        var highlightedPlayer = text.substring(playerPos, playerPos + 1);
        var middlePart = text.substring(playerPos + 1, this.state.mouseCoords.x);
        var highlightedPart = text.substring(this.state.mouseCoords.x, this.state.mouseCoords.x + 1);
        var lastPart = text.substring(this.state.mouseCoords.x + 1);

        return <label>
          {firstPart}
            <span style={Styles.playerHighlight}>{highlightedPlayer}</span>
          {middlePart}
            <span style={Styles.highlighted}>{highlightedPart}</span>
          {lastPart}
        </label>;
      } else {
        var firstPart = text.substring(0, this.state.mouseCoords.x);
        var highlightedPart = text.substring(this.state.mouseCoords.x, this.state.mouseCoords.x + 1);
        var middlePart = text.substring(this.state.mouseCoords.x + 1, playerPos);
        var highlightedPlayer = text.substring(playerPos, playerPos + 1);
        var lastPart = text.substring(playerPos + 1);

        return <label>
          {firstPart}
            <span style={Styles.highlighted}>{highlightedPart}</span>
          {middlePart}
            <span style={Styles.playerHighlight}>{highlightedPlayer}</span>
          {lastPart}
        </label>;
      }
      
    } else {
      var firstPart = text.substring(0, this.state.mouseCoords.x);
      var highlightedPart = text.substring(this.state.mouseCoords.x, this.state.mouseCoords.x + 1);
      var secondPart = text.substring(this.state.mouseCoords.x + 1);

      return <label>{firstPart}<span style={Styles.highlighted}>{highlightedPart}</span>{secondPart}</label>;
    }
  };

  createInnerContentsForCharacter = (text) => {
    let centerCharSpot = (totalRowsToDisplay - 1) / 2;

    let firstPart = text.substring(0, centerCharSpot);
    let highlightedPart = text.substring(centerCharSpot, centerCharSpot + 1);
    let secondPart = text.substring(centerCharSpot + 1);
    return <label>{firstPart}<span style={Styles.playerHighlight}>{highlightedPart}</span>{secondPart}</label>;
  };

  handleMovement = (x, y) => {
    let xOfNewPos = this.state.playerCoords.x + x;
    let yOfNewPos = this.state.playerCoords.y + y;
    let currentRow = this.state.worldText[yOfNewPos];

    if (xOfNewPos < 0 || xOfNewPos > worldWidth || yOfNewPos < 0 || yOfNewPos > worldWidth) return;

    if (!currentRow[xOfNewPos].match(/[.,'`"_\-:;\u00a0 ]/g)) {
      this.messageToConsole("I don't think I can fit through there!");
      console.log("I don't think I can fit through there!");
    } else {
      this.setState({...this.state, playerCoords: {x: this.state.playerCoords.x + x, y: this.state.playerCoords.y + y}})
    }
  }

  handleClick = (event) => {
    console.log("clicked: " + this.state.mouseCoords.x + ' ' + this.state.mouseCoords.y);

    if (this.state.playerCommands[this.state.currentCommand]) {
      this.state.playerCommands[this.state.currentCommand].func()
    }

    //this.setState({ ...this.state, currentInput: '' })

    document.getElementById('GameInput').focus();
  }

  handleKey = (event) => {
    switch (event.key) {
      case 'w':
        console.log('w');
        this.handleMovement(0, -1);
        break;
      case 'a':
        console.log('a');
        this.handleMovement(-1, 0);
        break;
      case 's':
        console.log('s');
        this.handleMovement(0, 1);
        break;
      case 'd':
        console.log('d');
        this.handleMovement(1, 0);
        break;
      case '1': case'2': case'3': case'4': case'5': case'6': case'7': case'8': case'9': case'0':
        if (this.state.playerCommands.length > parseInt(event.key)) {
          this.setState({ ...this.state, currentCommand: parseInt(event.key) });
        }
        console.log(event.key);
        break;
      default:
        this.setState({ ...this.state, currentInput: event.key });
        console.log(event.key);
    }
  }

  getCommandText = () => {
    var outText = '';

    if (this.state.currentCommand === 0) return; 

    if (this.state.playerCommands[this.state.currentCommand]) {
      outText = this.state.playerCommands[this.state.currentCommand].name;

      if (this.state.currentCommand === 1) {
        outText += ` ${this.state.currentInput[this.state.currentInput.length - 1] || ''}`;
      } 
      
      outText += ` ${this.state.mouseCoords.x + this.state.playerCoords.x - 14},${this.state.mouseCoords.y + this.state.playerCoords.y - 14}`;
    }

    return outText;
  }

  render() {
    return (
      <div style={Styles.container}>
        <div style={Styles.consoleSpacing}/>
        <div id='GameBounds' onClick={this.handleClick} onMouseMove={this.trackMouseCoords} style={Styles.divStyle}>
          {this.createLines()}
          <input 
            id='GameInput' 
            style={Styles.inputStyle} 
            onKeyPress={this.handleKey}
            readOnly 
            autoFocus 
            value={this.getCommandText()}
          />
        </div>
        <GameConsole messages={this.state.messages}/>
      </div>
    );
  }
}

export default Grid;
