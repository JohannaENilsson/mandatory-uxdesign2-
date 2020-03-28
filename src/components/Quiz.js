import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';

// import RenderQuiz from './RenderQuiz';

import Container from 'react-bootstrap/Container'; 
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export default function Quiz({ questions }) {
  const [submitAnswer, setSubmitAnswer] = useState(false);
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log('DATA IS ----> ', data);
  console.log('RENDERING');

  return (
    <>
      <Helmet>
        <title>Quiz</title>
      </Helmet>
      <Container fluid>
        <Row>
          <Col>
            <h1>Quiz</h1>
          </Col>
        </Row>
        <form onSubmit={handleSubmit(onSubmit)}>
          {questions.map((question, idx) => {
            const number = (idx += 1);

            let options = question.incorrect_answers.concat(question.correct_answer);
            // console.log('options concated  ',options);
            // console.log(question.correct_answer);

            const mixedOptions = options.sort(() => Math.random() - 0.5);
            // console.log(mixedOptions);

            return (
              <Row key={number}>
                <Col>
                  <Card className='text-center'>
                    <Card.Header>Question number {number}</Card.Header>
                    <Card.Body>
                      <Card.Title>{question.question}</Card.Title>

                      {mixedOptions.map((option, index) => {
                        const uniqueKey = `${number}${index}`;

                        return (
                          <React.Fragment key={uniqueKey}>
                            <input
                              name={question.question}
                              type='radio'
                              id={`${number}-${option}`}
                              value={option}
                              ref={register({ required: true })}
                              // checked={}
                              // onChange={() => handleInput(`${number}`, `${option}`)}
                            />
                            <label htmlFor={`${number}-${option}`}>
                              {option}
                            </label>
                          </React.Fragment>
                        );
                        // }
                      })}
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            );
          })}
          <button variant='info' type='submit'>
            {submitAnswer ? 'Checking...' : 'Submit'}
          </button>
        </form>
      </Container>
    </>
  );
}
