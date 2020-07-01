import React from 'react';
import RenderableControls from '../components/Controls/RenderableControls';
import { toggleConstallationImages } from './../components/helperFunctions';
import './views.scss';

const BeyondView = () => {

  return (
    <div className='view-wrapper'>
      <RenderableControls
        nodeName="RadioSphere"
        title="Radio Sphere"
        flightDistance= {3E18}
      />
      <RenderableControls
        nodeName="Constellations"
        title="Star Constellations"
        flightDistance= {3E18}
        hasOpacityProp={false}
      />
      <RenderableControls
        nodeName="Constellation Art-Orion" //We pick one constallation to actually toggle
        title="Star Constellation Images"
        flightDistance= {3E15}
        customVis = {toggleConstallationImages}
        //multiNodeUri = "Constellation Art*"
      />
      <RenderableControls
        nodeName="Exoplanets"
        title="Exoplanets"
        flightDistance= {3E18}
      />
      <RenderableControls
        nodeName="MilkyWayVolume"
        title="Milky Way Galaxy"
        flightDistance= {9E20}
        toggleVisibility = {false}
      />
      <RenderableControls
        nodeName="SloanDigitalSkySurvey"
        title="Sloan Galaxy Sky Survey"
        flightDistance= {25E24}
        toggleVisibility = {false}
      />
      <RenderableControls
        nodeName="Planck"
        title="Cosmic Background Radiation"
        flightDistance= {1.5E27}
        toggleVisibility = {false}
      />
    </div>
  );
};

export default BeyondView;
