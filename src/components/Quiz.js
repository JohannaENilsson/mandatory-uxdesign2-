import React, { useState, useEffect } from 'react';

import { useForm } from 'react-hook-form';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import PopUp from './PopUp';
import { CheckAnswers } from '../actions/Funcs';
import { entities, defaultValues } from '../actions/Utils';
import { updateScore } from '../actions/Store';

export default function Quiz({ apiData, restartGame, handleApiData }) {
  const { register, handleSubmit, reset } = useForm({ defaultValues });
  const [showModal, setShowModal] = useState(false);
  const [currentScore, handleCurrentScore] = useState(null);
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
    console.log('submit ', data, apiData);
    handleCurrentScore(score);
    updateScore(score);
    setShowModal(true);
    console.log(score);
  };


  return (
    <>
      {showModal ? (
        <PopUp
          deactivateModal={deactivateModal}
          handleRestartGame={handleRestartGame}
          currentScore={currentScore}
        />
      ) : null}

      {trivia ? (
        <form onSubmit={handleSubmit(onSubmit)} aria-label='Quiz'>
          {trivia.map((question, idx) => {
            const number = (idx + 1);

            const options = question.mixedOptions;

            return (
              <Card key={idx} className='Card'>
                <fieldset aria-label={`question_head-${idx}`}>
                  <legend> Question {number} </legend>
                  <h2 > 
                  {/* id={`question_head-${idx}`} */}
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
                          id={`${idx}-${fixedOption}`}
                          value={option}
                          // aria-label={fixedOption}
                          aria-required='true'
                          ref={register({ required: true })}
                        />
                        <label htmlFor={`${idx}-${fixedOption}`}>
                          {fixedOption}
                        </label>
                      </React.Fragment>
                    );
                    // }
                  })}
                </fieldset>
              </Card>
            );
          })}
          <Button variant='info' type='submit' aria-label='submit quiz'>
            Submit
          </Button>
        </form>
      ) : null}
    </>
  );
}
