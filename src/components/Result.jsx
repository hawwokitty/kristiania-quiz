import React, { useState, useEffect } from "react";
import QuizData from "../QuizData";
import Button from "./Button";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const { ecoBachelorPrograms, techBachelorPrograms } = QuizData;

function Result({ allResults }) {
  const [sortedPrograms, setSortedPrograms] = useState([]);
  const [showMore, setShowMore] = useState(false); // State for visibility

  useEffect(() => {
    // Determine if the category belongs to tech or eco programs
    const isTechCategory = allResults.some((result) =>
      Object.values(techBachelorPrograms).some(
        (program) => program.category === result.category
      )
    );

    // Choose the correct program set
    const selectedPrograms = isTechCategory
      ? { ...techBachelorPrograms }
      : { ...ecoBachelorPrograms };

    // Add percentages
    allResults.forEach(({ category, percentage }) => {
      for (const key in selectedPrograms) {
        if (selectedPrograms[key].category === category) {
          selectedPrograms[key] = {
            ...selectedPrograms[key],
            percentage: parseFloat(percentage), // Convert to number for sorting
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

  const handleGoToProgram = (programUrl) => {
    window.open(programUrl, "_blank");
  };

  const handleSeeMore = () => {
    setShowMore(!showMore); // Toggle visibility
  };


  return (
    <div className="question-card">
      <h2>🎉 Gratulerer! 🎉</h2>
      {sortedPrograms.length > 0 &&
        (sortedPrograms[0].category === "Informasjonsteknologi" ? (
          <div>
            <h3>
              Basert på dine svar passer du best til en{" "}
              {sortedPrograms[0].name || sortedPrograms[0].category}
            </h3>
            <p>
              Det finnes flere linjer innenfor kategorien Informasjonsteknologi,
              her er de:
            </p>
            {sortedPrograms[0].programs.map((program, index) => (
              <div key={index}>
                <h3>{program.name}</h3>
                <p>{program.description}</p>
                <p>
                  Er du klar for å utforske fremtiden din innen {program.name}?
                  Trykk på knappen under for mer informasjon:
                </p>
                <Button
                  onClick={() => handleGoToProgram(program.url)}
                  text={"Gå til programside"}
                />
              </div>
            ))}
          </div>
        ) : (
          <div>
            <h3>
              Basert på dine svar passer du best til en{" "}
              {sortedPrograms[0].name || sortedPrograms[0].category}
            </h3>
            <p>{sortedPrograms[0].description}</p>
            <p>
              Er du klar for å utforske fremtiden din innen{" "}
              {sortedPrograms[0].category}? Trykk på knappen under for mer
              informasjon:
            </p>
            <Button
              onClick={() => handleGoToProgram(sortedPrograms[0].url)}
              text={"Gå til programside"}
            />
          </div>
        ))}

      <p>
        Usikker på om dette er det rette valget for deg? <br />
        Utforsk de andre bachelorprogrammene du også har fått gode resultater
        på:
      </p>
      <Button
        onClick={handleSeeMore}
        text={showMore ? <FaChevronUp /> : <FaChevronDown />}
      />

      {showMore && (
        <div>
          {sortedPrograms.slice(1).map((program, index) => (
            <div key={index}>
              {program.category === "Informasjonsteknologi" ? (
                <div>
                  {techBachelorPrograms.informasjonsteknologi.programs.map(
                    (techProgram, techIndex) => (
                      <div key={techIndex}>
                        <h3>{techProgram.name}</h3>
                        <p>{techProgram.description}</p>
                        <p>
                    Er du klar for å utforske fremtiden din innen{" "}
                    {program.category}? Trykk på knappen under for mer
                    informasjon:
                  </p>
                        <Button
                          onClick={() => handleGoToProgram(techProgram.url)}
                          text={"Gå til programside"}
                        />
                      </div>
                    )
                  )}
                </div>
              ) : (
                <div>
                  <h3>{program.name || program.category}</h3>
                  <p>{program.description}</p>
                  <p>
                    Er du klar for å utforske fremtiden din innen{" "}
                    {program.category}? Trykk på knappen under for mer
                    informasjon:
                  </p>
                  <Button
                    onClick={() => handleGoToProgram(program.url)}
                    text={"Gå til programside"}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Result;
