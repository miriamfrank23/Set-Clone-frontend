import React from 'react';
import './App.css';
import CardTable from './components/CardTable';
import GameRules from './components/GameRules';
import SetList from './components/SetList';
import { connect } from "react-redux";
import { foundASet, toggleModal } from "./actions";


const App = (props) => {

  const { aSet, modalShowing, foundASet, toggleModal } = props

  const displayModal = () => {
    if (aSet && modalShowing) {
      return <div className='overlay' onAnimationEnd={() => {foundASet(); toggleModal()}}>
          <div className='modalBox'>
            <h3>
            Congrats! You found a SET.
            </h3>
          </div>
      </div>
  } else if (modalShowing) {
      return <div className='overlay' onAnimationEnd={() => {toggleModal();}}>
              <div className='modalBox'>
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
          <div className='leftComponents'>
            <GameRules />
            <CardTable />
          </div>
            <SetList />
          </div>
          {displayModal()}
      </div>
    )

}

const mapStateToProps = (state) =>  ({
  aSet: state.aSet,
  modalShowing: state.modalShowing,
})

const mapDispatchToProps = (dispatch) =>  ({
  toggleModal: () => dispatch(toggleModal()),
  foundASet: () => dispatch(foundASet()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
