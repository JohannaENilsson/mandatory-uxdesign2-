import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import PopUp from './PopUp';
import CheckAnswers from '../actions/CheckAnswers';
import { updateScore } from '../actions/Store';

export default function Quiz({ questions, restartGame, setQuestions }) {
  const { register, handleSubmit, errors } = useForm();
  const [showPopup, setShowPopup] = useState(false);

  const entities = {
    '&#039;': "'",
    '&quot;': '"',
    '&ldquo;': '“',
    '&rdquo;': '”',
    '&ntilde;': 'ñ',
    '&eacute;': 'é',
    '&amp;': '&',
    '&uuml;': 'ü'
  };

  function handleCancelPopUp() {
    setShowPopup(false);
    setQuestions(null);
  }

  function handleRestartGame() {
    restartGame();
    setShowPopup(false);
  }

  const onSubmit = data => {
    const score = CheckAnswers(data, questions);
    setShowPopup(true);
    console.log(score);
  };

  return (
    <>
      <Helmet>
        <title>Quiz</title>
      </Helmet>
      <Container fluid>
        {showPopup ? (
          <PopUp
            handleCancelPopUp={handleCancelPopUp}
            handleRestartGame={handleRestartGame}
          />
        ) : null}
        <Row>
          <Col>
            <h1>Quiz</h1>
          </Col>
        </Row>
        <form onSubmit={handleSubmit(onSubmit)} aria-label='Quiz'>
          {questions.map((question, idx) => {
            const number = idx;

            let options = question.incorrect_answers.concat(
              question.correct_answer
            );

            const mixedOptions = options.sort(() => Math.random() - 0.5);

            return (
              <fieldset
                key={number}
                aria-labelledby={`question_head-${number}`}
              >
                <label>
                  Question {number}
                  <legend id={`question_head-${number}`}>
                    {question.question.replace(
                      /&#?\w+;/g,
                      match => entities[match]
                    )}
                  </legend>
                </label>

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
                        aria-label={fixedOption}
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
            );
          })}
          <button variant='info' type='submit'>
            Submit
          </button>
        </form>
      </Container>
    </>
  );
}
