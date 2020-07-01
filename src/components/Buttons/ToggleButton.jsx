import React from 'react';
import './ToggleButton.scss';

const ToggleButton = props => {
  const { onClick, active, label } = props;
  return (
    <div className="toggle-button-wrapper">
      <p className="label"> {label} </p>
      <label className="switch">
        <input type="checkbox" checked={active} onChange={onClick}/>
        <span className="toggle-slider round"></span>
      </label>
    </div>
  );
};

export default ToggleButton;
