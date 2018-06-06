import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk';

import reducers from '../reducers/preset-reducer.js';
import  { defaultPreset } from '../constants/preset-constants.js';

const logger = createLogger();
const middleWare = applyMiddleware(thunk, logger);
const presetStore = createStore(reducers, defaultPreset, middleWare);

export default presetStore;