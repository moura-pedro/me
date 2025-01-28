// src/pages/Home.jsx
import React from "react";
import "./Home.css";

const Home = () => (
  <div>
    <div className="content">
      <p>about: brazilian, cs major, florida institute of technology</p>
      <p>interests: ai/ml, deep learning, software engineering, automation</p>
      <br></br>
      <p>other facts: avg rock climber, fear of heights, wheelies on a wheelchair</p>
    </div>

    <div className="socials">
      <p>
        <a href="https://www.instagram.com/itspedromoura" target="_blank" rel="noopener noreferrer">instagram</a>
        &nbsp;•&nbsp;
        <a href="https://www.linkedin.com/in/pedroomour" target="_blank" rel="noopener noreferrer">linkedin</a>
        &nbsp;•&nbsp;
        <a href="https://open.spotify.com/user/pedromoura" target="_blank" rel="noopener noreferrer">spotify</a>
      </p>
    </div>
  </div>
);

export default Home;
