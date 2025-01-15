import React, { useState } from "react";
import './SwitchBtn.css';
import { Link } from "react-router-dom";

const SwitchBtn = () => {
  const [selectedButton, setSelectedButton] = useState("Edit Users");

  const handleClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <div className="button-container">
      <Link to="/">
        <button
          className={`button ${selectedButton === "Edit Users" ? "selected" : ""}`}
          onClick={() => handleClick("Edit Users")}
        >
          Edit Users
        </button>
      </Link>
      <Link to="/users">
        <button
          className={`button ${selectedButton === "Users" ? "selected" : ""}`}
          onClick={() => handleClick("Users")}
        >
          Users
        </button>
      </Link>
    </div>
  );
};

export default SwitchBtn;