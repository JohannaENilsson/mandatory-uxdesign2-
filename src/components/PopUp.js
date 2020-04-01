import React from 'react';
import AriaModal from 'react-aria-modal';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function PopUp({
  handleRestartGame,
  currentScore,
  deactivateModal
}) {
  return (
    <AriaModal
      titleText='Quiz is ended'
      onExit={deactivateModal}
      initialFocus='#demo-one-deactivate'
      underlayStyle={{ paddingTop: '2em' }}
    >
      <div id='demo-one-modal' className='modal' style={{ display: 'block' }}>
        
            <Card id='modal-body'>
          <h1>Pop-Up</h1>
          <p >you got {currentScore} answers right out of 10</p>
          <Button variant='info'  onClick={deactivateModal}>Close</Button>
          <Button variant='info' onClick={handleRestartGame} id='demo-one-deactivate'>Play again</Button>
          </Card>
          
      </div>
    </AriaModal>
  );
}
