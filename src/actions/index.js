export const FETCH_CARDS_BEGIN = 'FETCH_CARDS_BEGIN';
export const FETCH_CARDS_SUCCESS = 'FETCH_CARDS_SUCCESS';
export const FETCH_CARDS_FAILURE = 'FETCH_CARDS_FAILURE';
export const GAME_STARTED = 'GAME_STARTED';
export const CARD_SELECTED = 'CARD_SELECTED';
export const CARDS_ON_BOARD = 'CARDS_ON_BOARD';
export const CLEAR_SELECTED_CARDS = 'CLEAR_SELECTED_CARDS';

// const handleErrors = (response) => {
//   if (!response.ok) {
//     throw Error(response.statusText)
//   }
//   return response
// }

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
