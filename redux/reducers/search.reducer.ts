import ReduxState from '../state'
import { searchContactsAction } from '../actions/contacts.actions'
import { ReduxActionType } from '../types'

type State = ReduxState['search']

type Actions = ReturnType<typeof searchContactsAction>

const initialState: State = ''

export default function searchReducer(
  state: State = initialState,
  action: Actions
): State {
  if (action.type === ReduxActionType.SET_SEARCH) {
    return action.payload.search
  }
  return state
}
