
import React from 'react'
let lodash = require('lodash');

const Options = ({ options , handleClick }) => {
    
    const shuffledData = lodash.shuffle(options); 

  return (
      <div className="answers">
          {shuffledData.map((option) => <button onClick={(e)=>handleClick(option)} key={option}>{option }</button>)}
    </div>
  )
}

export default Options