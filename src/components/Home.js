import React, { useState } from 'react';

import Get from '../actions/Get';
import Quiz from './Quiz';

export default function Home() {
  const [questions, setQuestions] = useState(null);

  function startGame() {
    Get()
      .then(resp => {
        console.log(resp.data.results);
        setQuestions(resp.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <>
    {!questions ? <button onClick={startGame}>Start quiz</button> : <Quiz questions={questions}/>}
    
      
    </>
  );
}
