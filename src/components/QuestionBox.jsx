import React, { useState } from "react";
import EcoQuiz from "./EcoQuiz";
import TekQuiz from "./TekQuiz";
import CatQuiz from "./CatQuiz";

function QuestionBox() {
  const [showQuiz, setShowQuiz] = useState("cat");

  const renderQuiz = () => {
    switch (showQuiz) {
      case "eco":
        return <EcoQuiz />;
      case "tek":
        return <TekQuiz />;
      case "cat":
        return <CatQuiz />;
      default:
        return <div>Select a quiz to start!</div>;
    }
  };

  return (
    <div>
      {renderQuiz()}
    </div>
  );
}

export default QuestionBox;
