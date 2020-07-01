import React from 'react';
import propTypes from 'prop-types';
import { useLuaApi, useProperty, useTimeout } from '../../api/hooks';
import ToggleButton from './../../components/Buttons/ToggleButton';
import ControlPanel from './ControlPanel';

import { toggleRenderable, retargetAnchor } from './../helperFunctions';
import { ApplyFlyToKey, FlightDestinationDistKey, NavigationAnchorKey } from '../../keys';

const RenderableControls = props => {
  const { nodeName, title, flightDistance,
    toggleVisibility, hasOpacityProp, multiNodeUri, customVis } = props;
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
      toggleRenderable(openspace, multiNodeUri, enabledTimeout, isActive, hasOpacityProp);
    }
    else if(customVis){
      toggleRenderable(openspace, nodeName, enabledTimeout, isActive, hasOpacityProp);
      customVis(openspace, isActive);
    }
    else {
      cancelEnabledTimeout();
      toggleRenderable(openspace, nodeName, enabledTimeout, isActive, hasOpacityProp);
    }

  };

  const onClickTarget = () => {
    setIsFlying(false);
    setFlightDestination(boundingSphere*2);
    retargetAnchor(openspace, nodeName);
  };

  const onClickFlyTo = () => {
    // We make sure that we target before flying
    setFlightDestination(boundingSphere*2);
    retargetAnchor(openspace, nodeName);

    if(!flightDistance){
      setFlightDestination(boundingSphere*4);
    }
    else{
      setFlightDestination(flightDistance);
    }
    setIsFlying(!isFlying);
  };

  return (
    <div className='wrapper'>
      <ControlPanel
        title={title}
        visible={isActive}
      >
        { toggleVisibility && (
          <ToggleButton
            onClick={onClickVis}
            active={renderableEnabled}
            label="Visibility"
          />)
        }
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
  hasOpacityProp: propTypes.bool
}

export default RenderableControls;
