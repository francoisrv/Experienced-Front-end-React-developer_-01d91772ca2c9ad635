import ReduxState from '../state'
import { setPageAction } from '../actions/contacts.actions'
import { ReduxActionType } from '../types'

type State = ReduxState['page']

type Actions = ReturnType<typeof setPageAction>

const initialState: State = 1

export default function pageReducer(
  state: State = initialState,
  action: Actions
): State {
  if (action.type === ReduxActionType.SET_PAGE) {
    return action.payload.page
  }
  return state
}
