import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import PopUp from './PopUp';
import { updateScore } from '../actions/Store';

export default function Quiz({ questions, restartGame, setQuestions }) {
  const [submitedAnswers, setsubmitedAnswers] = useState({});
  const { register, handleSubmit, errors } = useForm();
  const [showPopup, setShowPopup] = useState(false);

  function checkAnswers(answers) {
    console.log('Users answers ', answers);

    let score = 0;
    console.log(score);

    for (let i = 0; i < questions.length; i++) {
      // console.log(questions[i].correct_answer);
      // console.log(answers[i]);
      if (questions[i].correct_answer === answers[i]) {
        console.log('They match');
        score++;
      } else {
        console.log('Wrong');
        
      }
      console.log(score);
    }
    console.log(score);
  }

  function handleCancelPopUp() {
    setShowPopup(false);
    setQuestions(null);
  }

  function handleRestartGame() {
    restartGame();
    setShowPopup(false);
  }

  const onSubmit = data => {
    // console.log('DATA IS ----> ', data);
    setsubmitedAnswers(data);
    checkAnswers(data);

    setShowPopup(true);
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
                    {question.question}
                  </legend>
                </label>

                {mixedOptions.map((option, index) => {
                  const uniqueKey = `${number}${index}`;

                  return (
                    <React.Fragment key={uniqueKey}>
                      <input
                        name={number}
                        type='radio'
                        id={`${number}-${option}`}
                        value={option}
                        aria-label={option}
                        aria-required='true'
                        ref={register({ required: true })}
                      />
                      <label htmlFor={`${number}-${option}`}>{option}</label>
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
