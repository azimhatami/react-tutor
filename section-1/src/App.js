import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Section7 from './Section7';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Navbar from './Pages/Navbar';
import Profile from './Pages/Profile';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  const color = 'w';
  return (
    <div className="App">
      {/* <Section1 name='Azim' salary={3000} position='remote' company='google'/>
      <button type='submit' className={color === 's' ? 'success' : 'warnning'}>click me</button> */}
      {/* <Section2/> */}
      {/* <Section3/> */}
      {/*<Section4/>*/}
      {/* <Section5/> */}
      {/* <Section6/> */}
      {/* <Section7/> */}
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/profile/:name' element={<Profile />}/>
          <Route path='*' element={<div>Not Found</div>}/>
        </Routes>
        <footer>This is Footer</footer>
      </Router>
    </div>
  );
}

export default App;
