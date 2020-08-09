import {
  createStore as createReduxStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux'

import * as reducers from './reducers'
import middlewares from './middlewares'
import rootSagas from './sagas/root.sagas'
import sagaMiddleware from './sagas/middleware'

export default function createStore() {
  const rootReducer = combineReducers(reducers)

  const store = createReduxStore(
    rootReducer,
    {},
    compose(applyMiddleware(...middlewares))
  )

  sagaMiddleware.run(rootSagas)

  return store
}
