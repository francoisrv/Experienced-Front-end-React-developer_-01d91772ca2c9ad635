import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import React from 'react'
import ReduxState, { ActionState } from '../redux/state'
import { searchContactsAction } from '../redux/actions/contacts.actions'
import { pick, debounce } from 'lodash'
import { connect } from 'react-redux'

type SearchInputStore = Pick<ReduxState, 'search'> &
  Pick<ReduxState, 'fetchContactsState'>

interface SearchInputActions {
  searchContactsAction: typeof searchContactsAction
}

type SearchInputProps = SearchInputStore & SearchInputActions

const connector = (state: ReduxState): SearchInputStore =>
  pick(state, ['search', 'fetchContactsState'])

const actions: SearchInputActions = {
  searchContactsAction,
}

const withStore = connect(connector, actions)

function SearchInput(props: SearchInputProps) {
  const [value, setValue] = React.useState('')
  const debouncedAction = debounce(
    () => props.searchContactsAction(value),
    1000
  )
  function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value)
    debouncedAction()
  }

  return (
    <Form>
      <FormControl
        placeholder="Search"
        value={value}
        onChange={changeHandler}
      />
    </Form>
  )
}

export default withStore(SearchInput)
