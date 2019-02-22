// import { combineReducers } from 'redux';
import { FETCH_CARDS_BEGIN, FETCH_CARDS_SUCCESS, FETCH_CARDS_FAILURE, GAME_STARTED, CARD_SELECTED, CARDS_ON_BOARD } from '../actions';

const initialState = {
  cards: [],
  loading: false,
  error: null,
  gameActive: false,
  timer: 0,
  sets: [],
  cardsOnBoard: [],
  selectedCards: []
}

const reducer = (state = initialState, action) => {
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
       cards: action.payload.sort(() => 0.5 - Math.random())
       // shuffle deck
    }
    case FETCH_CARDS_FAILURE:
     return {
       ...state,
       loading: false,
       error: action.payload.error,
       cards: []
    }
    case GAME_STARTED:
       return {
         ...state,
         gameActive: !state.gameActive,
      }
    case CARD_SELECTED:
       return {
         ...state,
         selectedCards: [...state.selectedCards, action.payload],
      }
    case CARDS_ON_BOARD:
       return {
         ...state,
         cardsOnBoard: action.payload
      }
    default:
      return state;
    }
}

export default reducer
