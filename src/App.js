import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Game from './Game';
import Header from './Header';
import Footer from './Footer';
import firebase from 'firebase';
import Home from './Home';
import About from './About';
import Passwords from './Passwords';

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
        <Container maxWidth="sm">
          <Box my={4}>
            <Game data={this.db}/>
          </Box>
        </Container>
        );
        break;
      case 'About':
        page = <About></About>;
        break;
      case 'Home':
        page = <Home></Home>;
        break;
      case 'Passwords':
        page = <Passwords></Passwords>
        break;
    }

    return page;
  }

  render() {
    return (
      <div style={{backgroundColor: '#eadeda'}}>
        <Header changePage={this.changePage}/>
        {this.getContent()}
        <Footer />
      </div>
    );
  }
};
