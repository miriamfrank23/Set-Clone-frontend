import React from 'react';
import { connect } from "react-redux";
import { gameStarted, setCardsOnBoard } from "../actions";

const GameRules = (props) => {

  const showRules = (props) => {
    if (props.gameActive) {
      return <div className='App'>
        <h3>Happy SET finding!</h3>
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

const mapDispatchToProps = (dispatch) =>  ({
  gameStarted: () => dispatch(gameStarted()),
  // setCardsOnBoard: (cards) => dispatch(setCardsOnBoard(cards))
})

const mapStateToProps = (state) =>  ({
  gameActive: state.gameActive,
  cards: state.cards,
  cardsOnBoard: state.cardsOnBoard
})

export default connect(mapStateToProps, mapDispatchToProps)(GameRules);
