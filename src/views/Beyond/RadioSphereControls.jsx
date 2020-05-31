import React from 'react';
import { useLuaApi, useProperty, useTimeout } from '../../api/hooks';
import ToggleButton from './../../components/Buttons/ToggleButton';
import ControlPanel from './../../components/ControlPanel/ControlPanel';

import { getRenderableUri, toggleRenderable } from './../../components/helperFunctions';

import './../views.scss';

const RadiosSphereControls = () => {
  const openspace = useLuaApi();
  const radioSphere = getRenderableUri('RadioSphere');
  const [radioSphereEnabled] = useProperty(radioSphere.enabledUri);
  const [radioSphereOpacity] = useProperty(radioSphere.opacityUri);
  const [radioSphereTimeout, cancelTimeout] = useTimeout();

  const isActive = (radioSphereEnabled && (radioSphereOpacity === 1));

  const onClick = () => {
    cancelTimeout();
    toggleRenderable(openspace, "RadioSphere", radioSphereTimeout, isActive);
  };

  return (
    <div className='wrapper'>
      <ControlPanel
        title="Radio Sphere"
      >
        <ToggleButton
          onClick={onClick}
          active={isActive}
        >
        </ToggleButton>
      </ControlPanel>

    </div>
  );
};

export default RadiosSphereControls;
