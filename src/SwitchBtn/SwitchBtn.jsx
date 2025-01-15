import React, { useState } from "react";
import './SwitchBtn.css'
const SwitchBtn = () => {
  const [selectedButton, setSelectedButton] = useState("Edit Users");

  const handleClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <div className="button-container">
      <button
        className={`button ${selectedButton === "Edit Users" ? "selected" : ""}`}
        onClick={() => handleClick("Edit Users")}
      >
        Edit Users
      </button>
      <button
        className={`button ${selectedButton === "Users" ? "selected" : ""}`}
        onClick={() => handleClick("Users")}
      >
        Users
      </button>
    </div>
      );
};

export default SwitchBtn;
