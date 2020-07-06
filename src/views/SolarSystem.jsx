import React from 'react';
import RenderableControls from '../components/Controls/RenderableControls';
import SolarSystemToolBar from '../components/Controls/SolarSystemToolBar';
import './views.scss';
import { planets } from '../components/helperFunctions';

const SolarSystemView = () => {

  const generatePlanetControls = () => {
    let controls = [];

    planets.forEach(planet => {
      controls.push(
        <RenderableControls
          nodeName={planet}
          title={planet}
          toggleVisibility = {false}
          key={planet}
        />
      )
    })
    return controls;
  }

  return (
    <div className='view-wrapper'>
      <SolarSystemToolBar/>
      {generatePlanetControls()}
    </div>
  );
};

export default SolarSystemView;
