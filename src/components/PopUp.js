import React from 'react';
import AriaModal from 'react-aria-modal';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function PopUp({
  handleRestartGame,
  gameResults,
  deactivateModal,
  amountOfQuestions
}) {
  return (
    <AriaModal
      titleText='Quiz is ended'
      onExit={deactivateModal}
      initialFocus='#demo-one-deactivate'
      underlayStyle={{ paddingTop: '2em' }}
    >
      <div id='demo-one-modal' className='modal' style={{ display: 'block' }}>
        
          <section className='popUp'>
          <h1>Pop-Up</h1>
  <p >you got {gameResults.score} answers right out of {amountOfQuestions.length}</p>
          <button className='startGame'  onClick={deactivateModal}>Close</button>
          <button className='startGame' onClick={handleRestartGame} id='demo-one-deactivate'>Play again</button>
          </section>
          
      </div>
    </AriaModal>
  );
}
