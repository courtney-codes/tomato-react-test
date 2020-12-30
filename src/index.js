import React from "react";
import ReactDOM from "react-dom";
import tomatoImage from "./assets/images/tomato.jpg";

import "./styles.css";

function Tomato() { 
  return (
    <div className="Tomato">
      <h1>The Tomato</h1>
      <img className="Tomato__image" src={tomatoImage} alt="Tomato" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Tomato />, rootElement);
