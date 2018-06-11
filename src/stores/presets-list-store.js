import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import presetsListReducer from '../reducers/presets-list-reducer'
import defaultPreset from '../constants/preset-constants'

const logger = createLogger()
const middleWare = applyMiddleware(thunk, logger)

export default createStore(presetsListReducer, [], middleWare)