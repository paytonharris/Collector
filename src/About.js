import React from 'react';
import Button from './Button';

let Styles = {
  labelStyle: {
    color: '#183310',//183310
    backgroundColor: 'black',
    alignSelf: 'center',
    borderRadius: '5px',
    flex: 1
  },
  divStyle: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    paddingTop: '5px',
    paddingBottom: '5px',
    backgroundColor: '#D3EAD5',//D3EAD5
    flex: 1
  },
  titleStyle: {
    color: '#183310',
    fontSize: '40px',
    padding: 15,
    flex: 1,
    marginLeft: "20%"
  }
}

export default function About(props) {
  return (
      <label style={Styles.titleStyle}>About!</label>
  );
}
