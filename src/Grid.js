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
    paddingBottom: '10px'
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

let totalLines = 29;
let lengthOfGrid = 29;

class Grid extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      worldText: props.worldText,
      divXY: {x: 100, y: 100, height: 100, width: 100},
      mouseCoords: {x: 0, y: 0},
      playerCoords: {x: 50, y: 50}
    }
  }

  componentDidMount() {
    this.setState({...this.state, divXY: this.getCurrentDivPosition()});
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
    var xCoord = Math.round(((event.clientX - this.state.divXY.x) / this.state.divXY.width) * totalLines);
    var yCoord = Math.round(((event.clientY - this.state.divXY.y) / this.state.divXY.height) * totalLines);

    if (xCoord !== this.state.mouseCoords.x || yCoord !== this.state.mouseCoords.y) {
      this.setState({...this.state, mouseCoords: {x: xCoord, y: yCoord}});
      //console.log(`current spot: ${JSON.stringify(this.state.mouseCoords)}`);
    }
  };

  parseText = (num) => {
    // a box is 29x29. 
    // the grid is 5x5 of boxes
    // total chars is 21025
    // 145x145 so the max your coords could be is 144,144!

    let worldWidth = 145;

    var outText = '⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅';
    //let thisFullRow = this.state.worldText.substring(num * worldWidth, num * worldWidth + worldWidth);

    let currentRowToRender = this.state.playerCoords.y - 14 + num;
    let currentColumnRange = {start: this.state.playerCoords.x - 14, stop: this.state.playerCoords.x + 15}

    let thisFullRow = this.state.worldText.substring(currentRowToRender * worldWidth, currentRowToRender * worldWidth + worldWidth);
    
    if (currentColumnRange.start >= 0 && currentColumnRange.stop <= worldWidth) {
      outText = (thisFullRow.substring(currentColumnRange.start, currentColumnRange.stop));
    } else {
      // do fancy editing of outText here.
    }

    return outText.replace(/ /g, '⋅');
  };

  createLines = () => {
    var items = [];
  
    for (var i = 0; i < totalLines; i++) {
      if (this.state.mouseCoords.y === i) {
        items.push(<label style={Styles.labelStyle}>
          {this.createInnerContents(this.parseText(i))}
        </label>);
      } else {
        items.push(<label style={Styles.labelStyle}>{this.parseText(i)}</label>);
      }
    }
  
    return items;
  };

  createInnerContents = (text) => {
    let firstPart = text.substring(0, this.state.mouseCoords.x);
    let highlightedPart = text.substring(this.state.mouseCoords.x, this.state.mouseCoords.x + 1);
    let secondPart = text.substring(this.state.mouseCoords.x + 1);
    return <label>{firstPart}<span style={Styles.highlighted}>{highlightedPart}</span>{secondPart}</label>;
  };

  handleMovement = (x, y) => {
    this.setState({...this.state, playerCoords: {x: this.state.playerCoords.x + x, y: this.state.playerCoords.y + y}})
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
      default:
        console.log('NA');
    }
  }

  render() {
    return (
      <div id='GameBounds' onMouseMove={this.trackMouseCoords} style={Styles.divStyle}>
        {this.createLines()}
        <input id='GameInput' style={Styles.inputStyle} onKeyPress={this.handleKey} readOnly value=">"></input>
      </div>
    );
  }
}

export default Grid;
