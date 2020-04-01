import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Button from 'react-bootstrap/Button';

import {GetAPI} from '../actions/Funcs';
import Quiz from './Quiz';

export default function Home() {
  const [apiData, handleApiData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  // console.log('load Doom');
  

  function startGame() {
    handleApiData(null);
    setLoading(true);
    GetAPI()
      .then(resp => {
        setLoading(false);
        handleApiData(resp.data.results);
        console.log(resp.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }

  function restartGame() {
    GetAPI()
      .then(resp => {
        handleApiData(resp.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <>
      <Helmet>{!apiData ? <title>Home</title> : <title>Quiz</title>}</Helmet>
      <main id='maincontent'>
        {!apiData ? (
          <Button variant='info' onClick={startGame}>
            {isLoading ? 'Loading...' : 'Start quiz'}
          </Button>
        ) : (
          <Quiz
            apiData={apiData}
            restartGame={restartGame}
            handleApiData={handleApiData}
          />
        )}
      </main>
    </>
  );
}
