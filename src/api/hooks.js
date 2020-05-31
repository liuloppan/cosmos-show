import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState, useRef } from 'react';

import {
  subscribeToProperty,
  unsubscribeToProperty,
  setPropertyValue
} from './Redux/Actions';

export const useProperty = uri => {
  const dispatch = useDispatch();
  const property = useSelector(state => state.propertyTree.properties[uri]);

  useEffect(() => {
    dispatch(subscribeToProperty(uri));
    return () => {
      dispatch(unsubscribeToProperty(uri));
    };
  });
  const setValue = val => dispatch(setPropertyValue(uri, val));
  if (!property) {
    console.error('Could not fetch property with URI: ', uri);
  }
  return [property.value, setValue];
};

export const useTimeout = () => {
  let id;
  const idRef = useRef(id);

  const cancel = () => {
    clearTimeout(idRef.current);
  };
  const mySetTimeout = (callback, delay = 0) => {
    id = setTimeout(callback, delay);
    idRef.current = id;
  };
  useEffect(() => {
    return cancel;
  }, []);
  return [mySetTimeout, cancel];
};

export const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  function toggle() {
    setIsShowing(!isShowing);
  }
  function show() {
    setIsShowing(true);
  }
  function hide() {
    setIsShowing(false);
  }
  return {
    isShowing,
    toggle,
    show,
    hide
  };
};

export const useLuaApi = () => useSelector(state => state.luaApi);
