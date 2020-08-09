import ReduxState from '../state'
import {
  loadContactsAction,
  resetContactsAction,
} from '../actions/contacts.actions'
import { ReduxActionType } from '../types'
import { uniqBy } from 'lodash'

type State = ReduxState['contacts']

type Actions =
  | ReturnType<typeof loadContactsAction>
  | ReturnType<typeof resetContactsAction>

const initialState: State = []

export default function contactsReducer(
  state: State = initialState,
  action: Actions
): State {
  if (action.type === ReduxActionType.LOAD_CONTACTS) {
    return uniqBy([...state, ...action.payload.contacts], 'id')
  }
  if (action.type === ReduxActionType.RESET_CONTACTS) {
    return initialState
  }
  return state
}
