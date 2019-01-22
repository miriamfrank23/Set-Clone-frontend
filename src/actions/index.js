export const selectCard = (card) => {
  return {
    type: 'CARD_SELECTED',
    payload: card
  }
}
