import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import logo from './logo.svg';
import './App.css';

function App() {
  const color = 'w';
  return (
    <div className="App">
      {/* <Section1 name='Azim' salary={3000} position='remote' company='google'/>
      <button type='submit' className={color === 's' ? 'success' : 'warnning'}>click me</button> */}
      {/* <Section2/> */}
      {/* <Section3/> */}
      <Section4/>
    </div>
  );
}

export default App;
