import React, { Component } from 'react';
import { connect } from "react-redux";

const SetList = (props) => {

  // const showSets = () => {
  //
  //   const { sets } = props
  //
  //   if (sets.length) {
  //     sets.map(set => <img alt='' src='https://fabrika-antey.ru/images/star-clip-art-transparent-background-1.jpg'>)
  //   }
  //
  // }


  return(
    <div>
      hiiii
    </div>
  )

}


const mapStateToProps = (state) => ({
  sets: state.sets,
})

export default connect(mapStateToProps)(SetList);
