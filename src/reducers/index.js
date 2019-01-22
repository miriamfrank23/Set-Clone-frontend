import { combineReducers } from 'redux';

const cardsReducer = (cards=[], action) => {
  return cards
}

const selectedCardsReducer = (selectedCards=null, action) => {
  switch (action.type) {
    case 'CARD_SELECTED':
      return [...selectedCards, action.payload]
    default:
      return selectedCards
  }
}

export default combineReducers ({
  cards: cardsReducer,
  selectedCards: selectedCardsReducer
})
