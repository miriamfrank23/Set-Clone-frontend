import React from 'react';
import { connect } from "react-redux";

const SetList = (props) => {
  const { sets, gameActive } = props


  const showSets = () => {

      if (sets.length) {
         return sets.map((set, index) => {
           return <img alt='' src={set[0].image} className='set-card' key={index}/>
         })
       }
     }


  return(
    <div id='set-tab'>
      {gameActive ?
      `SET count: ${sets.length}` : null}
      <div id='set-list'>
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
