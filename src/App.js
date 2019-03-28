import React from 'react';
import './App.css';
import CardTable from './components/CardTable';
import GameRules from './components/GameRules';
import SetList from './components/SetList';
import SetModal from './components/Modals/SetModal';
import { connect } from "react-redux";


const App = (props) => {

  const { foundASet, modalShowing } = props



    return (
      <div className='App'>
        <div className='container'>
          <div className='leftComponents'>
            <GameRules />
            <CardTable />
          </div>
            <SetList />
          </div>
          {foundASet && modalShowing ?
          <div className='overlay'>
            <div className='modalBox'>
              <h3>
                Congrats! You found a SET.
              </h3>
            </div>
          </div> : null }
      </div>
    )

}

const mapStateToProps = (state) =>  ({
  foundASet: state.foundASet,
  modalShowing: state.modalShowing,
})

const mapDispatchToProps = (dispatch) =>  ({

})

export default connect(mapStateToProps, mapDispatchToProps)(App);
