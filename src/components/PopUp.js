import React from 'react';
import AriaModal from 'react-aria-modal';

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
          <h1>Play again?</h1>
          <p>
            you got {gameResults} answers right of{' '}
            {amountOfQuestions.length}
          </p>
          <button className='startGame' onClick={deactivateModal}>
            Close
          </button>
          <button className='startGame' onClick={handleRestartGame} id='demo-one-deactivate'>
            Replay
          </button>
        </section>
      </div>
    </AriaModal>
  );
}
