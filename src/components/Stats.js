import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { updateScore, score$ } from '../actions/Store';

export default function Stats() {
  const [resetStats, setResetStats] = useState(false);

  if (!score$.value) {
    updateScore({
      gamesPlayed: 0,
      correctAnswers: 0,
      incorrectAnswers: 0,
      correctPercentage: 0 + '%'
    });
  }

  useEffect(() => {
    return updateScore(null);
  }, [resetStats]);

  return (
    <>
      <Helmet>
        <title>Stats</title>{' '}
      </Helmet>
      <main>
        <section>
          <h2>Your stats</h2>
          <p>Times played: {score$.value.gamesPlayed}</p>

          <p>
            Correct answers:
            {score$.value.correctAnswers}
          </p>

          <p>Incorrect answers: {score$.value.incorrectAnswers}</p>
          <p>Score: {score$.value.correctPercentage}</p>
          <button
            className='startGame'
            type='submit'
            aria-label='reset all stats'
            onClick={() => setResetStats(true)}
          >
            Reset
          </button>
        </section>
      </main>
    </>
  );
}
