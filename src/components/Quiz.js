import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

import RenderQuiz from './RenderQuiz';

// import Container from 'react-bootstrap/Container';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';

export default function Quiz({ questions }) {
  const [submitAnswer, setSubmitAnswer] = useState(false);
  const [answers, setAnswers] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.value);
    setSubmitAnswer(true);
  }

  function handleInput(answer) {
    console.log(answer);
  }
  return (
    <>
      <Helmet>
        <title>Quiz</title>
      </Helmet>
      <RenderQuiz
        questions={questions}
        submitAnswer={submitAnswer}
        handleSubmit={handleSubmit}
        handleInput={handleInput}
      />
    </>
  );
}
