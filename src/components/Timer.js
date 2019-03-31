import React, { Component } from 'react';
import { connect } from "react-redux";
import { decreaseTimer } from "../actions";

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
    // } else if () {
    // 
    }
     else if (timer > 0) {
      return displayTime
    } else {
      return 0
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
})

const mapStateToProps = (state) => ({
  timer: state.timer,
})

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
