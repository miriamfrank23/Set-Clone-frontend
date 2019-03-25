// import { combineReducers } from 'redux';
import { FETCH_CARDS_BEGIN, FETCH_CARDS_SUCCESS, FETCH_CARDS_FAILURE, GAME_STARTED, CARD_SELECTED, CARDS_ON_BOARD, CLEAR_SELECTED_CARDS, CARD_UNSELECTED, NEW_SET, CLEAR_SETS } from '../actions';

const initialState = {
  cards: [],
  loading: false,
  error: null,
  gameActive: false,
  timer: 0,
  sets: [],
  cardsOnBoard: [],
  selectedCards: [],
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
       cards: action.payload
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
    case CLEAR_SELECTED_CARDS:
       return {
         ...state,
         selectedCards: []
      }
      case CARD_UNSELECTED:
         return {
           ...state,
           selectedCards: state.selectedCards.filter(card => card.id !== action.payload.id),
        }
      case NEW_SET:
         return {
           ...state,
           sets: [...state.sets, action.payload],
        }
      case CLEAR_SETS:
         return {
           ...state,
           sets: [],
        }
    default:
      return state;
    }
}

export default reducer
