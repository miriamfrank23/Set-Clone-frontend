import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchCards, setCardsOnBoard, selectCard, gameStarted, clearSelectedCards } from "../actions";
import Card from './Card';


class CardTable extends Component {

  componentDidMount() {
    this.props.fetchCards()
  }

  drawCards = () => {
    const { cards, setCardsOnBoard } = this.props

    let randomCards = cards.slice(0,12)
    setCardsOnBoard(randomCards)
  }

  renderCards = () => {
      const { cardsOnBoard, selectCard, selectedCards } = this.props

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
  //
  // renderSpinningCard = () => {
  //   const { randomCard } = this.props
  //
  //   return <img className='spinningCard' src={randomCard.image} alt=''/>
  // }


  render() {
    console.log(this.props.cardsOnBoard, this.props.selectedCards);
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
          <button onClick={() => {this.drawCards()}}>
            I don't see any SETs here
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
  clearSelectedCards: () => dispatch(clearSelectedCards()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CardTable);
