import ReduxState from '../state'
import { setCountryAction } from '../actions/contacts.actions'
import { ReduxActionType } from '../types'

type State = ReduxState['country']

type Actions = ReturnType<typeof setCountryAction>

const initialState: State = 0

export default function countryReducer(
  state: State = initialState,
  action: Actions
): State {
  if (action.type === ReduxActionType.SET_COUNTRY) {
    return action.payload.country
  }
  return state
}
