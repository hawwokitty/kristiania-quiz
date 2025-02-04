import React, { useState } from "react";
import Question from "./Question";
import Options from "./Options";
import Button from "./Button";
import QuizData from "../QuizData";
import EcoQuiz from "./EcoQuiz";
import TekQuiz from "./TekQuiz";

const { cat } = QuizData;
const allQuestions = cat;

function CatQuiz() {
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
      "Økonomi og administrasjon": 0,
      "Innovasjon og entreprenørskap": 0,
      "Teknologi og digitalisering": 0,
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

    const ecoCount =
      categoryCounts["Økonomi og administrasjon"] +
      categoryCounts["Innovasjon og entreprenørskap"];
    const tekCount = categoryCounts["Teknologi og digitalisering"];

    if (ecoCount > tekCount) {
      setQuizResult("eco");
    } else if (tekCount > ecoCount) {
      setQuizResult("tek");
    } else {
      setQuizResult("tie");
    }
  };

  // 🎯 Conditionally render the quiz result
  if (quizResult === "tek") {
    return <TekQuiz />;
  } else if (quizResult === "eco") {
    return <EcoQuiz />;
  } else if (quizResult === "tie") {
    return <p>It's a tie! Try again to get a clear result.</p>;
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

export default CatQuiz;
