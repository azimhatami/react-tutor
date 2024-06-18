import Section1 from './Section1';
import logo from './logo.svg';
import './App.css';

function App() {
  const color = 'w';
  return (
    <div className="App">
      <Section1 name='Azim' salary={3000} position='remote' company='google'/>
      <button type='submit' className={color === 's' ? 'success' : 'warnning'}>click me</button>
    </div>
  );
}

export default App;
