import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

import { GetAPI } from '../actions/Funcs';
import Quiz from './Quiz';

export default function Home() {
  const [apiData, handleApiData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  function startGame() {
    handleApiData(null);
    setLoading(true);
    GetAPI()
      .then(resp => {
        setLoading(false);
        handleApiData(resp.data.results);
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
          <button className='startGame start' onClick={startGame}>
            {isLoading ? 'Loading...' : 'Start quiz'}
          </button>
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
