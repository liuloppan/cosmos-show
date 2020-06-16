import { actionTypes } from '../Actions/actionTypes';

const defaultState = {
  currentView: 'Beyond'
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.setCurrentView:
      return {
        ...state,
        currentView: action.payload.view
      };
    default:
      return state;
  }
};
