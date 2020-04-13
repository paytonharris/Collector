import React from 'react';
import DangerButton from './DangerButton';

let Styles = {
  labelStyle: {
    color: '#ffe0b5',//183310
    borderRadius: '5px',
    fontSize: '25px',
  },
  subHeaderLabelStyle: {
    color: '#7799cc',//183310
    borderRadius: '5px',
    fontSize: '20px',
    paddingLeft: '30px'
  },
  divStyle: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '5px',
    width: '400px',
    height: '700px',
    overflow: 'hidden',
    marginRight: '50px',
    marginTop: '50px'
  },
  innerDivStyle: {
    display: 'flex',
    overflow: 'auto',
    height: '99%',
    paddingRight: '15px',
    flexDirection: 'column',
    alignItems: 'flex-end'
  },
  centerVertically: {
    height: '100%',
    display: 'flex',
    alignItems: 'center'
  }
}

export default function GameInfoPanel(props) {
  return (
    <div style={Styles.divStyle}>
      <div style={Styles.innerDivStyle}>
        {props.info.map(obj => 
          <div>
            <label style={Styles.labelStyle}>
              {obj.header}
            </label>
            <div>
              {obj.info.map(info => <div style={Styles.subHeaderLabelStyle}>{info}</div>)}
            </div>
          </div>)}
      </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{flex: 1}}></div>
          <div>
            <label style={Styles.labelStyle}>Volatile Bits:</label>
            <label style={{ ...Styles.subHeaderLabelStyle, fontSize: 42, paddingLeft: "20px"}}>{props.coinCount}</label>
          </div>
          <DangerButton handleClick={props.resetGame}>Reset Game</DangerButton>
          <DangerButton handleClick={props.toggleMusic}>Toggle Music</DangerButton>
        </div>
    </div>
  );
}
