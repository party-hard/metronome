import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import reducers from '../reducers/preset-reducer'
import  defaultPreset from '../constants/preset-constants'

const logger = createLogger()
const middleWare = applyMiddleware(thunk, logger)

export default createStore(reducers, middleWare)