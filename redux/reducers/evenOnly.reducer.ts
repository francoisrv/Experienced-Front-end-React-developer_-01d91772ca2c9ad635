import ReduxState from '../state'
import { setEvenOnlyAction } from '../actions/contacts.actions'
import { ReduxActionType } from '../types'

type State = ReduxState['evenOnly']

type Actions = ReturnType<typeof setEvenOnlyAction>

const initialState: State = false

export default function evenOnlyReducer(
  state: State = initialState,
  action: Actions
): State {
  if (action.type === ReduxActionType.SET_EVEN_ONLY) {
    return !state
  }
  return state
}
