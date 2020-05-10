import React from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import styles from './App.scss';
import Error from './components/Error/Error';
import Overlay from './components/Overlay/Overlay';

import { startConnection } from './api/Redux/Actions';
import { ConnectionStates } from './api/Redux/Reducers/connection';

function renderApp() {
  return (
    <div className='app'>
      SUCCESS!
    </div>
  );
}

function renderErrorOverlay(errorType) {

  return (
    <div className='app'>
      <Overlay>
        <Error className={'error' + ' ErrorBox'}>
          { errorType === 'disconnected-from-openspace' && (
            [<h2 key={1}>Houston, we have a...</h2>,
              <p key={2}>...disconnection between the user interface and OpenSpace.</p>,
              <p key={3}>Trying to reconnect automatically...</p>]
          )}
          { errorType === 'loading-properties' && (
            [<h2 key={1}>OpenSpace needs a second to load...</h2>,
              <p key={2}>
              We are loading data from OpenSpace, please standby.
              </p>
            ]
          )}
        </Error>
      </Overlay>
    </div>
  );
}

function App() {
  const dispatch = useDispatch();
  const selectedData = useSelector(state => (
    {
      connection: state.connection.connection,
      initializedProperties: state.propertyTree.initialized,
    }
  ), shallowEqual);

  // Handle connection to OpenSpace
  switch (selectedData.connection) {
    case ConnectionStates.connected:
      if (selectedData.initializedProperties === true) {
        return renderApp();
      }
      return renderErrorOverlay('loading-properties');
    case ConnectionStates.disconnected:
      dispatch(startConnection());
      console.info('Connecting to OpenSpace...');
    // fallthrough;
    default:
      return renderErrorOverlay('disconnected-from-openspace');
  }
}

export default App;
