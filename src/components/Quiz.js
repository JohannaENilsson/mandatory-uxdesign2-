import React, { useState, useEffect } from 'react';

import { useForm, Controller } from 'react-hook-form';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import PopUp from './PopUp';
import CheckAnswers from '../actions/CheckAnswers';
import { entities, defaultValues } from '../actions/Utils';
import { updateScore } from '../actions/Store';

export default function Quiz({ questions, restartGame, setQuestions }) {
  const { register, handleSubmit, reset } = useForm({ defaultValues });
  const [showModal, setShowModal] = useState(false);
  const [currentScore, handleCurrentScore] = useState(null);
  const [trivia, handleTrivia] = useState(null);

  useEffect(() => {
    const shuffle = questions.map(option => {
      const options = option.incorrect_answers.concat(option.correct_answer);
      const mixedOptions = options.sort(() => Math.random() - 0.5);
      const question = option.question;
      return { question, mixedOptions };
    });

    return handleTrivia(shuffle);
  }, [questions]);

  function deactivateModal() {
    setShowModal(false);
    setQuestions(null);
  }

  function handleRestartGame() {
    restartGame();
    reset(defaultValues);
    setShowModal(false);
  }

  const onSubmit = data => {
    const score = CheckAnswers(data, questions);
    console.log(data);
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
            const number = (idx += 1);

            const mixedOptions = question.mixedOptions;

            return (
              <Card key={number} className='Card'>
                <fieldset aria-labelledby={`question_head-${number}`}>
                  <h2> Question {number} </h2>
                  <h3 id={`question_head-${number}`}>
                    {question.question.replace(
                      /&#?\w+;/g,
                      match => entities[match]
                    )}
                  </h3>

                  {mixedOptions.map((option, index) => {
                    const uniqueKey = `${number}${index}`;

                    let fixedOption = option.replace(
                      /&#?\w+;/g,
                      match => entities[match]
                    );

                    return (
                      <React.Fragment key={uniqueKey}>
                        <input
                          name={number}
                          type='radio'
                          id={`${number}-${fixedOption}`}
                          value={fixedOption}
                          // aria-label={fixedOption}
                          aria-required='true'
                          ref={register({ required: true })}
                        />
                        <label htmlFor={`${number}-${fixedOption}`}>
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
