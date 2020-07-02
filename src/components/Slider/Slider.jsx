import React, { useState } from 'react';
import propTypes from 'prop-types';
import './Slider.scss';

const numOfSteps = 50;

const Slider = props => {
  const { max, min, defaultValue, callback, label } = props;
  const [sliderValue, setSliderValue] = useState(defaultValue);

  // Runs whenever the slider changes from user input.
  const onSliderChanged = event => {
    const newSliderValue = Number(event.target.value);
    setSliderValue(newSliderValue);
    callback(newSliderValue);
  };

  return (
    <div className="slide-container">
      { label && (
        <p className="slider-label"> {label} </p>
      )}
      <input
        className="slider"
        id="slider"
        type="range"
        min={min}
        max={max}
        step={(max-min)/numOfSteps}
        value={sliderValue}
        onChange={onSliderChanged}
      />
    </div>
  );
};

Slider.defaultProps = {
  max: 100,
  min: 0,
  defaultValue: 50
}

Slider.propTypes = {
  max: propTypes.number,
  min: propTypes.number,
  defaultValue: propTypes.number,
  callback: propTypes.func.isRequired,
  label: propTypes.string
};

export default Slider;
