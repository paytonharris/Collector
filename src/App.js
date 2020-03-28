import React, { Component } from 'react';
import Game from './Game';
import Header from './Header';
import firebase from 'firebase';
import Home from './Home';
import About from './About';
import Colors from './Styles';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { currentPage: 'Home' }; // <- set up react state

    var firebaseConfig = {
      apiKey: "AIzaSyBy0_UINg8CK_Z-IKngYjElsO1NsXHtWBE",
      authDomain: "collector-188a6.firebaseapp.com",
      databaseURL: "https://collector-188a6.firebaseio.com",
      projectId: "collector-188a6",
      storageBucket: "collector-188a6.appspot.com",
      messagingSenderId: "284161208733",
      appId: "1:284161208733:web:5b39b4e78258bfcb873f74",
      measurementId: "G-50836SHK2J"
    };
    firebase.initializeApp(firebaseConfig);

    this.db = firebase.firestore();
  }

  changePage = (pageName) => {
    console.log("in changepage");
    this.setState({currentPage: pageName});
  }

  getContent = () => {
    var page = <div></div>;

    switch (this.state.currentPage) {
      case 'Game':
        page = (
          <Game data={this.db}/>
        );
        break;
      case 'About':
        page = <About></About>;
        break;
      case 'Home':
        page = <Home></Home>;
        break;
    }

    return page;
  }

  render() {
    return (
      <div style={{backgroundColor: Colors.backgroundColor, display: 'flex', flexDirection: 'column', height: '100%'}}>
        <Header changePage={this.changePage}/>
        {this.getContent()}
      </div>
    );
  }
};
