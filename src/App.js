import React from 'react';
import './App.css';
import CardTable from './components/CardTable';
import GameRules from './components/GameRules';


const App = () => {


    return (
      <div className="App">
        <GameRules />
        <CardTable />
      </div>
    )

}

export default App;
