import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import reducers from '../reducers';

const { NODE_ENV } = process.env;
const middlewares = [];

if (NODE_ENV === 'development') middlewares.push(logger);

const store = createStore(reducers, {}, applyMiddleware(...middlewares));

export default store;
