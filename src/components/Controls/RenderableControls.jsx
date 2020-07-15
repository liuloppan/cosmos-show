/* RenderableControls is suitable for scene graph nodes
* with an attached renderable that you want to toggle.
* It provides:
* Picking as focus (Look at)
* Enabling linear flight using boundingsphere or a set flightDistance (Fly to)
* Toggling the renderable (visibility) */

import React from 'react';
import propTypes from 'prop-types';
import { useLuaApi, useProperty, useTimeout } from '../../api/hooks';
import ToggleButton from './../../components/Buttons/ToggleButton';
import ControlPanel from './ControlPanel';

import { toggleRenderable, retargetAnchor } from './../helperFunctions';
import { ApplyFlyToKey, FlightDestinationDistKey, NavigationAnchorKey } from '../../keys';

const RenderableControls = props => {
  const { nodeName, title, flightDistance, multiNodeUri, customVis } = props;
  const openspace = useLuaApi();

  const [boundingSphere] = useProperty('Scene.'+ nodeName +'.Renderable.BoundingSphere');
  const [anchor] = useProperty(NavigationAnchorKey);
  const [, setFlightDestination] = useProperty(FlightDestinationDistKey);
  const [isFlying, setIsFlying] = useProperty(ApplyFlyToKey);
  const [renderableEnabled] = useProperty('Scene.'+ nodeName +'.Renderable.Enabled');
  const [enabledTimeout, cancelEnabledTimeout] = useTimeout();

  const isActive = renderableEnabled;

  const onClickVis = () => {

    if (multiNodeUri) {
      toggleRenderable(openspace, multiNodeUri, enabledTimeout, isActive);
    }
    else if(customVis){
      toggleRenderable(openspace, nodeName, enabledTimeout, isActive);
      customVis(openspace, isActive);
    }
    else {
      cancelEnabledTimeout();
      toggleRenderable(openspace, nodeName, enabledTimeout, isActive);
    }

  };

  const onClickTarget = () => {
    setIsFlying(false);
    setFlightDestination(boundingSphere*4);
    retargetAnchor(openspace, nodeName);
  };

  const onClickFlyTo = () => {
    // We make sure that we target before flying
    if(!flightDistance){
      setFlightDestination(boundingSphere*4);
    }
    else{
      setFlightDestination(flightDistance);
    }

    if(anchor !== nodeName){
      setIsFlying(true);
      retargetAnchor(openspace, nodeName);
    }
    else{
      retargetAnchor(openspace, nodeName);
      setIsFlying(!isFlying);
    }
  };

  return (
    <div className='wrapper'>
      <ControlPanel
        title={title}
        visible={isActive}
      >
        <ToggleButton
          onClick={onClickVis}
          active={renderableEnabled}
          label="Visibility"
        />
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

RenderableControls.defaultProps = {
  toggleVisibility: true,
  hasOpacityProp: true
}

RenderableControls.propTypes = {
  nodeName: propTypes.string,
  title: propTypes.string,
  flightDistance: propTypes.number,
  toggleVisibility: propTypes.bool,
  hasOpacityProp: propTypes.bool,
  multiNodeUri: propTypes.string,
  customVis: propTypes.func
}

export default RenderableControls;
