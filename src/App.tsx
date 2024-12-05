import React from 'react';
import "./assets/css/style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MapPage from './pages/Map';
import PDFPage from './pages/pdf';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<MapPage />} />
        <Route path={"file"} element={<PDFPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
