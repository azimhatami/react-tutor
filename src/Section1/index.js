// handel state react

import React from 'react'

const Section1 = (props) => {
  return (
    <div>
        <h2>{props.name}</h2>
        <p>{props.salary}</p>
        <p>{props.position}</p>
        <p>{props.company}</p>
    </div>
  )
}

export default Section1