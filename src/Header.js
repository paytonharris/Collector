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
    alignContent: 'center',
    justifyContent: 'center',
    paddingTop: '5px',
    paddingBottom: '5px',
    backgroundColor: '#2e294e',//D3EAD5
  },
  titleStyle: {
    color: '#ffe0b5',
    fontSize: '40px',
    padding: 15,
    flex: 1,
    marginLeft: "20%"
  }
}

export default function Header() {
  return (
    <div style={Styles.divStyle}>
      <label style={Styles.titleStyle}>Collector://</label>
      <Button>Home</Button>
      <Button>Other</Button>
      <Button>Outside</Button>
      <Button>About</Button>
      <label style={Styles.titleStyle}></label>
    </div>
  );
}
