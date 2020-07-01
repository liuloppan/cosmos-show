import React, { useState } from 'react';
import { useLuaApi, useProperty } from '../../api/hooks';
import './ToolBar.scss';
import { ApplyFlyToKey, FlightDestinationDistKey, NavigationAnchorKey } from '../../keys';
import ToggleButton from './../Buttons/ToggleButton';

const ToolBar = () => {
  const openspace = useLuaApi();
  const [flyIn, setFlyIn] = useState(undefined);
  const [anchor] = useProperty(NavigationAnchorKey);
  const [flightDestination, setFlightDestination] = useProperty(FlightDestinationDistKey);
  const [isFlying, setIsFlying] = useProperty(ApplyFlyToKey);

  const onClickFlyIn= () => {
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

  const onClickFlyOut= () => {
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

  return (
    <div className='toolsWrapper'>
      <div>
        Anchor: {anchor}
      </div>
      <div>
        Destination: {flightDestination}
      </div>
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
    </div>
  );
};

export default ToolBar;
