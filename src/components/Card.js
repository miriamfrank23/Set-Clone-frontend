import React from 'react';
import { connect } from "react-redux";
import { selectCard, gameStarted, setCardsOnBoard, unselectCard, clearSelectedCards } from "../actions";

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

  const checkForSet = () => {
    const { selectedCards, clearSelectedCards } = props


    if (selectedCards.length === 3) {
      if (symbolMatch(selectedCards) && colorMatch(selectedCards) && shadingMatch(selectedCards) && numberMatch(selectedCards)) {
        window.alert('Congratulations! You found a set')
      }
      window.alert('Whoops! That is not a valid set. Try again!')
      clearSelectedCards()

    }

  }

  const symbolMatch = (selectedCards) => {
    if (((selectedCards[0].symbol === selectedCards[1].symbol) &&
        (selectedCards[1].symbol === selectedCards[2].symbol) &&
        (selectedCards[0].symbol === selectedCards[2].symbol)) ||
       ((selectedCards[0].symbol !== selectedCards[1].symbol) &&
        (selectedCards[1].symbol !== selectedCards[2].symbol) &&
        (selectedCards[0].symbol !== selectedCards[2].symbol))) {
      return true;
    }
      return false;

  }

  const colorMatch = (selectedCards) => {
    if (((selectedCards[0].color === selectedCards[1].color) &&
        (selectedCards[1].color === selectedCards[2].color) &&
        (selectedCards[0].color === selectedCards[2].color)) ||
       ((selectedCards[0].color !== selectedCards[1].color) &&
        (selectedCards[1].color !== selectedCards[2].color) &&
        (selectedCards[0].color !== selectedCards[2].color))) {
      return true;
    }
      return false;

  }

  const shadingMatch = (selectedCards) => {
    if (((selectedCards[0].shading === selectedCards[1].shading) &&
        (selectedCards[1].shading === selectedCards[2].shading) &&
        (selectedCards[0].shading === selectedCards[2].shading)) ||
       ((selectedCards[0].shading !== selectedCards[1].shading) &&
        (selectedCards[1].shading !== selectedCards[2].shading) &&
        (selectedCards[0].shading !== selectedCards[2].shading))) {
      return true;
    }
      return false;

  }

  const numberMatch = (selectedCards) => {
    if (((selectedCards[0].number === selectedCards[1].number) &&
        (selectedCards[1].number === selectedCards[2].number) &&
        (selectedCards[0].number === selectedCards[2].number)) ||
       ((selectedCards[0].number !== selectedCards[1].number) &&
        (selectedCards[1].number !== selectedCards[2].number) &&
        (selectedCards[0].number !== selectedCards[2].number))) {
      return true;
    }
      return false;

  }


  return(
    <div>
    {showCardsOnBoard(props)}
    {checkForSet()}
    </div>
  )

}

const mapDispatchToProps = (dispatch) =>  ({
  gameStarted: () => dispatch(gameStarted()),
  setCardsOnBoard: (cards) => dispatch(setCardsOnBoard(cards)),
  selectCard: (card) => dispatch(selectCard(card)),
  unselectCard: (card) => dispatch(unselectCard(card)),
  clearSelectedCards: () => dispatch(clearSelectedCards()),
})

const mapStateToProps = (state) =>  ({
  gameActive: state.gameActive,
  cards: state.cards,
  cardsOnBoard: state.cardsOnBoard,
  selectedCards: state.selectedCards
})

export default connect(mapStateToProps, mapDispatchToProps)(Card);
