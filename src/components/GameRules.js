import React from 'react';
import { connect } from "react-redux";

const GameRules = () => {

  return(
    <div>
      <h3>
        Welcome to my attempt at one of my favorite games, SET!
      </h3>
      <p>
        The goal of set is to find as many SETs as you can. Each card has four attributes: color, shape, shading, and number. A SET consists of three cards that are either all alike or all different on each attribute.
      </p>
      Ready to play?
      <button>
        Play!
      </button>
    </div>
  )

}

export default GameRules;
