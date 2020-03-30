import React from 'react';
import ReactDom from 'react-dom';

export default function PopUp({handleCancelPopUp,handleRestartGame}){

    return ReactDom.createPortal((
        <div id="modal__background">
            <div id='modal__box'>
                <h1>Pop-Up</h1>
                <p>You got XX  answers right of 10!</p>
                <button onClick={handleCancelPopUp}>Close</button>
                <button onClick={handleRestartGame}>Play again</button>
            </div>

        </div>
    ), document.body);
    
}