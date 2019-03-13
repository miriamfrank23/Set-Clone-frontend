import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchCards, setCardsOnBoard, selectCard, gameStarted, clearSelectedCards } from "../actions";
import Card from './Card';


class CardTable extends Component {

  componentDidMount() {
    this.props.fetchCards()
  }

  drawCards = () => {
    const { gameActive, cards, setCardsOnBoard } = this.props

    let randomCards = cards.slice(0,9)
    setCardsOnBoard(randomCards)
  }

  renderCards = () => {
      const { cardsOnBoard, selectCard, selectedCards } = this.props

    return cardsOnBoard.map(card => {
      if (selectedCards.map(eachCard => eachCard.id).includes(card.id)) {
          return <img className='selectedCard' key={card.id} src={card.image} alt='' onClick={() => {selectCard(card);}}/>
      }
      return <img className='card' key={card.id} src={card.image} alt='' onClick={() => {selectCard(card);}}/>
    })
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
  //
  // renderSpinningCard = () => {
  //   const { randomCard } = this.props
  //
  //   return <img className='spinningCard' src={randomCard.image} alt=''/>
  // }


  render() {
    console.log(this.props.cardsOnBoard);
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
          <button onClick={() => {this.props.gameStarted(); this.loadingCard(); }}>
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
  gameActive: state.gameActive
})

const mapDispatchToProps = (dispatch) =>  ({
  gameStarted: () => dispatch(gameStarted()),
  fetchCards: () => dispatch(fetchCards()),
  selectCard: (card) => dispatch(selectCard(card)),
  setCardsOnBoard: (cards) => dispatch(setCardsOnBoard(cards)),
  clearSelectedCards: (cards) => dispatch(clearSelectedCards(cards)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CardTable);
