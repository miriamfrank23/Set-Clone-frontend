import React from 'react';
import { connect } from "react-redux";
import { selectCard, gameStarted, setCardsOnBoard } from "../actions";

const Card = () => {


  return(
    <div>
      card here
    </div>
  )

}

const mapDispatchToProps = (dispatch) =>  ({
  gameStarted: () => dispatch(gameStarted()),
  setCardsOnBoard: (cards) => dispatch(setCardsOnBoard(cards)),
  selectCard: (cards) => dispatch(selectCard(cards))
})

const mapStateToProps = (state) =>  ({
  gameActive: state.gameActive,
  cards: state.cards,
  cardsOnBoard: state.cardsOnBoard
})

export default connect(mapStateToProps, mapDispatchToProps)(Card);
