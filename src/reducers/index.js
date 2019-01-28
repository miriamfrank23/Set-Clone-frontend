import { combineReducers } from 'redux';
import { FETCH_CARDS_BEGIN, FETCH_CARDS_SUCCESS, FETCH_CARDS_FAILURE, GAME_STARTED } from '../actions';

const initialState = {
  cards: [],
  loading: false,
  error: null,
  gameActive: false
}

const cardsReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_CARDS_BEGIN:
     return {
        ...state,
       loading: true,
       error: null
    }
    case FETCH_CARDS_SUCCESS:
     return {
       ...state,
       loading: false,
       cards: action.payload
    }
    case FETCH_CARDS_FAILURE:
     return {
       ...state,
       loading: false,
       error: action.payload.error,
       cards: []
    }
    default:
      return state;
    }
}

// const selectedCardsReducer = (selectedCards=[], action) => {
//   switch (action.type) {
//     case 'CARD_SELECTED':
//       return [...selectedCards, action.payload]
//     default:
//       return selectedCards
//   }
// }

const activeGameReducer = (state = initialState, action) => {
  switch(action.type) {
    case GAME_STARTED:
     return {
       ...state,
       gameActive: false,
    }
    default:
      return state;
  }
}

export default combineReducers ({
  cards: cardsReducer,
  activeGame: activeGameReducer
})
