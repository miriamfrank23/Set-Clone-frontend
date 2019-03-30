import React, { Component } from 'react';
import { connect } from "react-redux";
import { decreaseTimer } from "../actions";

class Timer extends Component {

  componentDidMount() {
    this.startTimer(this.props)
  }

  startTimer = (props) => {
    const { decreaseTimer } = props

    setInterval(decreaseTimer, 1000)
  }

  render() {
    return (
    <div className='clock'>
      <div>
        {this.props.timer > 0 ? this.props.timer : 0}
      </div>
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
