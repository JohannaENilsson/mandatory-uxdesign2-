import React from 'react';
import { Helmet } from 'react-helmet';
import { updateScore, score$ } from '../actions/Store';


export default function Stats() {

  if(!score$.value){
    updateScore({
      gamesPlayed: 0,
      correctAnswers: 0,
      incorrectAnswers: 0,
      correctPercentage: 0 +'%'
    });
  }
  return (
    <>
      <Helmet>
        <title>Stats</title>{' '}
      </Helmet>
      <main>
        <section>
          <h2>Stats</h2>
          <p>Times played: {score$.value.gamesPlayed}
          </p>

          <p>Correct answers: 
          {score$.value.correctAnswers}
          </p>

          <p>Incorrect answers: {score$.value.incorrectAnswers}
          </p>
          <p>Score: {score$.value.correctPercentage}
          </p>
        </section>
      </main>
    </>
  );
}
