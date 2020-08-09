export enum ModalName {
  A = 'A',
  B = 'B',
  C = 'C',
}

export enum ActionState {
  INACTIVE = 'INACTIVE',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
  FAILED = 'FAILED',
}

export interface Country {
  id: number
  iso: string
}

export interface Contact {
  id: number
  country: Country
  first_name: string
  last_name: string
  phone_number: string
}

export default interface ReduxState {
  contacts: Contact[]
  country: number
  currentModal: ModalName | null
  evenOnly: boolean
  fetchContactsState: ActionState
  page: number
  search: string
  total: number
}
