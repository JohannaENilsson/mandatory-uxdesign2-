import React from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

export default function RenderQuiz({
  questions,
  submitAnswer,
  onSubmit
},
answers) {
  // console.log('answers ', answers);
  console.log('when', questions);
  return (
    <form onSubmit={onSubmit(onSubmit)}>
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

                    return (
                      <React.Fragment key={uniqueKey}>
                        <input
                          name={question.question}
                          type='radio'
                          id={`${number}-${option}`}
                          value={option}
                          ref={answers({ required: true })}
                          // checked={}
                          // onChange={() => handleInput(`${number}`, `${option}`)}
                        />
                        <label htmlFor={`${number}-${option}`}>{option}</label>
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
  );
}
