import React from "react";
import ReactDOM from "react-dom";
import tomatoImage from "./assets/images/tomato.jpg";
import NutritionSidebar from './components/NutritionSidebar/NutritionSidebar';
import ContactForm from './components/ContactForm/ContactForm';

import "./styles.css";

function Tomato() { 
  return (
    <div className="Tomato">
      <h1>The Tomato</h1>
      <img className="Tomato__image" src={tomatoImage} alt="Tomato" />
      <NutritionSidebar />
      <ContactForm />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Tomato />, rootElement);
