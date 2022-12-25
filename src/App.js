

import React from "react";
import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./Details";

const App = () => {
  return (
    <BrowserRouter>
    
    
        <h1>Adopt ME</h1>
        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<SearchParams />} />
        </Routes>
     
    </BrowserRouter>
  )
};

export default  App;
