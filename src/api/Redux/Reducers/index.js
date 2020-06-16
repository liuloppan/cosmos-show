import { propertyTree } from './propertyTree';
import { time } from './time';
import connection from './connection';
import { luaApi } from './luaApi';
import views from './views';

// Add more reducers here
const openspaceApp = (state = {}, action) => {
  const propertyTreeReducer = propertyTree(state.propertyTree, action);
  const newState = {
    propertyTree: propertyTreeReducer,
    time: time(state.time, action),
    connection: connection(state.connection, action),
    luaApi: luaApi(state.luaApi, action),
    views: views(state.views, action)
  };
  return newState;
};

export default openspaceApp;
