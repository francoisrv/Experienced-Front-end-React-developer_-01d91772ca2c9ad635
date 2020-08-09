import ReduxState from '../state'
import { openModalAction, closeModalAction } from '../actions/modal.actions'
import { ReduxActionType } from '../types'

type State = ReduxState['currentModal']

type Actions =
  | ReturnType<typeof openModalAction>
  | ReturnType<typeof closeModalAction>

const initialState: State = null

export default function currentModalReducer(
  state: State = initialState,
  action: Actions
): State {
  if (action.type === ReduxActionType.OPEN_MODAL) {
    return action.payload.modal
  }
  if (action.type === ReduxActionType.CLOSE_MODAL) {
    return initialState
  }
  return state
}
