import React from "react";
import axios from "axios";
import { useState } from "react";
import './App.css';

import { FaCheckCircle, FaHeartbeat, FaLeaf, FaSpinner } from "react-icons/fa";

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
    console.log(medicine);
    try {
      setLoading(true);
      setError("");


      const response = await axios.get(`${api}/${medicine.trim()}`);
      console.log(response.data);
      if (response.data.Message) {
        setError(response.data.Message);
        setData(null);
      } else {
        setData(response.data)
      }

    } catch (err) {
      setError("Medicine not found!");
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
          {loading && (
            <div className="loading">
              <FaSpinner className="spin" />
              <p>Searching medicine..</p>
            </div>
          )}

          {error && (
            <div className="error">
              {error}!!
            </div>
          )}

          {data && (
            <div className="card">
              <img src={data.image} alt={data.name} />

              <div className="content">
                <span className="badge">
                  <FaLeaf />
                  Herbal Medicine
                </span>

                <h2>{data.name.toUpperCase()}</h2>

                <div className="section">
                  <h3>
                    <FaHeartbeat />
                    Uses
                  </h3>

                  <ul>
                    {data.uses.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="section">
                  <h3>
                    <FaCheckCircle />
                    Benifits
                  </h3>

                  <ul>
                    {data.benefits.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          )}

        </div>
      </div>

    </div>
  )
}

export default App;