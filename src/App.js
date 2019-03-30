import React from 'react';
import './App.css';
import CardTable from './components/CardTable';
import GameRules from './components/GameRules';
import SetList from './components/SetList';
import { connect } from "react-redux";
import { foundASet, toggleModal } from "./actions";


const App = (props) => {

  const { aSet, modalShowing, foundASet, toggleModal, gameActive } = props


  const displayModal = () => {
    if (aSet && modalShowing) {
      return <div className='overlay' onAnimationEnd={() => {foundASet(); toggleModal()}}>
          <div className='modal-box'>
            <h3>
            Congrats! You found a SET.
            </h3>
          </div>
      </div>
  } else if (modalShowing) {
      return <div className='overlay' onAnimationEnd={() => {toggleModal();}}>
              <div className='modal-box'>
                <h3>
                  Whoops! That's not a SET. Please try again.
                </h3>
              </div>
          </div>
    } else {
      return null
    }
  }



    return (
      <div className='App'>
        <div className='container'>
          <div className='left-components'>
            <GameRules />
            <CardTable />
          </div>
            {gameActive ?
            <SetList /> : null}
          </div>
          {displayModal()}
      </div>
    )

}

const mapStateToProps = (state) =>  ({
  aSet: state.aSet,
  modalShowing: state.modalShowing,
  gameActive: state.gameActive,
})

const mapDispatchToProps = (dispatch) =>  ({
  toggleModal: () => dispatch(toggleModal()),
  foundASet: () => dispatch(foundASet()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
