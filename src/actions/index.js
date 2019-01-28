export const FETCH_CARDS_BEGIN = 'FETCH_CARDS_BEGIN';
export const FETCH_CARDS_SUCCESS = 'FETCH_CARDS_SUCCESS';
export const FETCH_CARDS_FAILURE = 'FETCH_CARDS_FAILURE';

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

export const selectCard = (card) => {
  return {
    type: 'CARD_SELECTED',
    payload: card
  }
}

export const gameStarted = (true) => {
  return {
    type: 'GAME_STARTED',
    payload: true
  }
}
