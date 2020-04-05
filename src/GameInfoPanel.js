import React from 'react';

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
    height: '400px',
    overflow: 'hidden',
    marginRight: '50px'
  },
  innerDivStyle: {
    display: 'flex',
    overflow: 'auto',
    height: '99%',
    paddingRight: '15px',
    flexDirection: 'column',
    alignItems: 'flex-end'
  }
}

export default function GameConsole(props) {
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
    </div>
  );
}
