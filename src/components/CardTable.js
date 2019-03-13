import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchCards, setCardsOnBoard, selectCard, gameStarted } from "../actions";



class CardTable extends Component {

  componentDidMount() {
    this.props.fetchCards()
  }

  drawCards = (props) => {
    // debugger
    const { gameActive, cards, setCardsOnBoard } = props

    let randomCards = cards.slice(0,9)
    setCardsOnBoard(randomCards)

    return randomCards.map(card => {
      // debugger
      return <img className='card' key={card.id} src={card.image} alt=''/>
    })
  }



  loadingCard = (props) => {
    const { error, loading, cards } = props
    if (error) {
      return <div>Error!</div>;
    } else if (loading) {
      return <div>Loading...</div>;
    }
    else if (cards.length) {
      // random card to spin on screen
      const spinningCard = cards[Math.floor(Math.random()*cards.length)]
      // console.log(spinningCard, cards)

      return <div>
            <img className='spinningCard' src={spinningCard.image} alt=''/>
          </div>
    }
  }


  render() {
    return(
      <div className='cardContainer'>
      {!this.props.gameActive ?
        <div>
        <button onClick={() => this.props.gameStarted(), this.drawCards(this.props)}>
          Play!
        </button>
        </div>
        :
        <div>
        <button onClick={() => this.props.gameStarted(), this.loadingCard(this.props)}>
          Stop
        </button>
        </div>
      }
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
  setCardsOnBoard: (cards) => dispatch(setCardsOnBoard(cards))
})

export default connect(mapStateToProps, mapDispatchToProps)(CardTable);
