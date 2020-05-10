import React from 'react';
import styles from './Overlay.scss';

const Overlay = props => (
  <div className='messageOverlay'>
    { props.children }
  </div>
);

export default Overlay;
