import React from 'react';
import Colors from './Styles';

let Styles = {
  labelStyle: {
    color: Colors.text,
    borderRadius: '5px',
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontFamily: 'VT323',
    fontSize: '32px',
    transition: '1s'
  },
  labelStyleOver: {
    color: Colors.highlightedText,
    borderRadius: '5px',
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'stretch',
    textAlign: 'center',
    fontFamily: 'VT323',
    letterSpacing: '4px',
    fontSize: '32px',
    transition: '1s'
  },
  divStyle: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.highlightedBackground,
    padding: '20px',
    marginRight: '5px',
    marginLeft: '5px',
    marginTop: '10px',
    marginBottom: '10px',
    borderRadius: '10px',
    transition: '1s',
    border: 'none'
  },
  divStyleOver: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.background,
    padding: '20px',
    marginRight: '5px',
    marginLeft: '5px',
    marginTop: '10px',
    marginBottom: '10px',
    borderRadius: '10px',
    transition: '.3s',
    border: 'none'
  }
}

class Button extends React.Component {
  state = {
    showBox: false
  };

  handleBoxToggle = () => this.setState({ showBox: !this.state.showBox });
 // className={this.state.showBox ? "invisible" : "visible"}
  render() {
    return (
      <div
        onMouseEnter={this.handleBoxToggle}
        onMouseLeave={this.handleBoxToggle}
      >
        <button onClick={this.props.handleClick} style={this.state.showBox ? Styles.divStyle : Styles.divStyleOver}>
          <label style={this.state.showBox ? Styles.labelStyleOver : Styles.labelStyle}>
            {this.props.children}
          </label>
        </button>
      </div>
    );
  }
}

export default Button;