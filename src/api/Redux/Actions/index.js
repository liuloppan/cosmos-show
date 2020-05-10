import { actionTypes } from './actionTypes';

export const initializedPropertyTree = () => ({
  type: actionTypes.initializedPropertyTree,
  payload: {}
});

export const updatePropertyValue = (uri, value) => ({
  type: actionTypes.updatePropertyValue,
  payload: {
    uri,
    value
  }
});

export const setPropertyValue = (uri, value) => ({
  type: actionTypes.setPropertyValue,
  payload: {
    uri,
    value
  }
});

export const addPropertyOwners = propertyOwners => ({
  type: actionTypes.addPropertyOwners,
  payload: {
    propertyOwners
  }
});

export const addProperties = properties => ({
  type: actionTypes.addProperties,
  payload: {
    properties
  }
});

export const refreshGroups = () => ({
  type: actionTypes.refreshGroups,
  payload: {}
});

export const subscribeToProperty = uri => ({
  type: actionTypes.subscribeToProperty,
  payload: {
    uri
  }
});

export const unsubscribeToProperty = uri => ({
  type: actionTypes.unsubscribeToProperty,
  payload: {
    uri
  }
});

export const updateTime = timeData => ({
  type: actionTypes.updateTime,
  payload: timeData
});

export const startConnection = () => ({
  type: actionTypes.startConnection,
  payload: {
  }
});

export const onOpenConnection = () => ({
  type: actionTypes.onOpenConnection,
  payload: {
  }
});

export const reloadPropertyTree = () => ({
  type: actionTypes.reloadPropertyTree,
  payload: {
  }
});

export const onCloseConnection = () => ({
  type: actionTypes.onCloseConnection,
  payload: {
  }
});

export const changeConnectionWait = value => ({
  type: actionTypes.changeConnectionWait,
  payload: {
    value
  }
});

export const getVersion = () => ({
  type: actionTypes.getVersion,
  payload: {}
});

export const initializeLuaApi = data => ({
  type: actionTypes.initializeLuaApi,
  payload: data
});

export const initializeVersion = data => ({
  type: actionTypes.initializeVersion,
  payload: data
});

export const setPopoverVisibility = data => ({
  type: actionTypes.setPopoverVisibility,
  payload: data
});

export const setShowAbout = show => ({
  type: actionTypes.setShowAbout,
  payload: show
});

export const setPopoverAttachment = data => ({
  type: actionTypes.setPopoverPosition,
  payload: data
});

export const setPopoverPosition = data => ({
  type: actionTypes.setPopoverPosition,
  payload: data
});

export const addNodePropertyPopover = data => ({
  type: actionTypes.addNodePropertyPopover,
  payload: data
});

export const removeNodePropertyPopover = data => ({
  type: actionTypes.removeNodePropertyPopover,
  payload: data
});

export const setPopoverActiveTab = data => ({
  type: actionTypes.setPopoverActiveTab,
  payload: data
});

export const setPropertyTreeExpansion = data => ({
  type: actionTypes.setPropertyTreeExpansion,
  payload: data
});
