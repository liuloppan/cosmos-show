import React from 'react';
import { useLuaApi, useProperty } from '../../api/hooks';
import './ToolBar.scss';
import { planets } from '../helperFunctions';
import ToggleButton from './../Buttons/ToggleButton';

const scale = 4000;

const CustomToolBar = () => {
  const openspace = useLuaApi();
  const [earthScale] = useProperty('Scene.Earth.Scale.Scale');

  const onClickResizePlanets = () => {
    if(earthScale > 1.0){
      setPlanetsScale(1);
    }
    else {
      setPlanetsScale(scale);
    }
  };

  const setPlanetsScale = scale => {
    planets.forEach( planet => {
      const planetScaleUri = 'Scene.'+ planet +'.Scale.Scale';
      openspace.setPropertyValueSingle(planetScaleUri, scale, 1);
    })
  }

  return (
    <div className='toolsWrapper'>
      <ToggleButton
        onClick={() => {onClickResizePlanets()}}
        active={earthScale > 1.0}
        label="Scale up planets"
      />
    </div>
  );
};

export default CustomToolBar;
