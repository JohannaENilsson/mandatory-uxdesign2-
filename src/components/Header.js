import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Header({ onClickMenu }) {
  let location = useLocation();

  let pageTitle;

  if (location.pathname === '/') {
    pageTitle = 'Quiz';
  } else {
    pageTitle =
      location.pathname.charAt(1).toUpperCase() + location.pathname.slice(2);
  }
  return (
    <header>
      <button id='header__button' onClick={onClickMenu}>
        <i className='header__icon material-icons'>menu</i>
      </button>

      <h1 className='header__title'>{pageTitle}</h1>
    </header>
  );
}
