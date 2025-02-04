import React from "react";

function Options({ options, handleOptionClick, selectedOption }) {
  return (
    <>
      {options.map((option, i) => (
        <p
          className={`option ${selectedOption === i ? "option-selected" : ""}`}
          key={i}
          onClick={() => handleOptionClick(option, i)}
        >
          {option.text}
        </p>
      ))}
    </>
  );
}

export default Options;
