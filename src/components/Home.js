import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Button from 'react-bootstrap/Button';

import Get from '../actions/Get';
import Quiz from './Quiz';

export default function Home() {
  const [questions, setQuestions] = useState(null);
  const [isLoading, setLoading] = useState(false);
  console.log('load Doom');
  

  function startGame() {
    setQuestions(null);
    setLoading(true);
    Get()
      .then(resp => {
        setLoading(false);
        setQuestions(resp.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }

  function restartGame() {
    Get()
      .then(resp => {
        setQuestions(resp.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <>
      <Helmet>{!questions ? <title>Home</title> : <title>Quiz</title>}</Helmet>
      <main id='maincontent'>
        {!questions ? (
          <Button variant='info' onClick={startGame}>
            {isLoading ? 'Loading...' : 'Start quiz'}
          </Button>
        ) : (
          <Quiz
            questions={questions}
            restartGame={restartGame}
            setQuestions={setQuestions}
          />
        )}
      </main>
    </>
  );
}
