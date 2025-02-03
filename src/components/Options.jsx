import React, { useState } from "react";

function Options({ options, handleOptionClick }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelected = (index) => {
    setSelectedOption(index); 
  };

  function handleOptionSelection(i, option) {
    handleOptionSelected(i);  
    handleOptionClick(option); 
  }

  return (
    <>
      {options.map((option, i) => (
        <p
          className={`option ${selectedOption === i ? "option-selected" : ""}`}  // Conditionally add the "option-selected" class
          key={i}
          onClick={() => handleOptionSelection(i, option)} 
        >
          {option.text}
        </p>
      ))}
    </>
  );
}

export default Options;
