import Spinner from 'react-bootstrap/Spinner'
import React from 'react'
import { useVisible } from 'react-hooks-visible'
import { loadContactsOnVisibilityAction } from '../redux/actions/contacts.actions'
import { connect } from 'react-redux'

interface LoadingCustomersActions {
  loadContactsOnVisibilityAction: typeof loadContactsOnVisibilityAction
}

type LoadingCustomersProps = LoadingCustomersActions

const actions: LoadingCustomersActions = {
  loadContactsOnVisibilityAction,
}

const withStore = connect(null, actions)

function LoadingCustomers(props: LoadingCustomersProps) {
  const [targetRef, visible] = useVisible()
  if (visible) {
    setTimeout(() => {
      props.loadContactsOnVisibilityAction()
    }, 1000)
  }
  return (
    <div className="loading-customers" ref={targetRef}>
      <Spinner animation="grow" role="status" variant="primary" />
      <span>Loading customers...</span>
    </div>
  )
}

export default withStore(LoadingCustomers)
