import './App.css';
import React ,  { useState }  from 'react';
import {Route , Routes} from 'react-router-dom';
import Home from './Home';
import Gallery from './Gallery';

const App = () => {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 3000);
  }
  return (
    !loading && (
    <div className="App">
       <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="Gallery" element={<Gallery/>}/>

          </Routes>
    </div>
    )
  );
}

export default App;
