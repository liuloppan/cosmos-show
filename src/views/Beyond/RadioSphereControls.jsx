import React from 'react';
import { useLuaApi, useProperty, useTimeout } from '../../api/hooks';
import ToggleButton from './../../components/Buttons/ToggleButton';
import ControlPanel from './../../components/ControlPanel/ControlPanel';

import { getRenderableUri, toggleRenderable } from './../../components/helperFunctions';
import { ApplyFlyToKey, FlightDestinationDistKey,
  NavigationAnchorKey, NavigationAimKey, RetargetAnchorKey, RetargetAimKey } from '../../keys';
import './../views.scss';

const RadiosSphereControls = () => {
  const openspace = useLuaApi();
  const [, setFlightDestination] = useProperty(FlightDestinationDistKey);
  const [isFlying, setIsFlying] = useProperty(ApplyFlyToKey);
  const radioSphere = getRenderableUri('RadioSphere');
  const [radioSphereEnabled] = useProperty(radioSphere.enabledUri);
  const [radioSphereOpacity] = useProperty(radioSphere.opacityUri);
  const [enabledTimeout, cancelEnabledTimeout] = useTimeout();

  const isActive = radioSphereEnabled;

  const onClickVis = () => {
    cancelEnabledTimeout();
    toggleRenderable(openspace, "RadioSphere", enabledTimeout, isActive);
  };

  const onClickTarget = () => {
    toggleRenderable(openspace, "RadioSphere", enabledTimeout, isActive);
  };

  const onClickFlyTo = () => {
    setFlightDestination(3E18);
    setIsFlying(!isFlying);
  };

  return (
    <div className='wrapper'>
      <ControlPanel
        title="Radio Sphere"
      >
        <ToggleButton
          onClick={onClickVis}
          active={radioSphereEnabled}
          label="Visibility"
        />
        <ToggleButton
          onClick={onClickTarget}
          active= "false"
          label="Target center"
        />
        <ToggleButton
          onClick={onClickFlyTo}
          active={isFlying}
          label="Fly To"
        />
      </ControlPanel>

    </div>
  );
};

export default RadiosSphereControls;
