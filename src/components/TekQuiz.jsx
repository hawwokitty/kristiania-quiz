import React, { useState } from "react";
import Question from "./Question";
import Options from "./Options";
import Button from "./Button";
import QuizData from "../QuizData";

const { tek } = QuizData;
const allQuestions = tek;

function TekQuiz() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  
    const handleNext = () => {
      if (currentQuestionIndex < allQuestions.length - 1) {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      } else {
        alert("Du har fullført quizen!");
      }
    };
  
    const currentQuestion = allQuestions[currentQuestionIndex];
  
    return (
      <div className="question-card">
        <Question question={currentQuestion.question} />
        <Options options={currentQuestion.options} />
        <Button onClick={handleNext} text={currentQuestionIndex < allQuestions.length - 1 ? "Neste" : "Fullfør"} />
      </div>
    );
  }

export default TekQuiz
