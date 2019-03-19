import React, { Component } from 'react';
import { connect } from "react-redux";

const SetList = (props) => {
  const { sets, gameActive } = props


  const showSets = () => {

     if (sets.length) {
        return sets.map(set => {
          return <img alt='' src={set[0].image} className='setCard' key={set[0].id}/>
        })
      }
    }




  return(
    <div id='setTab'>
      {gameActive ?
      `You have ${sets.length} sets` : null}
      <div id='setList'>
      {showSets()}
      </div>
    </div>
  )

}


const mapStateToProps = (state) => ({
  sets: state.sets,
  gameActive: state.gameActive,
})

export default connect(mapStateToProps)(SetList);
