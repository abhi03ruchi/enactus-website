import './App.css';
import React from 'react';
import {Route , Routes} from 'react-router-dom';
import Home from './Home';
import Gallery from './Gallery';
function App() {
  return (
    <div className="App">
       <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="Gallery" element={<Gallery/>}/>

          </Routes>
    </div>
  );
}

export default App;
