import ReduxState from '../state'
import { setTotalAction } from '../actions/contacts.actions'
import { ReduxActionType } from '../types'

type State = ReduxState['total']

type Actions = ReturnType<typeof setTotalAction>

const initialState: State = 0

export default function totalReducer(
  state: State = initialState,
  action: Actions
): State {
  if (action.type === ReduxActionType.SET_TOTAL) {
    return action.payload.total
  }
  return state
}
