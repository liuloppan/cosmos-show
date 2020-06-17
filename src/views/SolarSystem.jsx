import React from 'react';
import RenderableControls from '../components/Controls/RenderableControls';
import './views.scss';

const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Saturn',
  'Jupiter','Uranus','Neptune'];

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
      {generatePlanetControls()}
    </div>
  );
};

export default SolarSystemView;
