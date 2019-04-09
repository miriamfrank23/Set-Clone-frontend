import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchCards, setCardsOnBoard, selectCard, gameStarted, clearSelectedCards, newSet, clearSets, toggleModal, foundASet, toggleDemo, resetTimer } from "../actions";
import Card from './Card';


class CardTable extends Component {


  componentDidMount() {
    this.props.fetchCards()
  }

  drawCards = () => {
    const { cards, setCardsOnBoard } = this.props


    let randomCards = cards.sort(() => 0.5 - Math.random()).slice(0,12)
    setCardsOnBoard(randomCards)
  }

  renderCards = () => {

      return <Card />

  }


  loadingCard = () => {
    const { error, loading, cards, setCardsOnBoard, clearSelectedCards } = this.props

    if (error) {
      return <div>Error!</div>;
    } else if (loading) {
      return <div>Loading...</div>;
    }
    else if (cards.length) {
      setCardsOnBoard([])
      clearSelectedCards()
    }
  }


  checkForSet = () => {

    const { selectedCards, clearSelectedCards, newSet, foundASet } = this.props


    if (selectedCards.length === 3) {
      if (this.symbolMatch(selectedCards) && this.colorMatch(selectedCards) && this.shadingMatch(selectedCards) && this.numberMatch(selectedCards)) {
        foundASet(true)
        newSet(selectedCards)
        this.drawCards()
        clearSelectedCards()
      } else {
        clearSelectedCards()
      }
    }

  }

  symbolMatch = (selectedCards) => {
    if (((selectedCards[0].symbol === selectedCards[1].symbol) &&
        (selectedCards[1].symbol === selectedCards[2].symbol) &&
        (selectedCards[0].symbol === selectedCards[2].symbol)) ||
       ((selectedCards[0].symbol !== selectedCards[1].symbol) &&
        (selectedCards[1].symbol !== selectedCards[2].symbol) &&
        (selectedCards[0].symbol !== selectedCards[2].symbol))) {
      return true;
    }
      return false;

  }

  colorMatch = (selectedCards) => {
    if (((selectedCards[0].color === selectedCards[1].color) &&
        (selectedCards[1].color === selectedCards[2].color) &&
        (selectedCards[0].color === selectedCards[2].color)) ||
       ((selectedCards[0].color !== selectedCards[1].color) &&
        (selectedCards[1].color !== selectedCards[2].color) &&
        (selectedCards[0].color !== selectedCards[2].color))) {
      return true;
    }
      return false;

  }

  shadingMatch = (selectedCards) => {
    if (((selectedCards[0].shading === selectedCards[1].shading) &&
        (selectedCards[1].shading === selectedCards[2].shading) &&
        (selectedCards[0].shading === selectedCards[2].shading)) ||
       ((selectedCards[0].shading !== selectedCards[1].shading) &&
        (selectedCards[1].shading !== selectedCards[2].shading) &&
        (selectedCards[0].shading !== selectedCards[2].shading))) {
      return true;
    }
      return false;

  }

  numberMatch = (selectedCards) => {
    if (((selectedCards[0].number === selectedCards[1].number) &&
        (selectedCards[1].number === selectedCards[2].number) &&
        (selectedCards[0].number === selectedCards[2].number)) ||
       ((selectedCards[0].number !== selectedCards[1].number) &&
        (selectedCards[1].number !== selectedCards[2].number) &&
        (selectedCards[0].number !== selectedCards[2].number))) {
      return true;
    }
      return false;

  }


  render() {

    return(
      <div className='card-container'>
      {!this.props.gameActive ?
        <div>
          <span className='play-button' onClick={() => {this.props.toggleDemo()}}>
            More info
          </span>
          <span className='play-button' onClick={() => {this.props.gameStarted(); this.drawCards();}}>
            Play!
          </span>
        </div>
        :
        <div>
          <div className='button-container'>
            <span onClick={() => {this.drawCards(); this.props.clearSelectedCards();}}>
              Deal again
            </span>
            <span onClick={() => {this.checkForSet(); this.props.toggleModal();}} id='check-button'>
              Check!
            </span>
            <span onClick={() => {this.props.gameStarted(); this.loadingCard(); this.props.clearSets(); this.props.resetTimer()}}
            id='stopButton'>
              End game
            </span>
          </div>
          <div className='card-container'>
          {this.renderCards()}
          </div>
        </div>}
      </div>
    )
  }

}

const mapStateToProps = (state) =>  ({
  cards: state.cards,
  selectedCards: state.selectedCards,
  cardsOnBoard: state.cardsOnBoard,
  gameActive: state.gameActive,
  sets: state.sets,
  aSet: state.aSet
})

const mapDispatchToProps = (dispatch) =>  ({
  gameStarted: () => dispatch(gameStarted()),
  fetchCards: () => dispatch(fetchCards()),
  selectCard: (card) => dispatch(selectCard(card)),
  setCardsOnBoard: (cards) => dispatch(setCardsOnBoard(cards)),
  clearSelectedCards: () => dispatch(clearSelectedCards()),
  newSet: (set) => dispatch(newSet(set)),
  clearSets: () => dispatch(clearSets()),
  toggleModal: () => dispatch(toggleModal()),
  foundASet: () => dispatch(foundASet()),
  toggleDemo: () => dispatch(toggleDemo()),
  resetTimer: () => dispatch(resetTimer()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CardTable);
