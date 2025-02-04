import React, { useState } from "react";
import Question from "./Question";
import Options from "./Options";
import Button from "./Button";
import QuizData from "../QuizData";
import Result from "./Result";

const { tek } = QuizData;
const allQuestions = tek;

function TekQuiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [arrayOfPickedAnswers, setArrayOfPickedAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [quizResult, setQuizResult] = useState(null);

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
      Cybersikkerhet: 0,
      Informasjonsteknologi: 0,
      "Data Science": 0,
      "Artificial Intelligence": 0,
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

    console.log("Resultater:", percentages);

    const cybCount = categoryCounts["Cybersikkerhet"];
    const infCount = categoryCounts["Informasjonsteknologi"];
    const dataCount = categoryCounts["Data Science"];
    const aiCount = categoryCounts["Artificial Intelligence"];

    // Find the highest count
    const maxCount = Math.max(cybCount, infCount, dataCount, aiCount);

    // Identify all categories with the highest count
    const tiedCategories = [];

    if (cybCount === maxCount) tiedCategories.push("cyb");
    if (infCount === maxCount) tiedCategories.push("inf");
    if (dataCount === maxCount) tiedCategories.push("data");
    if (aiCount === maxCount) tiedCategories.push("ai");

    // Handle tie cases
    if (tiedCategories.length === 1) {
      // No tie, a clear winner
      setQuizResult(tiedCategories[0]);
    } else {
      // Tie detected
      setQuizResult("tie");
    }
  };

  // 🎯 Conditionally render the quiz result
  if (quizResult != null) {
    return (
      <Result result={quizResult} />
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

export default TekQuiz;
