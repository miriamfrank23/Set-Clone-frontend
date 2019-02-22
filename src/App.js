import React from 'react';
import './App.css';
import CardTable from './components/CardTable';
import GameRules from './components/GameRules';
import SetList from './components/SetList';


const App = () => {


    return (
      <div className='App'>
        <div className='leftComponents'>
          <GameRules />
          <CardTable />
        </div>
          <SetList />
      </div>
    )

}

export default App;
