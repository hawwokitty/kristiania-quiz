import React, { useState } from "react";
import Button from "./Button";
import QuestionBox from "./QuestionBox";

function Welcome() {
  const [startQuiz, setStartQuiz] = useState(false);
  const handleStart = () => {
    setStartQuiz(true);
  };
  if (!startQuiz) {
      return (
        <div className="question-card">
          <h3>Velkommen til School of Economics, Innovation and Technology!</h3>
          <p>
            Lurer du på hvilket av våre bachelorprogrammer som kan passe for deg? Ta vår quiz.
          </p>
          <Button onClick={handleStart} text={"Start quiz"} />
        </div>
      );
  } else {
    return (
        <>
        <QuestionBox />
        </>
    );
  }
}

export default Welcome;
