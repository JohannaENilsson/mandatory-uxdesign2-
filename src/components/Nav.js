import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <>
    <h1>Quiz</h1>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/stats'>Stats</Link> 
        <Link to='about'>About</Link>
      </nav>
    </>
  );
}
