import React from 'react';
import Button from './Button';
import Colors from './Styles';

let Styles = {
  divStyle: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    paddingTop: '5px',
    paddingBottom: '5px',
    backgroundColor: Colors.background
  },
  titleStyle: {
    color: Colors.text,
    fontSize: '50px',
    padding: 15,
    fontFamily: 'VT323',
  },
  bottomLine: {
    height: '3px',
    backgroundColor: Colors.highlightedBackground,
  },
  spacer: {
    height: '3px',
    backgroundColor: Colors.backgroundColor,
    flex: 1
  },
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
  }
}

export default function Header(props) {
  return (
    <div style={Styles.mainContainer}>
      <div style={Styles.divStyle}>
        <label style={Styles.titleStyle}>Collector://</label>
        <Button handleClick={() => {console.log("click home"); props.changePage('Home')}}>Home</Button>
        <Button handleClick={() => {console.log("click game"); props.changePage('Game')}}>Game</Button>
        <Button handleClick={() => {console.log("click about"); props.changePage('About')}}>About</Button>
        <div style={Styles.spacer}></div>
      </div>
      <div style={Styles.bottomLine}></div>
    </div>
  );
}
