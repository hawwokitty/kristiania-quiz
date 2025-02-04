import React, { useState, useEffect } from 'react';
import QuizData from '../QuizData';

const { ecoBachelorPrograms, techBachelorPrograms } = QuizData;

function Result({ result, allResults }) {
  const [showResult, setShowResult] = useState(null);
  console.log(result);
  

  useEffect(() => {
    let program = null;

    // Handle Tech Programs
    switch (result) {
      case "cyb":
        program = techBachelorPrograms.cybersikkerhet;
        break;
      case "ai":
        program = techBachelorPrograms.artificialIntelligence;
        break;
      case "data":
        program = techBachelorPrograms.dataScience;
        break;
      case "inf":
        program = techBachelorPrograms.informasjonsteknologi.programs;
        break;

      // Handle Eco Programs
      case "led":
        program = ecoBachelorPrograms.okonomiLedelse;
        break;
      case "digi":
        program = ecoBachelorPrograms.digitaliseringOkonomi;
        break;
      case "logi":
        program = ecoBachelorPrograms.logistikkSCM;
        break;
      case "inno":
        program = ecoBachelorPrograms.innovasjonForretningsutvikling;
        break;

      default:
        program = null; // Handle unexpected cases
    }

    setShowResult(program);
  }, [result]);

  return (
    <div>
      {Array.isArray(showResult) ? (
        showResult.map((program, index) => (
          <div key={index}>
            <h2>{program.name}</h2>
            <p>{program.description}</p>
            <a href={program.url} target="_blank" rel="noopener noreferrer">
              {program.url}
            </a>
            <hr />
          </div>
        ))
      ) : showResult ? (
        <div>
          <h2>{showResult.name}</h2>
          <p>{showResult.description}</p>
          <a href={showResult.url} target="_blank" rel="noopener noreferrer">
            {showResult.url}
          </a>
        </div>
      ) : (
        <p>No program found.</p>
      )}
    </div>
  );
}

export default Result;
