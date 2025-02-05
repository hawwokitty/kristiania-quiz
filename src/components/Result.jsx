import React, { useState, useEffect } from "react";
import QuizData from "../QuizData";

const { ecoBachelorPrograms, techBachelorPrograms } = QuizData;

function Result({ allResults }) {
  const [sortedPrograms, setSortedPrograms] = useState([]);

  useEffect(() => {
    // Determine if the category belongs to tech or eco programs
    const isTechCategory = allResults.some(result =>
      Object.values(techBachelorPrograms).some(program => program.category === result.category)
    );

    // Choose the correct program set
    const selectedPrograms = isTechCategory ? { ...techBachelorPrograms } : { ...ecoBachelorPrograms };
    console.log(selectedPrograms);
    console.log(allResults);
    

    // Add percentages
    allResults.forEach(({ category, percentage }) => {
      for (const key in selectedPrograms) {
        if (selectedPrograms[key].category === category) {
          selectedPrograms[key] = {
            ...selectedPrograms[key],
            percentage: parseFloat(percentage) // Convert to number for sorting
          };
        }
      }
    });

    // Convert object to array for sorting
    const programsArray = Object.values(selectedPrograms);

    // Sort by percentage in descending order
    programsArray.sort((a, b) => (b.percentage || 0) - (a.percentage || 0));

    setSortedPrograms(programsArray);
  }, [allResults]);

  return (
    <div className="question-card">
      {sortedPrograms.map((program, index) => (
        <div key={index}>
          <h3>{program.name || program.category}</h3>
          <p>{program.description}</p>
          <a href={program.url}>link til studieprogramside</a>
          <p>Percentage: {program.percentage !== undefined ? `${program.percentage}%` : "N/A"}</p>
        </div>
      ))}
    </div>
  );
}

export default Result;
