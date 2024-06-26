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
import { createContext, useState } from 'react';
import useAppStore from './store/AppStore';
import BTN from './Components/BTN';
import { QueryClient, QueryClientProvider } from 'react-query';


export const ProfileContext = createContext();

function App() {
  const color = 'w';

  const [userName, setUserName] = useState('Azim');

  const client = new QueryClient({ defaultOptions : {
    queries: {refetchOnWindowFocus: false}
  }});

  // const {} = useAppStore()

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
      <QueryClientProvider client={client}>
      <ProfileContext.Provider value={{userName, setUserName}}>
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home userName={userName}/>}/>
            {/* <Route path='/' element={<Home />}/> */}
            <Route path='/about' element={<About />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='/profile/:name?' element={<Profile/>}/>
            <Route path='*' element={<div>Not Found</div>}/>
          </Routes>
          <footer style={{marginTop : '80px'}}>This is Footer</footer>
        </Router>
        {/* <BTN/> */}
      </ProfileContext.Provider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
