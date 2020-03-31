import React from 'react';
import { Link } from 'react-router-dom';
import AriaModal from 'react-aria-modal';

export default function Nav({ OnClickMask }) {
  return (
    <AriaModal
      titleText='demo one'
      onExit={OnClickMask}
      initialFocus='#demo-one-deactivate'
      underlayStyle={{ paddingTop: '2em' }}
    >
      <nav className='Nav'>
          
        {/* <label onClick={OnClickMask} className='Nav__mask'>
          <button aria-label='Close menu' className='Nav__mask-button'></button>
        </label> */}

        <Link onClick={OnClickMask} to='/' id='demo-one-deactivate'>
          Home
        </Link>
        <Link onClick={OnClickMask} to='/stats'>Stats</Link>
        <Link onClick={OnClickMask}to='about'>About</Link>
      </nav>
    </AriaModal>
  );
}
