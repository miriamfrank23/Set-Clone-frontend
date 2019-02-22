import React from 'react';
import { connect } from "react-redux";
import { gameStarted, setCardsOnBoard } from "../actions";

const GameRules = (props) => {

  const drawCards = (props) => {
    const { gameActive, cards } = props

    let randomCards = cards.slice(0,9)
    props.setCardsOnBoard(randomCards)
  }

  const dealCards = (props) => {
    const { cardsOnBoard } = props
    // debugger
    if (cardsOnBoard.length) {
      cardsOnBoard.map(card =>
        <div>
          <img className='card' src={card.image} alt=''/>
        </div>
      )
    }
  }

  const showRules = (props) => {
    if (props.gameActive) {
      return <div className='App'>
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
      {props.gameActive ? dealCards(props) : <div>Nothing to show</div>}
    </div>
  )

}

const mapDispatchToProps = (dispatch) =>  ({
  gameStarted: () => dispatch(gameStarted()),
  setCardsOnBoard: (cards) => dispatch(setCardsOnBoard(cards))
})

const mapStateToProps = (state) =>  ({
  gameActive: state.gameActive,
  cards: state.cards,
  cardsOnBoard: state.cardsOnBoard
})

export default connect(mapStateToProps, mapDispatchToProps)(GameRules);
