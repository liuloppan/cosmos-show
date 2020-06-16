import React from 'react';
import './ControlPanel.scss';

const ControlPanel = props => {
  const {title, children, visible} = props;

  const cssClass = visible ? 'control-wrapper visible' : 'control-wrapper invisible';

  return (
    <div className={cssClass}>
      <div className='control-title'>
        {title}
      </div>
      {children}
    </div>
  );
};

export default ControlPanel;
