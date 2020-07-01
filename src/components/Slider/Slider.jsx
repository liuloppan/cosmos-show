import React, { useState } from 'react';
import propTypes from 'prop-types';
import { useLuaApi, useProperty } from '../../api/hooks';
import './Slider.scss';

const sliderMax = 100;
const sliderMin = 0;

const Slider = props => {
  const { max, min, callback, label } = props;
  const [sliderValue, setSliderValue] = useState(0);

  const maxMinNormalize = val => {
    const newVal = (max - min)/ (sliderMax - sliderMin) * (val - min) + min;
    return newVal;
  }
  // Runs whenever the slider changes from user input.
  const onSliderChanged = event => {
    const newSliderValue = Number(event.target.value);
    setSliderValue(newSliderValue);
    callback(maxMinNormalize(newSliderValue));
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
        min={sliderMin}
        max={sliderMax}
        value={sliderValue}
        onChange={onSliderChanged}
      />
    </div>
  );
};

Slider.defaultProps = {
  max: 100,
  min: 0
}

Slider.propTypes = {
  max: propTypes.number,
  min: propTypes.number,
  callback: propTypes.func.isRequired,
  label: propTypes.string
};

export default Slider;
