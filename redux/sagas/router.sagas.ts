import { takeLatest, put } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import { matchesPattern } from 'paramizer'

import { goToAction } from '../actions/router.actions'
import { ReduxActionType } from '../types'
import { PATHS } from '../../paths'
import { openModalAction } from '../actions/modal.actions'
import { ModalName } from '../state'
import {
  fetchContactsAction,
  resetContactsAction,
} from '../actions/contacts.actions'

function* goToSaga(action: ReturnType<typeof goToAction>) {
  yield put(push(action.payload.link))
}

function* changeLocationSaga(action: any) {
  // If page is ALL_CONTACTS, open Modal and load all contacts
  if (matchesPattern(action.payload.location.pathname, PATHS.ALL_CONTACTS)) {
    // Reset contacts if any
    yield put(resetContactsAction())
    // Open modal A
    yield put(openModalAction(ModalName.A))
    // Launch fetch contacts from API
    yield put(fetchContactsAction())
  } else if (
    // If page is US_CONTACTS, open Modal and load US contacts
    matchesPattern(action.payload.location.pathname, PATHS.US_CONTACTS)
  ) {
    // Reset contacts if any
    yield put(resetContactsAction())
    // Open modal B
    yield put(openModalAction(ModalName.B))
    // Launch fetch contacts from API
    yield put(fetchContactsAction(226))
  }
}

export default function* routerSagas() {
  yield takeLatest(ReduxActionType.GO_TO, goToSaga)
  yield takeLatest('@@router/LOCATION_CHANGE', changeLocationSaga)
}
