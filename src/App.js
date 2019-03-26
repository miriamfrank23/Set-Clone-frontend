import React from 'react';
import './App.css';
import CardTable from './components/CardTable';
import GameRules from './components/GameRules';
import SetList from './components/SetList';
import SetModal from './components/Modals/SetModal';


const App = () => {


    return (
      <div className='App'>
        <div className='container'>
          <div className='leftComponents'>
            <GameRules />
            <CardTable />
          </div>
            <SetList />
          </div>

      </div>
    )

}

export default App;
