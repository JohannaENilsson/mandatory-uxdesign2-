import React from 'react';
import { Helmet } from 'react-helmet';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

export default function Quiz({ questions }) {
  console.log(questions);

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

        {questions.map((question, idx) => {
          // console.log(question);
          const number = (idx += 1);

          let options = question.incorrect_answers;
          options.push(question.correct_answer);
          console.log('options ', options);

          const mixedOptions = options.sort(() => Math.random() - 0.5);
          console.log(mixedOptions);

          return (
            <Row key={number}>
              <Col>
                <Card className='text-center'>
                  <Card.Header>Question number {number}</Card.Header>
                  <Card.Body>
                    <Card.Title>{question.question}</Card.Title>
                    {mixedOptions.map((option, index) => {
                      const uniqKey = `${number}${index}`;
                      console.log(uniqKey);
                      return (
                        <>
                          <input
                            key={uniqKey}
                            type='radio'
                            // id={uniqKey}
                            value={option}
                            name={question.question}
                          />
                          <label htmlFor={option}>{option}</label>
                        </>
                      );
                    })}
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          );
        })}
      </Container>
    </>
  );
}
