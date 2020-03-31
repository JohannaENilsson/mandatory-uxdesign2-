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
      titleText='demo one'
      onExit={deactivateModal}
      initialFocus='#demo-one-deactivate'
      underlayStyle={{ paddingTop: '2em' }}
    >
      <div id='demo-one-modal' className='modal' style={{ display: 'block' }}>
        <div id='modal-body'>
            <Card>
          <h1>Pop-Up</h1>
          <p>you got of {currentScore} answer right out of 10</p>
          <Button variant='info'  onClick={deactivateModal}>Close</Button>
          <Button variant='info' id='demo-one-deactivate' onClick={handleRestartGame}>Play again</Button>
          </Card>
        </div>
      </div>
    </AriaModal>
  );
}
