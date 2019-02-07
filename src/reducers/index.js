// import { combineReducers } from 'redux';
import { FETCH_CARDS_BEGIN, FETCH_CARDS_SUCCESS, FETCH_CARDS_FAILURE, GAME_STARTED } from '../actions';

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
    default:
      return state;
    }
}

export default reducer
