import React from 'react';
import { connect } from "react-redux";
import { selectCard, gameStarted, setCardsOnBoard, unselectCard, clearSelectedCards, newSet } from "../actions";

const Card = (props) => {


  const showCardsOnBoard = () => {

    const { cardsOnBoard, selectCard, selectedCards, unselectCard } = props

    return cardsOnBoard.map(card => {
      if (selectedCards.map(eachCard => eachCard.id).includes(card.id)) {
          return <img className='selectedCard' key={card.id} src={card.image} alt='' onClick={() => {unselectCard(card);}}/>
      }
      return <img className='card' key={card.id} src={card.image} alt='' onClick={() => {selectCard(card);}}/>
    })
  }


  return(
    <div>
    {showCardsOnBoard(props)}
    </div>
  )

}

const mapDispatchToProps = (dispatch) =>  ({
  gameStarted: () => dispatch(gameStarted()),
  setCardsOnBoard: (cards) => dispatch(setCardsOnBoard(cards)),
  selectCard: (card) => dispatch(selectCard(card)),
  unselectCard: (card) => dispatch(unselectCard(card)),
  clearSelectedCards: () => dispatch(clearSelectedCards()),
  newSet: (set) => dispatch(newSet(set)),
})

const mapStateToProps = (state) =>  ({
  gameActive: state.gameActive,
  cards: state.cards,
  cardsOnBoard: state.cardsOnBoard,
  selectedCards: state.selectedCards,
  sets: state.sets,
})

export default connect(mapStateToProps, mapDispatchToProps)(Card);
