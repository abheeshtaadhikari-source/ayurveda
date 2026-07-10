import React from "react";
import axios from "axios";
import { useState } from "react";
import './App.css';

const api = "https://ayurveda-jet.vercel.app";

function App() {
  return (
    <div className="app">
      <div className="background"></div>
      <div className="container">
        <div className="glass">
          <h1>Ayurveda Medicine Finder</h1>
          <p className="subtitle">search ayurvedic medicines and explore thier health benefits instantly</p>
          <div className="searchBox">
            <input type="text" placeholder="search medicine.."></input>
            <button>search</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App;