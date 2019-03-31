import React from 'react';
import './App.css';
import CardTable from './components/CardTable';
import GameRules from './components/GameRules';
import SetList from './components/SetList';
import { connect } from "react-redux";
import { foundASet, toggleModal, toggleDemo } from "./actions";


const App = (props) => {

  const { aSet, modalShowing, foundASet, toggleModal, gameActive, demoShowing, toggleDemo } = props


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

  const displayDemo = () => {
    if (demoShowing) {
      return <div className='demo-overlay'>
          <div className='demo-modal-box'>
            <h3>
              After you start a game, you have two minutes to find as many SETs as you can. See some examples of SETs below.
            </h3><br/>
            <div>
              This is a SET because, across the three cards, the colors are all the same, the shadings are all the same, the numbers are all different and the shapes are all different.
            </div>
            <img alt='' src='https://s3.us-east-2.amazonaws.com/set-clone-images/Set+1.png' className='demo-image'/>
            <div>
              This is a SET because, across the three cards, the colors are all different, the shadings are all different, the numbers are all different and the shapes are all different.
            </div>
            <img alt='' src='https://s3.us-east-2.amazonaws.com/set-clone-images/Set+2.png' className='demo-image'/>
            <div>
              This is a SET because, across the three cards, the colors are all different, the shadings are all different, the numbers are all the same and the shapes are all different.
            </div>
            <img alt='' src='https://s3.us-east-2.amazonaws.com/set-clone-images/Set+3.png' className='demo-image'/>
            <span onClick={() => toggleDemo()}>
              Close
            </span>
          </div>
      </div>
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
          {displayDemo()}
      </div>
    )

}

const mapStateToProps = (state) =>  ({
  aSet: state.aSet,
  modalShowing: state.modalShowing,
  gameActive: state.gameActive,
  demoShowing: state.demoShowing
})

const mapDispatchToProps = (dispatch) =>  ({
  toggleModal: () => dispatch(toggleModal()),
  foundASet: () => dispatch(foundASet()),
  toggleDemo: () => dispatch(toggleDemo()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
