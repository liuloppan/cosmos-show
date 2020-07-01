import {
  onOpenConnection,
  initializeLuaApi,
  onCloseConnection
} from '../Actions';

import { actionTypes } from '../Actions/actionTypes';
import api from '../../openspaceApi';
import { onConnectRunScripts } from '../../onConnected';

let openspace;

function initializeConnection(store) {
  async function onConnect() {
    openspace = await api.library();

    store.dispatch(initializeLuaApi(openspace));
    store.dispatch(onOpenConnection());
    onConnectRunScripts(openspace);
  }

  function onDisconnect() {
    store.dispatch(onCloseConnection());

    let reconnectionInterval = 1000;
    setTimeout(() => {
      api.connect();
      reconnectionInterval += 1000;
    }, reconnectionInterval);
  }

  api.onConnect(onConnect);
  api.onDisconnect(onDisconnect);
  api.connect();
}

export default store => next => action => {
  const result = next(action);
  switch (action.type) {
    case actionTypes.startConnection:
      initializeConnection(store);
      break;
    default:
      break;
  }
  return result;
};
