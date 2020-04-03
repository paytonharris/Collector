import React from 'react';

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
    backgroundColor: '#ccc',
    lineHeight: '24px',
    letterSpacing: '12px',
    userSelect: 'none'
  }
};

let totalRowsToDisplay = 29;
let worldWidth = 145;

class Grid extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      worldText: this.convertWorldTextToArrays(props.worldText),
      divXY: {x: 100, y: 100, height: 100, width: 100},
      mouseCoords: {x: 0, y: 0},
      playerCoords: {x: 50, y: 50},
      playerCommands: [
        {name: '', func: () => {}},
        {name: "cout <<", func: this.cout},
        {name: "replace([A-Za-z]), '.');", func: () => this.replaceCharWithDot()}
      ],
      currentCommand: 0, // 0 is null
      currentInput: ''
    }
  }

  componentDidMount() {
    this.setState({...this.state, divXY: this.getCurrentDivPosition()});

    document.getElementById("GameInput").focus();
  }

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
    console.log("i wrote " + this.state.currentInput);
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

    var outText = '.............................';

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

    return outText.replace(/ /g, '.');
  };

  createLines = () => {
    var items = [];
  
    for (var i = 0; i < totalRowsToDisplay; i++) {
      if (this.state.mouseCoords.y === i) {
        items.push(<label style={Styles.labelStyle}>
          {this.createInnerContents(this.getRowOfWorldText(i), i)}
        </label>);
      } else if (i === (totalRowsToDisplay - 1) / 2) {
        items.push(<label style={Styles.labelStyle}>
          {this.createInnerContentsForCharacter(this.getRowOfWorldText(i))}
        </label>);
      } else {
        items.push(<label style={Styles.labelStyle}>{this.getRowOfWorldText(i)}</label>);
      }
    }
  
    return items;
  };

  createInnerContents = (text, i) => {
    let playerPos = (totalRowsToDisplay - 1) / 2;

    if (i === playerPos && playerPos !== this.state.mouseCoords.x) { // the player and mouse highlight are on the same row
      if (this.state.mouseCoords.x > playerPos) {
        let firstPart = text.substring(0, playerPos);
        let highlightedPlayer = text.substring(playerPos, playerPos + 1);
        let middlePart = text.substring(playerPos + 1, this.state.mouseCoords.x);
        let highlightedPart = text.substring(this.state.mouseCoords.x, this.state.mouseCoords.x + 1);
        let lastPart = text.substring(this.state.mouseCoords.x + 1);

        return <label>
          {firstPart}
            <span style={Styles.playerHighlight}>{highlightedPlayer}</span>
          {middlePart}
            <span style={Styles.highlighted}>{highlightedPart}</span>
          {lastPart}
        </label>;
      } else {
        let firstPart = text.substring(0, this.state.mouseCoords.x);
        let highlightedPart = text.substring(this.state.mouseCoords.x, this.state.mouseCoords.x + 1);
        let middlePart = text.substring(this.state.mouseCoords.x + 1, playerPos);
        let highlightedPlayer = text.substring(playerPos, playerPos + 1);
        let lastPart = text.substring(playerPos + 1);

        return <label>
          {firstPart}
            <span style={Styles.highlighted}>{highlightedPart}</span>
          {middlePart}
            <span style={Styles.playerHighlight}>{highlightedPlayer}</span>
          {lastPart}
        </label>;
      }
      
    } else {
      let firstPart = text.substring(0, this.state.mouseCoords.x);
      let highlightedPart = text.substring(this.state.mouseCoords.x, this.state.mouseCoords.x + 1);
      let secondPart = text.substring(this.state.mouseCoords.x + 1);

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
    this.setState({...this.state, playerCoords: {x: this.state.playerCoords.x + x, y: this.state.playerCoords.y + y}})
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
        this.setState({ ...this.state, currentInput: this.state.currentInput + event.key });
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
    );
  }
}

export default Grid;
