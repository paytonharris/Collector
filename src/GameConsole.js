import React from 'react';

let Styles = {
  labelStyle: {
    color: '#ffe0b5',//183310
    backgroundColor: '#111',
    borderRadius: '5px',
    fontSize: '18px',
    paddingLeft: '5px'
  },
  divStyle: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '5px',
    backgroundColor: '#7799cc',//D3EAD5 2e294e
    width: '400px',
    height: '400px',
    overflow: 'hidden',
    marginLeft: '50px',
    borderRadius: '25px',
    marginTop: '50px'
  },
  innerDivStyle: {
    display: 'flex',
    overflow: 'auto',
    height: '97.5%',
    paddingLeft: '5px',
    paddingTop: '5px',
    backgroundColor: '#111',
    flexDirection: 'column',
    marginRight: '5px',
    marginLeft: '5px',
    borderRadius: '20px'
  }
}

export default function GameConsole(props) {
  return (
    <div style={Styles.divStyle}>
      <div style={Styles.innerDivStyle}>
        {props.messages.map(text => <label style={Styles.labelStyle}>{text}</label>)}
      </div>
    </div>
  );
}
