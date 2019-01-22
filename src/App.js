import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import { connect } from "react-redux";

class App extends Component {


  fetchCards = () => {
    console.log('hi');
    fetch('http://127.0.0.1:3000/api/cards')
    .then(resp => resp.json())
    .then(resp => console.log(resp))
  }

  componentDidMount() {
    this.fetchCards()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

// export default connect()(App);
export default App;
