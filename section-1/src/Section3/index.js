// handel state react

import React from 'react';
import { useState } from 'react';

const Section3 = () => {
    const [age, setAge] = useState(0);
    const [inputValue, setInputValue] = useState('');
    
    const handelInputChange = (event) => {
      console.log(event.target.value);
      setInputValue(event.target.value);
      }

    const [showText, setShowText] = useState(true);
    const toggleText = () => {
      setShowText(!showText)
    }
    
    return (
      <div>
        <input type='text' placeholder='pls Enter text' onChange={handelInputChange}/>
        <h2>{inputValue}</h2>
        <p>-------------------------------------</p>
        <h3>{age}</h3>
        <button onClick={() => {setAge(age + 1)}}>increase age</button>
        <span>     </span>
        <button onClick={() => {setAge(age - 1)}}>decrease age</button>
        <p>-------------------------------------</p>
        <button onClick={toggleText}>show/hide</button>
        {showText && <h3>Azim Hatami</h3>}
    </div>
  )
}

export default Section3