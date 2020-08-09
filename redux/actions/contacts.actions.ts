import { ReduxActionType } from '../types'
import { Contact } from '../state'

export function fetchContactsAction() {
  return {
    type: ReduxActionType.FETCH_CONTACTS as ReduxActionType.FETCH_CONTACTS,
  }
}

export function fetchingContactsAction() {
  return {
    type: ReduxActionType.FETCHING_CONTACTS as ReduxActionType.FETCHING_CONTACTS,
  }
}

export function fetchedContactsAction() {
  return {
    type: ReduxActionType.FETCHED_CONTACTS as ReduxActionType.FETCHED_CONTACTS,
  }
}

export function loadContactsAction(contacts: Contact[]) {
  return {
    type: ReduxActionType.LOAD_CONTACTS as ReduxActionType.LOAD_CONTACTS,
    payload: { contacts },
  }
}

export function searchContactsAction(search: string) {
  return {
    type: ReduxActionType.SET_SEARCH as ReduxActionType.SET_SEARCH,
    payload: {
      search,
    },
  }
}

export function resetContactsAction() {
  return {
    type: ReduxActionType.RESET_CONTACTS as ReduxActionType.RESET_CONTACTS,
  }
}

export function setEvenOnlyAction() {
  return {
    type: ReduxActionType.SET_EVEN_ONLY as ReduxActionType.SET_EVEN_ONLY,
  }
}

export function setTotalAction(total: number) {
  return {
    type: ReduxActionType.SET_TOTAL as ReduxActionType.SET_TOTAL,
    payload: { total },
  }
}

export function loadContactsOnVisibilityAction() {
  return {
    type: ReduxActionType.LOAD_CONTACTS_ON_VISIBILITY as ReduxActionType.LOAD_CONTACTS_ON_VISIBILITY,
  }
}

export function setPageAction(page: number) {
  return {
    type: ReduxActionType.SET_PAGE as ReduxActionType.SET_PAGE,
    payload: {
      page,
    },
  }
}

export function setCountryAction(country: number) {
  return {
    type: ReduxActionType.SET_COUNTRY as ReduxActionType.SET_COUNTRY,
    payload: {
      country,
    },
  }
}
