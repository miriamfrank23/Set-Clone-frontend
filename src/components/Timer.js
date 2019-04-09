import React, { Component } from 'react';
import { connect } from "react-redux";
import { decreaseTimer, gameStarted, clearSelectedCards, clearSets, resetTimer, setCardsOnBoard } from "../actions";

class Timer extends Component {

  intervalID = 0

  componentDidMount() {
     this.intervalID = setInterval(this.props.decreaseTimer, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
 }

  displayTimer = (props) => {
    const { timer } = props

    let minutes = (timer/60).toString()[0]
    let seconds = timer - minutes * 60

    let displayTime = `${minutes}:${seconds}`

    if (timer === 120) {
      return '2:00'
    } else if ((timer < 70 && timer >= 60) || (timer < 10 && timer > 0)) {
      return `${minutes}:0${seconds}`
    }
     else if (timer > 0) {
      return displayTime
    } else {
      return 
    }
  }


  render() {
    return (
    <div className='clock'>
      {this.displayTimer(this.props)}
    </div>
  )}

}

const mapDispatchToProps = (dispatch) =>  ({
  decreaseTimer: () => dispatch(decreaseTimer()),
  gameStarted: () => dispatch(gameStarted()),
  clearSelectedCards: () => dispatch(clearSelectedCards()),
  clearSets: () => dispatch(clearSets()),
  resetTimer: () => dispatch(resetTimer()),
  setCardsOnBoard: () => dispatch(setCardsOnBoard()),
})

const mapStateToProps = (state) => ({
  timer: state.timer,
})

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
