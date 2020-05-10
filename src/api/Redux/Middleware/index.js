import { applyMiddleware } from 'redux';
//import logger from 'redux-logger';
import { propertyTree } from './propertyTree';
import { time } from './time';
import connection from './connection';

const middleware = applyMiddleware(
  // logger, // middleWare for logging state change
  propertyTree,
  time,
  connection
);

export default middleware;
