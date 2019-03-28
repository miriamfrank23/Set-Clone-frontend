import React from 'react';
import './App.css';
import CardTable from './components/CardTable';
import GameRules from './components/GameRules';
import SetList from './components/SetList';
import SetModal from './components/Modals/SetModal';
import { connect } from "react-redux";
import Modal from 'react-modal'



const App = (props) => {

  const { foundASet, modalShowing } = props

  const renderApp = () => {

  }


    return (
      <div className='App'>
        <div className='container'>
        {foundASet && modalShowing ?
            <SetModal/> :
            <div>
              <div className='leftComponents'>
                <GameRules />
                <CardTable />
              </div>
              <SetList />
            </div>
        }
        </div>
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
