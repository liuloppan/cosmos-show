import React from 'react';
import './ToggleButton.scss';

const ToggleButton = props => {
  const { onClick, active } = props;
  return (
    <div>
      <label className="switch">
        <input type="checkbox" checked={active} onChange={onClick}/>
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default ToggleButton;
