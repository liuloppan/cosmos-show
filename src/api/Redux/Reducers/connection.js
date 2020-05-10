import { actionTypes } from '../Actions/actionTypes';

export const ConnectionStates = {
  connecting: 'CONNECTING',
  connected: 'CONNECTED',
  disconnected: 'DISCONNECTED',
  closeConnection: 'CLOSE'
};

const defaultState = {
  connection: ConnectionStates.disconnected
};

export default (state = defaultState, action) => { // state refers to connection
  switch (action.type) {
    case actionTypes.startConnection:
      return {
        ...state,
        connection: ConnectionStates.connecting
      };
    case actionTypes.onOpenConnection:
      return {
        ...state,
        connection: ConnectionStates.connected
      };
    case actionTypes.onCloseConnection:
      return {
        ...state,
        connection: ConnectionStates.closeConnection
      };
    case actionTypes.changeConnectionWait:
      return {
        ...state,
        connectionWait: action.payload.value
      };
    default:
      return state;
  }
};
