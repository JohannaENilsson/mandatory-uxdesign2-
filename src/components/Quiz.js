import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import PopUp from './PopUp';

export default function Quiz({ questions,restartGame,setQuestions }) {
  
  const [submitedAnswers, setsubmitedAnswers] = useState({});
  const { register, handleSubmit, errors } = useForm();
  const [showPopup, setShowPopup] = useState(false);
  

  // startGame(); // när vi trycker på restart
  function handleCancelPopUp(){
    setShowPopup(false);
    setQuestions(null);
  };

  function handleRestartGame(){
    restartGame()
    setShowPopup(false);
    
    
  }

  const onSubmit = data => {
    console.log('DATA IS ----> ', data);
    setsubmitedAnswers(data);
    
    setShowPopup(true);
  };
  console.log('RENDERING');

  return (
    <>
      <Helmet>
        <title>Quiz</title>
      </Helmet>
      <Container fluid>
        {showPopup ? <PopUp handleCancelPopUp={handleCancelPopUp} handleRestartGame={handleRestartGame}/> : null}
        <Row>
          <Col>
            <h1>Quiz</h1>
          </Col>
        </Row>
        <form onSubmit={handleSubmit(onSubmit)}
        aria-label="Quiz"
        >
          {questions.map((question, idx) => {
            const number = (idx += 1);

            let options = question.incorrect_answers.concat(
              question.correct_answer
            );

            const mixedOptions = options.sort(() => Math.random() - 0.5);

            return (
              <fieldset
                key={number}
                aria-labelledby={`question_head-${number}`}
                >
              <label>Question {number}
                <legend id={`question_head-${number}`}>
                  {question.question}
                </legend>
                </label>
                {/* <Row> */}
                {/* <Col> */}
                {/* <Card className='text-center'> */}
                {/* <Card.Header><h2>Question number {number}</h2></Card.Header> */}
                {/* <Card.Body> */}
                {/* <Card.Title><h2>{question.question}</h2></Card.Title> */}

                {mixedOptions.map((option, index) => {
                  const uniqueKey = `${number}${index}`;

                  return (
                    <React.Fragment key={uniqueKey}>
                      <label htmlFor={`${number}-${option}`}>{option}</label>

                      <input
                        name={number}
                        type='radio'
                        id={`${number}-${option}`}
                        value={option}
                        ref={register({ required: true })}
                      />
                    </React.Fragment>
                  );
                  // }
                })}
                {/* </Card.Body> */}
                {/* </Card> */}
                {/* </Col> */}
                {/* </Row> */}
              </fieldset>
            );
          })}
          <button variant='info' type='submit' >
          Submit
          </button>
        </form>
      </Container>
    </>
  );
}
