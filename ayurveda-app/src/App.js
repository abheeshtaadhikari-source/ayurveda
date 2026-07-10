import React from "react";
import axios from "axios";
import { useState } from "react";
import './App.css';
import { FaSpinner } from "react-icons/fa";

const api = "https://ayurveda-jet.vercel.app";

function App() {
  const [medicine, setMedicine] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function searchMedicine() {
    if (medicine.trim() === "") {
      setError("please enter a medicine name");
      setData(null);
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await axios.get(`${api}/${medicine.trim}`);
      if (response.data.Message) {
        setError(response.data.Message);
        setData(null);
      } else {
        setData(response.data)
      }

    } catch (err) {
      setError("Medicine not found");
      setData(null);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="app">
      <div className="background"></div>
      <div className="container">
        <div className="glass">
          <h1>Ayurveda Medicine Finder</h1>
          <p className="subtitle">search ayurvedic medicines and explore thier health benefits instantly</p>
          <div className="searchBox">
            <input type="text" placeholder="search medicine.." value={medicine} onChange={(e) => setMedicine(e.target.value)}></input>
            <button onClick={searchMedicine}>search</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App;