import { createLogger } from 'redux-logger'
import { compact } from 'lodash'
import { routerMiddleware } from 'connected-react-router'
import createDebounce from 'redux-debounced'

import browserHistory from '../history'
import sagaMiddleware from './sagas/middleware'

const middlewares = compact([
  // Redux logger middleware
  process.env.NODE_ENV === 'development' &&
    createLogger({
      collapsed: true,
      diff: true,
    }),

  // Router
  routerMiddleware(browserHistory),

  // Redux saga
  sagaMiddleware,

  // Redux debouncer
  createDebounce(),
])

export default middlewares
