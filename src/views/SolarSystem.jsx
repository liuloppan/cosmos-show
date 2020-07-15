import React from 'react';
import NodeControls from '../components/Controls/NodeControls';
import SolarSystemToolBar from '../components/Controls/SolarSystemToolBar';
import './views.scss';
import { planets } from '../components/helperFunctions';

const SolarSystemView = () => {

  const generatePlanetControls = () => {
    let controls = [];

    planets.forEach(planet => {
      controls.push(
        <NodeControls
          nodeName={planet}
          title={planet}
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
