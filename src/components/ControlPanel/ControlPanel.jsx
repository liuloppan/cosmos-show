import React from 'react';
import './ControlPanel.scss';

const ControlPanel = props => {
  const {title, children} = props;

  return (
    <div className='control-wrapper'>
      <div className='control-title'>
        {title}
      </div>
      {children}
    </div>
  );
};

export default ControlPanel;
