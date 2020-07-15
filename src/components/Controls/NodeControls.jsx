/* Node Controls is suitable for scene graph nodes that might
* not have an attached renderable
* It provides:
* Picking as focus (Look at)
* Enabling linear flight using boundingsphere or a set flightDistance (Fly to) */

import React from 'react';
import propTypes from 'prop-types';
import { useLuaApi, useProperty } from '../../api/hooks';
import ToggleButton from './../../components/Buttons/ToggleButton';
import ControlPanel from './ControlPanel';

import { retargetAnchor } from './../helperFunctions';
import { ApplyFlyToKey, FlightDestinationDistKey, NavigationAnchorKey } from '../../keys';

const RenderableControls = props => {
  const { nodeName, title, flightDistance } = props;
  const openspace = useLuaApi();

  const [boundingSphere] = useProperty('Scene.'+ nodeName +'.BoundingSphere');
  const [anchor] = useProperty(NavigationAnchorKey);
  const [, setFlightDestination] = useProperty(FlightDestinationDistKey);
  const [isFlying, setIsFlying] = useProperty(ApplyFlyToKey);

  const onClickTarget = () => {
    setIsFlying(false);
    retargetAnchor(openspace, nodeName);
  };

  const onClickFlyTo = () => {
    // We make sure that we target before flying
    retargetAnchor(openspace, nodeName);

    if(!flightDistance){
      setFlightDestination(boundingSphere*4);
    }
    else{
      setFlightDestination(flightDistance);
    }
    if(anchor !== nodeName){
      setIsFlying(true);
    }
    else{
      setIsFlying(!isFlying);
    }
  };

  return (
    <div className='wrapper'>
      <ControlPanel
        title={title}
        visible={true}
      >
        <ToggleButton
          onClick={onClickTarget}
          active= {anchor === nodeName}
          label="Look at"
        />
        <ToggleButton
          onClick={onClickFlyTo}
          active={isFlying && anchor === nodeName}
          label="Fly To"
        />
      </ControlPanel>
    </div>
  );
};

RenderableControls.propTypes = {
  nodeName: propTypes.string,
  title: propTypes.string,
  flightDistance: propTypes.number
}

export default RenderableControls;
