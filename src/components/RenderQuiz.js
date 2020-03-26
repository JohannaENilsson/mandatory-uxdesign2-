import React from 'react';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function RenderQuiz({questions, handleSubmit, handleInput},submitAnswer) {
    console.log('input ', handleInput);
    console.log('sub', handleSubmit);
    console.log('sub ans ',  submitAnswer,);
  return (
    <Container fluid>
      <Row>
        <Col>
          <h1>Quiz</h1>
        </Col>
      </Row>
      <form onSubmit={(e) => handleSubmit(e)}>
        {questions.map((question, idx) => {
          const number = (idx += 1);

          let options = question.incorrect_answers;
          options.push(question.correct_answer);

          const mixedOptions = options.sort(() => Math.random() - 0.5);

          return (
            <Row key={number}>
              <Col>
                <Card className='text-center'>
                  <Card.Header>Question number {number}</Card.Header>
                  <Card.Body>
                    <Card.Title>{question.question}</Card.Title>

                    {mixedOptions.map((option, index) => {
                      const uniqueKey = `${number}${index}`;

                      if (index === 0) {
                        return (
                          <React.Fragment key={uniqueKey}>
                            <input
                              // key={uniqueKey}
                              type='radio'
                              id={`${number}-${option}`}
                              value={option}
                              name={question.question}
                              defaultChecked
                              onChange={(e) => handleInput}
                            />
                            <label htmlFor={`${number}-${option}`}>
                              {option}
                            </label>
                          </React.Fragment>
                        );
                      } else {
                        return (
                          <React.Fragment key={uniqueKey}>
                            <input
                              key={uniqueKey + '0'}
                              type='radio'
                              id={`${number}-${option}`}
                              value={option}
                              name={question.question}
                              onChange={(e) => console.log(e.target.checked, e.target.value)}
                            />
                            <label htmlFor={`${number}-${option}`}>
                              {option}
                            </label>
                          </React.Fragment>
                        );
                      }
                    })}
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          );
        })}
        <Button variant='info'>
          {submitAnswer ? 'Checking...' : 'Submit'}
        </Button>
      </form>
    </Container>
  );
}
