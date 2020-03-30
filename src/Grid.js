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
  }
};

let totalLines = 30;
let lengthOfGrid = 30;

let charHeight = 14.0;
let charWidth = 14.0;

class Grid extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      worldText: props.worldText,
      divXY: {x: 100, y: 100, height: 100, width: 100},
      mouseCoords: {x: 0, y: 0}
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

    return {x: currentX + 10, y: currentY, height: position.height - 49.4, width: position.width}
  };

  trackMouseCoords = (event) => {
    var xCoord = Math.round(((event.clientX - this.state.divXY.x) / this.state.divXY.width) * totalLines);
    var yCoord = Math.round(((event.clientY - this.state.divXY.y) / this.state.divXY.height) * totalLines);

    //var yCoord = Math.round((event.clientY - this.state.divXY.y) / charHeight);

    this.setState({...this.state, mouseCoords: {x: xCoord, y: yCoord}});

    //console.log(`current spot: ${JSON.stringify(this.state.mouseCoords)}`);
  };

  parseText = (num) => {
    var outText = '';

    var text = this.state.worldText;
  
    if (text && text.length >= num * lengthOfGrid + lengthOfGrid) {
      outText = text.substring(num * lengthOfGrid, num * lengthOfGrid + lengthOfGrid)
    }
  
    return outText;
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

  render() {
    return (
      <div id='GameBounds' onMouseMove={this.trackMouseCoords} style={Styles.divStyle}>
        {this.createLines()}
        <input style={Styles.inputStyle} onKeyPress={this.props.onKeyPress} readOnly value=">"></input>
      </div>
    );
  }
}

export default Grid;
