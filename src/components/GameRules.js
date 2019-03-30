import React from 'react';
import { connect } from "react-redux";
import { gameStarted } from "../actions";
import Timer from './Timer';


const GameRules = (props) => {

  const showRules = () => {
    if (props.gameActive) {
      return <div className='rules-and-timer-wrapper'>
        <h3>Happy SET finding!</h3>
        <Timer />
      </div>
    }
    return <div className='instructions'>
        <h3>
          Welcome to my attempt at one of my favorite games, SET!
        </h3>
        <p>
          The goal of the game is to find as many SETs as you can. Each card has four attributes: color, shape, shading, and number. A SET consists of three cards that are either all alike or all different on each attribute.
          Ready to play?
        </p>
      </div>
  }

  return(
    <div >
      {showRules()}
    </div>
  )

}

const mapDispatchToProps = (dispatch) =>  ({
  gameStarted: () => dispatch(gameStarted()),
})

const mapStateToProps = (state) =>  ({
  gameActive: state.gameActive,
  cards: state.cards,
  cardsOnBoard: state.cardsOnBoard
})

export default connect(mapStateToProps, mapDispatchToProps)(GameRules);
