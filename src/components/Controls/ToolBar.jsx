import React, { useState } from 'react';
import { useLuaApi, useProperty } from '../../api/hooks';
import './ToolBar.scss';
import { ApplyFlyToKey, FlightDestinationDistKey, NavigationAnchorKey,
  BlackoutFactorKey, FlightSpeedKey, RotationalFrictionKey } from '../../keys';
import ToggleButton from './../Buttons/ToggleButton';
import Slider from './../Slider/Slider';

import { fadeIn, fadeOut } from './../helperFunctions';

const ToolBar = () => {
  const openspace = useLuaApi();
  const [flyIn, setFlyIn] = useState(false);
  const [flyOut, setFlyOut] = useState(false);
  const [anchor] = useProperty(NavigationAnchorKey);
  const [blackoutFactor] = useProperty(BlackoutFactorKey);
  const [rotationFriction, setRotationFriction] = useProperty(RotationalFrictionKey);
  const [, setFlightDestination] = useProperty(FlightDestinationDistKey);
  const [isFlying, setIsFlying] = useProperty(ApplyFlyToKey);
  const [flightSpeed, setFlightSpeed] = useProperty(FlightSpeedKey);

  const onClickFlyIn = () => {
    setFlightDestination(1);
    if(flyIn === true){
      setFlyIn(false);
      setIsFlying(false);
    }
    else{
      setIsFlying(true);
      setFlyIn(true);
      setFlyOut(false);
    }
  };

  const onClickFlyOut = () => {
    setFlightDestination(1.5E27);
    if(flyOut === true){
      setFlyOut(false);
      setIsFlying(false);
    }
    else{
      setIsFlying(true);
      setFlyOut(true);
      setFlyIn(false);
    }
  };

  const onClickRotationFriction = () => {
    setRotationFriction(!rotationFriction);
  };

  const onClickFade = () => {
    if(blackoutFactor > 0) {
      fadeOut(openspace, 1);
    }
    else{
      fadeIn(openspace, 1);
    }
  };

  const sliderCallback = val => {
    if(val > 0.01 && !isFlying){
      setIsFlying(true);
    }
    setFlightSpeed(val)
  };

  return (
    <div className='toolsWrapper'>
      <div>
        Focus: {anchor}
      </div>
      <Slider
        label= "Fly speed"
        min={0.0} max={0.15}
        defaultValue= {flightSpeed}
        callback={sliderCallback}
      />
      <ToggleButton
        onClick={onClickFlyIn}
        active={flyIn}
        label="Fly Towards"
      />
      <ToggleButton
        onClick={onClickFlyOut}
        active={flyOut}
        label="Fly Away"
      />
      <ToggleButton
        onClick={onClickRotationFriction}
        active={rotationFriction}
        label="Rotation Friction"
      />
      <ToggleButton
        onClick={onClickFade}
        active={!(blackoutFactor > 0)}
        label="Fade"
      />
    </div>
  );
};

export default ToolBar;
