import React from 'react';
import Button from './Button';

let Styles = {
  labelStyle: {
    color: '#ffe0b5',//183310
    backgroundColor: 'black',
    borderRadius: '5px',
    flex: 1
  },
  divStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'flex-end',
    justifyContent: 'flex-end',
    paddingTop: '5px',
    paddingBottom: '5px',
    backgroundColor: '#2e294e',//D3EAD5
    height: '200px'
  },
  titleStyle: {
    color: '#ffe0b5',
    fontSize: '40px',
    padding: 15,
    flex: 1,
    marginLeft: "20%"
  }
}

export default function Footer() {
  return (
    <div style={Styles.divStyle}>
      <label style={Styles.titleStyle}></label>
      <label style={Styles.titleStyle}></label>
    </div>
  );
}
