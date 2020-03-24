import React from 'react';
import Button from './Button';
import { getPassword } from './Helpers/helper';

let Styles = {
  labelStyle: {
    color: '#183310',//183310
    backgroundColor: 'black',
    borderRadius: '5px',
    flex: 1,
  },
  divStyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '10%',
    paddingBottom: '5px',
    width: '100%',
  },
  passwordStyle: {
    color: '#2e294e',
    fontSize: '40px',
    width: '200px',
    marginLeft: '50px'
  },
  buttonStyle: {
    backgroundColor: '#FFFFFF',
  },
  invisible: {
    opacity: 0.01,
  },
  fadeIn: {
    opacity: 1,
    transition: '0.3s'
  }
}

class Passwords extends React.Component {
  state = {
    generatedPassword: '',
    currentTextStyle: Styles.invisible
  };

  generatePassword = () => {
    var password = getPassword();

    this.setState({...this.state, currentTextStyle: Styles.invisible, generatedPassword: password });
    setTimeout(() => {this.setState({ ...this.state, currentTextStyle: Styles.fadeIn })}, 30)
  };

  render() {
    return (
      <div style={Styles.divStyle}>
        <Button handleClick={this.generatePassword} style={Styles.buttonStyle}>Generate Password:</Button>
        <label style={{...Styles.passwordStyle, ...this.state.currentTextStyle}}>{this.state.generatedPassword}</label>
      </div>
    );
  }
}

export default Passwords;