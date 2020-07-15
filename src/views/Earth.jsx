import React from 'react';
import NodeControls from '../components/Controls/NodeControls';
import './views.scss';

const GeneralView = () => {

  return (
    <div className='view-wrapper'>
      <NodeControls
        nodeName="Earth"
        title="Earth"
      />
      <NodeControls
        nodeName="ISS"
        title="ISS"
      />
    </div>
  );
};

export default GeneralView;
