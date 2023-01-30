import React, { useState } from "react";
import "../styles/MacroCards.css";
import calLogo from "../assets/fire.svg";
import protLogo from "../assets/chicken.svg";
import carbsLogo from "../assets/apple.svg";
import fatLogo from "../assets/cheeseburger.svg";

function MacroCards({ macroName, macroData, color }) {
  let logo;

  macroName === "Calories"
    ? (logo = calLogo)
    : macroName === "Protéines"
    ? (logo = protLogo)
    : macroName === "Glucides"
    ? (logo = carbsLogo)
    : macroName === "Lipides"
    ? (logo = fatLogo)
    : null;

  return (
    <div className="macro-cards">
      <div className="logo-block" style={{ background: color }}>
        <img className="macro-logo" src={logo} alt="" />
      </div>
      <div>
        <h2 className="macro-data">{macroData}</h2>
        <h3 className="macro-name">{macroName}</h3>
      </div>
    </div>
  );
}

export default MacroCards;
