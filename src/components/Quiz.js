import React, { useState, useEffect } from 'react';

import { useForm } from 'react-hook-form';

import PopUp from './PopUp';
import { CheckAnswers } from '../actions/Funcs';
import { entities, defaultValues } from '../actions/Utils';
import { updateScore, score$ } from '../actions/Store';

export default function Quiz({ apiData, restartGame, handleApiData }) {
  const { register, handleSubmit, reset } = useForm({ defaultValues });
  const [showModal, setShowModal] = useState(false);
  const [gameResults, setGameResults] = useState(null);
  const [trivia, handleTrivia] = useState(null);

  useEffect(() => {
    const shuffle = apiData.map(data => {
      const options = data.incorrect_answers.concat(data.correct_answer);
      const mixedOptions = options.sort(() => Math.random() - 0.5);
      const question = data.question;
      return { question, mixedOptions };
    });

    return handleTrivia(shuffle);
  }, [apiData]);

  function deactivateModal() {
    setShowModal(false);
    handleApiData(null);
  }

  function handleRestartGame() {
    restartGame();
    reset(defaultValues);
    setShowModal(false);
  }

  const onSubmit = data => {
    const score = CheckAnswers(data, apiData);

    setGameResults(score);

    let newResult = { ...score$.value };

    newResult.gamesPlayed++;
    newResult.correctAnswers += score;
    newResult.incorrectAnswers += apiData.length - score;
    newResult.correctPercentage =
      Math.round(
        (newResult.correctAnswers /
          (newResult.correctAnswers + newResult.incorrectAnswers)) *
          100
      ) + '%';

    updateScore(newResult);
    setShowModal(true);
  };

  return (
    <>
      {showModal ? (
        <PopUp
          deactivateModal={deactivateModal}
          handleRestartGame={handleRestartGame}
          gameResults={gameResults}
          amountOfQuestions={apiData}
        />
      ) : null}

      {trivia ? (
        <form onSubmit={handleSubmit(onSubmit)} aria-label='Quiz'>
          {trivia.map((question, idx) => {
            const number = idx + 1;

            const options = question.mixedOptions;

            return (
              <fieldset aria-label={`question_head-${idx}`} key={idx}>
                <legend> Question {number} </legend>
                <h2>
                  {question.question.replace(
                    /&#?\w+;/g,
                    match => entities[match]
                  )}
                </h2>

                {options.map((option, index) => {
                  const uniqueKey = `${idx}${index}`;

                  let fixedOption = option.replace(
                    /&#?\w+;/g,
                    match => entities[match]
                  );

                  return (
                    <React.Fragment key={uniqueKey}>
                      <input
                        name={idx}
                        type='radio'
                        id={`${idx}${fixedOption}`}
                        value={option}
                        required
                        aria-required='true'
                        ref={register({ required: true })}
                      />
                      <label htmlFor={`${idx}${fixedOption}`}>
                        {fixedOption}
                      </label>
                    </React.Fragment>
                  );
                  // }
                })}
              </fieldset>
            );
          })}
          <button className='startGame' type='submit' aria-label='submit quiz'>
            Submit
          </button>
        </form>
      ) : null}
    </>
  );
}
