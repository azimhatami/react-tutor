import React from 'react';
import './App.css';
import {Person, Country} from './Person';

function App() {
  return (
    <div className="App">
		<Person 
		name={'Azim'} 
		email={'test@company.com'}
		age={43}
		isMarried={true}
		courses={['React', 'Python', 'JavaScript']}
		country={Country.Iran}
		/> 
    </div>
  );
}

export default App;
