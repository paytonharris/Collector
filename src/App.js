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

    console.log(window.location.href);

    var currentRoute = window.location.href.split('/');
    var homeRoute = currentRoute[0] + '/' + currentRoute[1] + '/'  + currentRoute[2] + '/';
    console.log(homeRoute);
    var page = 'Home'; 
    if (currentRoute.length >= 3) {
      page = currentRoute[3];
    }

    this.state = { currentPage: page, homeRoute: homeRoute };

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
    //window.location.href = this.state.homeRoute + pageName; //reloads page

    window.history.pushState("", "", pageName);
    this.setState({...this.state, currentPage: pageName});
  }

  getContent = () => {
    var page = <div></div>;

    switch (this.state.currentPage.toUpperCase()) {
      case 'GAME':
        page = <Game data={this.db}/>;
        break;
      case 'ABOUT':
        page = <About></About>;
        break;
      case 'HOME':
      default:
        page = <Home startGame={() => this.changePage('Game')}></Home>;
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
