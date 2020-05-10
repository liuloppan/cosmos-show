import { updateTime } from '../Actions';
import { actionTypes } from '../Actions/actionTypes';

import api from '../../openspaceApi';

let timeTopic;

function handleData(store, data) {
  store.dispatch(updateTime(data));
}

async function setupSubscription(store) {
  timeTopic = api.startTopic('time', {
    event: 'start_subscription'
  });
  // eslint-disable-next-line no-restricted-syntax
  for await (const data of timeTopic.iterator()) {
    handleData(store, data);
  }
}

export const time = store => next => action => {
  const result = next(action);

  switch (action.type) {
    case actionTypes.onOpenConnection:
      setupSubscription(store);
      break;
    default:
      break;
  }
  return result;
};

export default time;
