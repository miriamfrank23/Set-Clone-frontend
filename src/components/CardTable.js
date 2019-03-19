import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchCards, setCardsOnBoard, selectCard, gameStarted, clearSelectedCards, newSet, clearSets } from "../actions";
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

    const { selectedCards, clearSelectedCards, sets, newSet } = this.props


    if (selectedCards.length === 3) {
      if (this.symbolMatch(selectedCards) && this.colorMatch(selectedCards) && this.shadingMatch(selectedCards) && this.numberMatch(selectedCards)) {
        window.alert('Congratulations! You found a set')
        newSet(selectedCards)
        this.drawCards()
        clearSelectedCards()
      } else {
        window.alert('Whoops! That is not a valid set. Try again!')
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
      <div className='cardContainer'>
      {!this.props.gameActive ?
        <div>
          <button onClick={() => {this.props.gameStarted(); this.drawCards();}}>
            Play!
          </button>
        </div>
        :
        <div>
          <button onClick={() => {this.checkForSet()}} id='checkButton'>
            Check!
          </button>
          <button onClick={() => {this.drawCards()}}>
            I don't see any SETs here
          </button>
          <button onClick={() => {this.props.gameStarted(); this.loadingCard(); this.props.clearSets()}}
          id='stopButton'>
          Stop
          </button>
          <div>
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
})

const mapDispatchToProps = (dispatch) =>  ({
  gameStarted: () => dispatch(gameStarted()),
  fetchCards: () => dispatch(fetchCards()),
  selectCard: (card) => dispatch(selectCard(card)),
  setCardsOnBoard: (cards) => dispatch(setCardsOnBoard(cards)),
  clearSelectedCards: () => dispatch(clearSelectedCards()),
  newSet: (set) => dispatch(newSet(set)),
  clearSets: () => dispatch(clearSets()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CardTable);
