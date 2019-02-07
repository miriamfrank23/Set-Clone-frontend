import React from 'react';
import { connect } from "react-redux";
import { gameStarted } from "../actions";

const GameRules = (props) => {

  const showRules = (props) => {
    if (props.gameActive) {
      return <div>
        <h3>Happy SET finding!</h3>
        <button onClick={() => props.gameStarted()}>
          Stop
        </button>
      </div>
    }
    return <div className='instructions'>
        <h3>
          Welcome to my attempt at one of my favorite games, SET!
        </h3>
        <p>
          The goal of set is to find as many SETs as you can. Each card has four attributes: color, shape, shading, and number. A SET consists of three cards that are either all alike or all different on each attribute.
          Ready to play?
        </p>
        <div>
          <button onClick={() => props.gameStarted()}>
            Play!
          </button>
          <button>
            Demo
          </button>
        </div>
      </div>
  }

  return(
    <div >
      {showRules(props)}
    </div>
  )

}

const mapDispatchToProps = (dispatch, bool) =>  ({
  gameStarted: () => dispatch(gameStarted())
})

const mapStateToProps = (state) =>  ({
  gameActive: state.gameActive
})

export default connect(mapStateToProps, mapDispatchToProps)(GameRules);
