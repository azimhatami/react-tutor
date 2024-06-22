// useEffect hook
import React, { useEffect, useState } from 'react';
import Axios from 'axios';

const Section5 = () => {
  // const [catFact, setCatFact] = useState('');

  // useEffect(() => {
  //   fetchFact();
  // }, []);
  
  // const fetchFact = () => {
  //   Axios.get('https://catfact.ninja/fact').then((res) => {
  //     console.log(res.data);
  //     setCatFact(res.data.fact);
  //   })
  // };

  const [name, setName] = useState('');
  const [predictedResult, setPredictedResult] = useState({});

  const fetchAge = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      console.log(res.data);
      setPredictedResult(res.data);
    })
  }

  return (
    <div>
      <input type='text' placeholder='Plz Enter a name' onChange={(event) => setName(event.target.value)}/>
      <button onClick={fetchAge}>Predict age</button>
      <h2>Name is: {predictedResult?.name}</h2>
      <h2>Age is: {predictedResult?.age}</h2>
      {/* <button onClick={fetchFact}>fetch data</button>
      <p>{catFact}</p> */}
    </div>
  )
};

export default Section5;
