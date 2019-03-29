import React from 'react';
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

    // const timer = (number) => {
    //   number--
    //   console.log(number)
    // }

    // setInterval(timer, 1000, 60);



  return(
    <div id='setTab'>
      {gameActive ?
      `SET count: ${sets.length}` : null}
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
