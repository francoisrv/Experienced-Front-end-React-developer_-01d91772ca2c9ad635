import ReduxState, { ActionState } from '../state'
import {
  fetchContactsAction,
  fetchingContactsAction,
  fetchedContactsAction,
} from '../actions/contacts.actions'
import { ReduxActionType } from '../types'

type State = ReduxState['fetchContactsState']

type Actions =
  | ReturnType<typeof fetchContactsAction>
  | ReturnType<typeof fetchingContactsAction>
  | ReturnType<typeof fetchedContactsAction>

const initialState: State = ActionState.INACTIVE

export default function fetchContactsStateReducer(
  state: State = initialState,
  action: Actions
): State {
  switch (action.type) {
    case ReduxActionType.FETCHING_CONTACTS:
      return ActionState.IN_PROGRESS
    case ReduxActionType.FETCHED_CONTACTS:
      return ActionState.DONE
  }
  return state
}
