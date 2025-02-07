import React, { useState } from "react";
import Question from "./Question";
import Options from "./Options";
import Button from "./Button";
import QuizData from "../QuizData";
import Result from "./Result";

const { eco } = QuizData;
const allQuestions = eco;

function EcoQuiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [arrayOfPickedAnswers, setArrayOfPickedAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [quizPercentage, setQuizPercentage] = useState(null);

  const handleNext = () => {
    if (selectedAnswer) {
      const updatedAnswers = [...arrayOfPickedAnswers, selectedAnswer];
      setArrayOfPickedAnswers(updatedAnswers);

      if (currentQuestionIndex < allQuestions.length - 1) {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        setSelectedAnswer(null);
        setSelectedOption(null); // Deselect the option when moving to the next question
      } else {
        calculateCategoryPercentages(updatedAnswers);
      }
    }
  };

  const handleOptionClick = (option, index) => {
    setSelectedAnswer(option);
    setSelectedOption(index); // Track the selected option index
  };

  const currentQuestion = allQuestions[currentQuestionIndex];

  // 🧮 Calculate the category percentages and determine the quiz result
  const calculateCategoryPercentages = (answers) => {
    const categoryCounts = {
      "Økonomi og ledelse": 0,
      "Digitalisering og økonomi": 0,
      "Logistikk og Supply Chain Management": 0,
      "Innovasjon og forretningsutvikling": 0,
    };

    answers.forEach((answer) => {
      categoryCounts[answer.category]++;
    });

    const totalAnswers = answers.length;

    const percentages = Object.keys(categoryCounts).map((category) => {
      const count = categoryCounts[category];
      return {
        category,
        percentage: ((count / totalAnswers) * 100).toFixed(2),
      };
    });

    setQuizPercentage(percentages);

  };

  // 🎯 Conditionally render the quiz result
  if (quizPercentage != null) {
    return (
      <Result allResults={quizPercentage}/>
    );
  }

  return (
    <div className="question-card">
      <Question question={currentQuestion.question} />
      <Options
        options={currentQuestion.options}
        handleOptionClick={handleOptionClick}
        selectedOption={selectedOption}
      />
      <Button
        onClick={handleNext}
        text={
          currentQuestionIndex < allQuestions.length - 1 ? "Neste" : "Fullfør"
        }
      />
    </div>
  );
}

export default EcoQuiz;
