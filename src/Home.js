import React from 'react';
import Colors from './Styles';

let Styles = {
  labelStyle: {
    color: Colors.text,
    backgroundColor: Colors.background,
    fontFamily: 'VT323',
    alignSelf: 'center',
    padding: '15px',
    letterSpacing: '4px',
    fontSize: '40px'
  },
  divStyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '15%',
    flex: 1
  }
}

class Home extends React.Component {
  constructor(props) {
    super(props);

    setTimeout(this.mutateText, Math.round(Math.random() * 7000));

    for(var i = 0; i < 500; i++) {
      console.log(this.getRandomInt(0,5));
    }
  }

  symbols = "`~!@#$%^&*()-_=+\\|][}{'\";:/?.>,<";
  garbage = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`~!@#$%^&*()-_=+\\|][}{'\";:/?.>,<";

  getRandomInt = (min, max) => { // min and max both inclusive
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  mutateTextAtIndex = (text, i) => {
    let randomChar = this.garbage[this.getRandomInt(0, this.garbage.length - 1)];
    return text.substring(0, i) + randomChar + text.substring(i + 1);
  };

  mutateText = () => {
    let randomIndex = this.getRandomInt(0, this.state.currentText.length - 1);
    
    let flickers = this.getRandomInt(1, 4);

    let firstTime = this.getRandomInt(0, 200);
    let secondTime = this.getRandomInt(0, 100);
    let thirdTime = this.getRandomInt(0, 500);
    let fourthTime = this.getRandomInt(0, 200);

    setTimeout(() => {
      this.setState({ ...this.state, currentText: this.mutateTextAtIndex(this.state.currentText, randomIndex) });
    }, firstTime);

    if (flickers >= 2) {
      setTimeout(() => {
        this.setState({ ...this.state, currentText: this.mutateTextAtIndex(this.state.currentText, randomIndex) });
      }, firstTime + secondTime);
    }

    if (flickers >= 3) {
      setTimeout(() => {
        this.setState({ ...this.state, currentText: this.mutateTextAtIndex(this.state.currentText, randomIndex) });
      }, firstTime + secondTime + thirdTime);
    }

    if (flickers >= 4) {
      setTimeout(() => {
        this.setState({ ...this.state, currentText: this.mutateTextAtIndex(this.state.currentText, randomIndex) });
      }, firstTime + secondTime + thirdTime + fourthTime);
    }

    setTimeout(this.mutateText, Math.round(Math.random() * 7000));
  };

  state = {
    currentText: "Sometimes memory comes alive. It's not such a bad thing!"
  };

  render () {
    return(
      <div style={Styles.divStyle}>
        <label style={Styles.labelStyle}>{this.state.currentText}</label>
      </div>
    );
  }
}

export default Home 
