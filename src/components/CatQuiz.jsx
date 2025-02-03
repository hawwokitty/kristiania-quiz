import React, { useState } from "react";
import Question from "./Question";
import Options from "./Options";
import Button from "./Button";
import QuizData from "../QuizData";

const { cat } = QuizData;
const allQuestions = cat;

function CatQuiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [arrayOfPickedAnswers, setArrayOfPickedAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);  // Temporary state for the selected answer

  const addToCatPickedAnswers = () => {
    if (selectedAnswer) {
      setArrayOfPickedAnswers((prevAnswer) => [...prevAnswer, selectedAnswer]);
      calculateCategoryPercentages();
    }
  };

  const handleNext = () => {
    if (selectedAnswer) {
      addToCatPickedAnswers();  // Add the selected answer before moving to the next question
    }

    if (currentQuestionIndex < allQuestions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setSelectedAnswer(null);  // Reset the selected answer for the next question
    } else {
      alert("Du har fullført quizen!");
    }
  };

  const handleOptionClick = (option) => {
    setSelectedAnswer(option);  // Store the selected answer temporarily
  };

  const currentQuestion = allQuestions[currentQuestionIndex];

  // Calculate the percentage for each category
  const calculateCategoryPercentages = () => {
    const categoryCounts = {
      "Økonomi og administrasjon": 0,
      "Innovasjon og entreprenørskap": 0,
      "Teknologi og digitalisering": 0,
    };

    arrayOfPickedAnswers.forEach((answer) => {
      categoryCounts[answer.category]++;
    });

    const totalAnswers = arrayOfPickedAnswers.length;
    const percentages = Object.keys(categoryCounts).map((category) => {
      const count = categoryCounts[category];
      return {
        category,
        percentage: ((count / totalAnswers) * 100).toFixed(2),
      };
    });

    console.log("Resultater:", percentages); // Log the results to the console for now
    // You can display these percentages as needed
  };

  return (
    <div className="question-card">
      <Question question={currentQuestion.question} />
      <Options
        options={currentQuestion.options}
        handleOptionClick={handleOptionClick}  // Pass the option click handler
      />
      <Button
        onClick={handleNext}
        text={currentQuestionIndex < allQuestions.length - 1 ? "Neste" : "Fullfør"}
      />
    </div>
  );
}

export default CatQuiz;
