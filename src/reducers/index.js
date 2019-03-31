// import { combineReducers } from 'redux';
import { FETCH_CARDS_BEGIN, FETCH_CARDS_SUCCESS, FETCH_CARDS_FAILURE, GAME_STARTED, CARD_SELECTED, CARDS_ON_BOARD, CLEAR_SELECTED_CARDS, CARD_UNSELECTED, NEW_SET, CLEAR_SETS, TOGGLE_MODAL, FOUND_A_SET, DECREASE_TIMER, TOGGLE_DEMO } from '../actions';

const initialState = {
  cards: [],
  loading: false,
  error: null,
  gameActive: false,
  timer: 120,
  sets: [],
  cardsOnBoard: [],
  selectedCards: [],
  modalShowing: false,
  aSet: false,
  demoShowing: false
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
      case TOGGLE_MODAL:
         return {
           ...state,
           modalShowing: !state.modalShowing,
        }
      case FOUND_A_SET:
      return {
        ...state,
        aSet: !state.aSet,
     }
      case DECREASE_TIMER:
      return {
        ...state,
        timer: state.timer - 1,
     }
      case TOGGLE_DEMO:
      return {
        ...state,
        demoShowing: !state.demoShowing,
     }
    default:
      return state;
    }
}

export default reducer
