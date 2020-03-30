import React from 'react';
import ReactDom from 'react-dom';

export default function PopUp({handleCancelPopUp,handleRestartGame, currentScore}){

    return ReactDom.createPortal((
        <div id="modal__background">
            <div id='modal__box'>
                <h1>Pop-Up</h1>
                <p>you got of {currentScore} answer right out of 10</p>
                <button onClick={handleCancelPopUp}>Close</button>
                <button onClick={handleRestartGame}>Play again</button>
            </div>

        </div>
    ), document.body);
    
}