import React from 'react';
import "./assets/css/style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MapPage from './pages/Map';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"Map"} element={<MapPage />} />
        <Route path={"/"} element={<MapPage />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App;
