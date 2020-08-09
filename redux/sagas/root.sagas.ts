import { all } from 'redux-saga/effects'
import routerSagas from './router.sagas'
import apiSagas from './api.sagas'

export default function* rootSagas() {
  yield all([routerSagas(), apiSagas()])
}
