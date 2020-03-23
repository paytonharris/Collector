import React from 'react';
import Grid from './Grid';
import firebase from 'firebase';

let Styles = {
  divStyle: {
    backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    fontFamily: 'VT323',
    letterSpacing: '2px',
    fontSize: '32px'
  }
};

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      myDataBase: props.data,
      worldText: '#######################################################################################################################################################################################################################################################################################################################################################################################################################################'
    };

    let myDataBase = props.data;


    myDataBase.collection("locations").get().then((querySnapshot) => {
      var index = 0;

      querySnapshot.forEach((doc) => {
        if (index === 0) {
          this.setWorldText(doc.data()["blocks"]);
        }
        console.log(index);
        console.log(doc.data()["blocks"]);
        console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
        
        index++;
      });
    })

    var unsubscribe = myDataBase.collection("locations").doc("1,1").onSnapshot((doc) => {
      console.log("got an update!");
      this.setWorldText(doc.data()["blocks"]);
    });
  }

  
  setWorldText = (newWorldText) => this.setState({ worldText: newWorldText });

  handleInput = (event) => {
    if (event.charCode === 13) { // 13 is enter
      var inputData = this.state.myDataBase.collection("locations").doc("1,1");

      return inputData.update({
          blocks: this.state.worldText
      })
      .then(() => {
          console.log("Document successfully updated!");
      })
      .catch((error) => {
          console.error("Error updating document: ", error);
      });
    } else if (event.charCode !== 32) {
      this.setWorldText(`${event.key}${this.state.worldText}`);
    }
  }

  render() {
    return (
      <div style={Styles.divStyle}>
        <Grid onKeyPress={this.handleInput}>{this.state.worldText}</Grid>
      </div>
    );
  }
}

export default Game;
