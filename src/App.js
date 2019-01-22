import React, { Component } from 'react';
import './App.css';
import { selectCard } from './actions';
import CardTable from './components/CardTable';


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
        <CardTable />
      </div>
    );
  }
}

export default App;
