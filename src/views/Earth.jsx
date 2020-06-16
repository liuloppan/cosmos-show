import React from 'react';
import RenderableControls from '../components/Controls/RenderableControls';
import './views.scss';

const GeneralView = () => {

  return (
    <div className='view-wrapper'>
      <RenderableControls
        nodeName="Planck"
        title="Cosmic Background Radiation"
        flightDistance= {1.5E27}
        toggleVisibility = {false}
      />
    </div>
  );
};

export default GeneralView;
