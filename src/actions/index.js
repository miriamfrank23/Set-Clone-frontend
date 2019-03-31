export const FETCH_CARDS_BEGIN = 'FETCH_CARDS_BEGIN';
export const FETCH_CARDS_SUCCESS = 'FETCH_CARDS_SUCCESS';
export const FETCH_CARDS_FAILURE = 'FETCH_CARDS_FAILURE';
export const GAME_STARTED = 'GAME_STARTED';
export const CARD_SELECTED = 'CARD_SELECTED';
export const CARD_UNSELECTED = 'CARD_UNSELECTED';
export const CARDS_ON_BOARD = 'CARDS_ON_BOARD';
export const CLEAR_SELECTED_CARDS = 'CLEAR_SELECTED_CARDS';
export const NEW_SET = 'NEW_SET';
export const CLEAR_SETS = 'CLEAR_SETS';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const FOUND_A_SET = 'FOUND_A_SET';
export const DECREASE_TIMER = 'DECREASE_TIMER';
export const TOGGLE_DEMO = 'TOGGLE_DEMO';


export const fetchCards = () => {
  return dispatch => {
    console.log('fetching!')

    dispatch(fetchCardsBegin())

    fetch('http://127.0.0.1:3000/api/cards')
    .then(resp => resp.json())
    .then(json => {
      dispatch(fetchCardsSuccess(json))
      return json
    })
    .catch(error =>
      dispatch(fetchCardsFailure(error))
    )
  }
}
// .then(handleErrors)

export const fetchCardsBegin = () => ({
  type: FETCH_CARDS_BEGIN
})

export const fetchCardsSuccess = (cards) => ({
  type: FETCH_CARDS_SUCCESS,
  payload: cards
})

export const fetchCardsFailure = (error) => ({
  type: FETCH_CARDS_FAILURE,
  payload: error
})

export const selectCard = (card) => ({
  type: CARD_SELECTED,
  payload: card
})

export const unselectCard = (card) => ({
  type: CARD_UNSELECTED,
  payload: card
})

export const gameStarted = () => ({
  type: GAME_STARTED
})

export const setCardsOnBoard = (cards) => ({
  type: CARDS_ON_BOARD,
  payload: cards
})

export const clearSelectedCards = () => ({
  type: CLEAR_SELECTED_CARDS,
})

export const newSet = (set) => ({
  type: NEW_SET,
  payload: set
})

export const clearSets = () => ({
  type: CLEAR_SETS,
})

export const toggleModal = () => ({
  type: TOGGLE_MODAL,
})

export const foundASet = () => ({
  type: FOUND_A_SET
})

export const decreaseTimer = () => ({
  type: DECREASE_TIMER
})

export const toggleDemo = () => ({
  type: TOGGLE_DEMO,
})
