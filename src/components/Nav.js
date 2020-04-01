import React from 'react';
import { Link } from 'react-router-dom';
import AriaModal from 'react-aria-modal';

export default function Nav({ OnClickMask }) {

  return (
    <AriaModal
      titleText='menu'
      onExit={OnClickMask}
      initialFocus='#demo-one-deactivate'
      underlayStyle={{ paddingTop: '2em' }}
    >
      <div id='demo-one-modal' className='modal' style={{ display: 'block' }}>
        <nav className='Nav' id='modal-body'>
          <Link onClick={OnClickMask} to='/' id='demo-one-deactivate'>
            Home
          </Link>
          <Link onClick={OnClickMask} to='/stats'>
            Stats
          </Link>
          <Link onClick={OnClickMask} to='about'>
            About
          </Link>
        </nav>
      </div>
    </AriaModal>
  );
}
