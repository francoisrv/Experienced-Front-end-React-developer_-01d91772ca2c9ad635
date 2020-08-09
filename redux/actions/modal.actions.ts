import { ReduxActionType } from '../types'
import { ModalName } from '../state'

export function openModalAction(modal: ModalName) {
  return {
    type: ReduxActionType.OPEN_MODAL as ReduxActionType.OPEN_MODAL,
    payload: { modal },
  }
}

export function closeModalAction() {
  return {
    type: ReduxActionType.CLOSE_MODAL as ReduxActionType.CLOSE_MODAL,
  }
}
