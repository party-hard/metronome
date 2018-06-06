
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk';

import presetsListReducer from '../reducers/presets-list-reducer.js';
import  { defaultPreset } from '../constants/preset-constants.js';

const logger = createLogger();
const middleWare = applyMiddleware(thunk, logger);
const presetStore = createStore(presetsListReducer, [], middleWare);

export default presetStore;