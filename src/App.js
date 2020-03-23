import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Game from './Game';
import Header from './Header';
import Footer from './Footer';
import firebase from 'firebase';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] }; // <- set up react state

    var firebaseConfig = {
      
    };
    firebase.initializeApp(firebaseConfig);

    this.db = firebase.firestore();
  }

  render() {
    return (
      <div style={{backgroundColor: '#eadeda'}}>
        <Header />
        <Container maxWidth="sm">
          <Box my={4}>
            <Game data={this.db}/>
          </Box>
        </Container>
        <Footer />
      </div>
    );
  }
};
