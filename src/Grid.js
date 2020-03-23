import React from 'react';

let Styles = {
  labelStyle: {
    color: 'lightgray',
    backgroundColor: 'black',
    borderRadius: '5px',
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
};

let parseText = (text, num) => {
  var outText = '          ';
  let lengthOfGrid = 35;

  if (text && text.length >= num * lengthOfGrid + lengthOfGrid) {
    outText = text.substring(num * lengthOfGrid, num * lengthOfGrid + lengthOfGrid)
  }

  return outText;
}

export default function Grid(props) {
  return (
    <div style={Styles.divStyle}>
      <label style={Styles.labelStyle}>{parseText(props.children, 0)}</label>
      <label style={Styles.labelStyle}>{parseText(props.children, 1)}</label>
      <label style={Styles.labelStyle}>{parseText(props.children, 2)}</label>
      <label style={Styles.labelStyle}>{parseText(props.children, 3)}</label>
      <label style={Styles.labelStyle}>{parseText(props.children, 4)}</label>
      <label style={Styles.labelStyle}>{parseText(props.children, 5)}</label>
      <label style={Styles.labelStyle}>{parseText(props.children, 6)}</label>
      <label style={Styles.labelStyle}>{parseText(props.children, 7)}</label>
      <label style={Styles.labelStyle}>{parseText(props.children, 8)}</label>
      <label style={Styles.labelStyle}>{parseText(props.children, 9)}</label>
      <label style={Styles.labelStyle}>{parseText(props.children, 10)}</label>
      <input style={Styles.inputStyle} onKeyPress={props.onKeyPress} readOnly value=">"></input>
    </div>
  );
}
