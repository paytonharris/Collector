import React from 'react';
import Button from './Button';

let Styles = {
  labelStyle: {
    color: '#ffe0b5',
    backgroundColor: 'gray',
    borderRadius: '5px',
    alignSelf: 'center',
    padding: '15px',
  },
  divStyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '20%',
    flex: 1
  }
}

export default function Home(props) {
  return (
    <div style={Styles.divStyle}>
      <label style={Styles.labelStyle}>cool website.</label>
    </div>
  );
}
