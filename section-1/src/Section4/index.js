import React, { useState } from 'react'

const Section4 = () => {
    // const [textColor, setTextColor] = useState('red');
    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count + 1)
    };

    const decrease = () => {
        setCount(count - 1)
    };

    const setZero = () => {
        setCount(0)
    };
  return (
    <div>
        {/* <button onClick={() => {setTextColor(textColor === 'red' ? 'green' : 'red')}}>change color</button>
        <h1 style={{color : textColor}}>React Tutorial</h1> */}
        <button onClick={() => {setCount(count + 1)}}>increase</button>
        <span> - </span>
        <button onClick={() => {setCount(count - 1)}}>decrease</button>
        <span> - </span>
        <button onClick={() => {setCount(0)}}>set to 0</button>
        <h1>{count}</h1>
    </div>
  )
}

export default Section4
