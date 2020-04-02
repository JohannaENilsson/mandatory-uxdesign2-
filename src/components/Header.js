import React from 'react';

export default function Header({ onClickMenu }) {
  return (
    <header>
      <button className='header__button' onClick={onClickMenu}>
        <i className='header__icon material-icons' >menu</i>
      </button>

      <h1 className='header__title'>Quiz</h1>
    </header>
  );
}
