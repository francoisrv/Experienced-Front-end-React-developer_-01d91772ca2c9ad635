import { takeLatest, put, call, select } from 'redux-saga/effects'

import { ReduxActionType } from '../types'
import {
  fetchingContactsAction,
  fetchedContactsAction,
  loadContactsAction,
  fetchContactsAction,
  searchContactsAction,
  setTotalAction,
  loadContactsOnVisibilityAction,
  setPageAction,
} from '../actions/contacts.actions'
import { fetchContacts } from '../../api/methods'
import ReduxState, { ActionState } from '../state'
import { pick } from 'lodash'

function* fetchContactsSaga(action: ReturnType<typeof fetchContactsAction>) {
  yield put(fetchingContactsAction())
  const { country, page } = yield select((state: ReduxState) =>
    pick(state, ['country', 'page'])
  )
  const nextPage = page + 1
  yield put(setPageAction(nextPage))
  const { contacts, total } = yield call(fetchContacts, {
    country,
    page: nextPage,
  })
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

function* loadContactsOnVisibilitySaga(
  action: ReturnType<typeof loadContactsOnVisibilityAction>
) {
  const actionState = yield select(
    (state: ReduxState) => state.fetchContactsState
  )
  if (actionState === ActionState.DONE) {
    yield put(fetchContactsAction())
  }
}

export default function* apiSagas() {
  yield takeLatest(ReduxActionType.FETCH_CONTACTS, fetchContactsSaga)
  yield takeLatest(ReduxActionType.SET_SEARCH, searchSaga)
  yield takeLatest(
    ReduxActionType.LOAD_CONTACTS_ON_VISIBILITY,
    loadContactsOnVisibilitySaga
  )
}
