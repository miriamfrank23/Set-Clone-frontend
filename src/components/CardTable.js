import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchCards, setCardsOnBoard, selectCard } from "../actions";



class CardTable extends Component {

  componentDidMount() {
    this.props.fetchCards()
  }

  loadCards = (props) => {
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
      {!this.props.gameActive ? this.loadCards(this.props) : <div>hi</div>}
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
  fetchCards: () => dispatch(fetchCards()),
  selectCard: () => dispatch(selectCard()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CardTable);
