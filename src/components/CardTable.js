import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchCards } from "../actions";


class CardTable extends Component {

  componentDidMount() {
    this.props.fetchCards()
  }

  loadCards = (props) => {
    const { error, loading, cards } = props.cards
    // debugger
    if (error) {
      return <div>Error!</div>;
    } else if (loading) {
      return <div>Loading...</div>;
    }
    else if (cards) {
      return cards.map(card =>
        <div key={card.id} className='card'>
          <h3>{card.id}</h3>
          <h3>{card.number}</h3>
          <h3>{card.color}</h3>
          <h3>{card.shading}</h3>
          <h3>{card.symbol}</h3>
        </div>)
    }
  }



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
