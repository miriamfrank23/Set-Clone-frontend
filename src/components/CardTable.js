import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchCards } from "../actions";


class CardTable extends Component {

  componentDidMount() {
    this.props.fetchCards()
  }

  loadCards = (props) => {
    const { error, loading, cards } = props
    // debugger
    if (error) {
      return <div>Error!</div>;
    } else if (loading) {
      return <div>Loading...</div>;
    }
    else if (cards) {

      return cards.map(card =>
        <div key={card.id} className='card'>
          <img src={card.image} alt=''/>
        </div>)
    }
  }

  /* <span>{card.number}</span>
  <span>{card.color}</span>
  <span>{card.shading}</span>
  <span>{card.symbol}</span> */


  render() {

    return(
      <div className='cardContainer'>
      {this.loadCards(this.props)}
      </div>
    )
  }
}

const mapStateToProps = (state) =>  ({
  cards: state.cards
})

const mapDispatchToProps = (dispatch) =>  ({
  fetchCards: () => dispatch(fetchCards())
})

export default connect(mapStateToProps, mapDispatchToProps)(CardTable);
