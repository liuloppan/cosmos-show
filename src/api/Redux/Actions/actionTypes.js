/* All the action types are collected here, to make it easier for debugging. */

export const actionTypes = {
  // action types for property tree
  initializedPropertyTree: 'PROPERTY_TREE_INITIALIZED',
  updatePropertyValue: 'PROPERTY_TREE_UPDATE_NODE',
  setPropertyValue: 'PROPERTY_TREE_SET',
  subscribeToProperty: 'PROPERTY_TREE_SUBSCRIBE',
  unsubscribeToProperty: 'PROPERTY_TREE_UNSUBSCRIBE',
  addPropertyOwners: 'PROPERTY_TREE_ADD_OWNERS',
  addProperties: 'PROPERTY_TREE_ADD_PROPERTIES',
  removePropertyOwners: 'PROPERTY_TREE_REMOVE_OWNERS',
  removeProperties: 'PROPERTY_TREE_REMOVE_PROPERTIES',
  reloadPropertyTree: 'PROPERTY_TREE_RELOAD',
  refreshGroups: 'GROUPS_REFRESH',

  updateTime: 'TIME_UPDATE',

  // action types for connection
  startConnection: 'CONNECTION_START',
  onOpenConnection: 'CONNECTION_ON_OPEN',
  onCloseConnection: 'CONNECTION_ON_CLOSE',
  changeConnectionWait: 'CONNECTION_CHANGE_WAIT',

  initializeLuaApi: 'LUA_API_INITIALIZE',

  // action types for version
  getVersion: 'VERSION_GET',
  initializeVersion: 'VERSION_INITIALIZE',

  // views
  setCurrentView: 'VIEW_SET_CURRENT'
};
