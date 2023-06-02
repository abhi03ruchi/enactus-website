import './App.css';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Gallery from './Gallery';
import GulKaari from './GulKaari/GulKaari';
import PRAKRIKALA from './PRAKRIKALA/PRAKRIKALA';
import DHARINI from './DHARINI/Dharini';
import Adva from "./ADVA/Adva"
import Aveksha from "./AVEKSHA/Aveksha"
import ScrollToTop from './GoToTop/GoToTop';
import Event from './Event';

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
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Gallery" element={<Gallery />} />
          <Route path="Event" element={<Event />} />
          <Route path="GulKaari" element={<GulKaari />} />
          <Route path="PRAKRIKALA" element={<PRAKRIKALA />} />
          <Route path="DHARINI" element={<DHARINI />} />
          <Route path="Adva" element={<Adva />} />
          <Route path="Aveksha" element={<Aveksha />} />
        </Routes>
      </div>
    )
  );
}

export default App;
