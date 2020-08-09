import { takeLatest, put, call, select } from 'redux-saga/effects'

import { ReduxActionType } from '../types'
import {
  fetchingContactsAction,
  fetchedContactsAction,
  loadContactsAction,
  fetchContactsAction,
  searchContactsAction,
  setTotalAction,
} from '../actions/contacts.actions'
import { fetchContacts } from '../../api/methods'
import { pick } from 'lodash'
import ReduxState, { ActionState } from '../state'

function* fetchContactsSaga(action: ReturnType<typeof fetchContactsAction>) {
  yield put(fetchingContactsAction())
  const { contacts, total } = yield call(fetchContacts, action.payload)
  yield put(fetchedContactsAction())
  yield put(setTotalAction(total))
  yield put(loadContactsAction(contacts))
}

function* searchSaga(action: ReturnType<typeof searchContactsAction>) {
  const { search } = action.payload
  const actionState = yield select(
    (state: ReduxState) => state.fetchContactsState
  )
  if (actionState === ActionState.IN_PROGRESS) {
  } else if (search.length) {
    console.log(search)
    yield put(fetchingContactsAction())
    const contacts = yield call(fetchContacts, { query: action.payload.search })
    yield put(fetchedContactsAction())
    yield put(loadContactsAction(contacts))
  } else {
    yield put(fetchedContactsAction())
  }
}

export default function* apiSagas() {
  yield takeLatest(ReduxActionType.FETCH_CONTACTS, fetchContactsSaga)
  yield takeLatest(ReduxActionType.SET_SEARCH, searchSaga)
}
