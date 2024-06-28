import './App.css';
import useToggle from './useToggle';


function App() {
  const [isVisible, toggle] = useToggle();

  return (
    <div className="App">
      <button className='btn' onClick={toggle}>
        {isVisible ? 'Hide' : 'show'}
      </button>
      {isVisible && <p className='txt'>This is my hidden text</p>}
    </div>
  );
};

export default App;
