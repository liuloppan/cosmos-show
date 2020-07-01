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
  const [flyIn, setFlyIn] = useState(undefined);
  const [anchor] = useProperty(NavigationAnchorKey);
  const [blackoutFactor] = useProperty(BlackoutFactorKey);
  const [rotationFriction, setRotationFriction] = useProperty(RotationalFrictionKey);
  const [, setFlightDestination] = useProperty(FlightDestinationDistKey);
  const [isFlying, setIsFlying] = useProperty(ApplyFlyToKey);
  const [, setFlightSpeed] = useProperty(FlightSpeedKey);

  const onClickFlyIn = () => {
    setFlightDestination(1);
    setIsFlying(!isFlying);
    if(flyIn === true){
      setFlyIn(undefined);
    }
    else{
      setFlyIn(true);
      setIsFlying(true);
    }
  };

  const onClickFlyOut = () => {
    setFlightDestination(1.5E27);
    setIsFlying(!isFlying);
    if(flyIn === false){
      setFlyIn(undefined);
    }
    else{
      setFlyIn(false);
      setIsFlying(true);
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
        callback={sliderCallback}
      />
      <ToggleButton
        onClick={onClickFlyIn}
        active={flyIn}
        label="Fly In "
      />
      <ToggleButton
        onClick={onClickFlyOut}
        active={flyIn === false}
        label="Fly Out "
      />
      <ToggleButton
        onClick={onClickFade}
        active={!(blackoutFactor > 0)}
        label="Fade "
      />
      <ToggleButton
        onClick={onClickRotationFriction}
        active={rotationFriction}
        label="Rotation Friction"
      />
    </div>
  );
};

export default ToolBar;
