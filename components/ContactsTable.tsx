import Table from 'react-bootstrap/Table'
import React from 'react'
import { pick } from 'lodash'
import { connect } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroll-component'

import LoadingCustomers from './LoadingCustomers'
import CustomerRow from './CustomerRow'
import ReduxState, { ActionState } from '../redux/state'
import { fetchContactsAction } from '../redux/actions/contacts.actions'

type ContactsTableStore = Pick<ReduxState, 'fetchContactsState'> &
  Pick<ReduxState, 'contacts'> &
  Pick<ReduxState, 'evenOnly'> &
  Pick<ReduxState, 'total'>

interface ContactsTableActions {
  fetchContactsAction: typeof fetchContactsAction
}

type ContactsTableProps = ContactsTableStore & ContactsTableActions

const connector = (state: ReduxState): ContactsTableStore =>
  pick(state, ['fetchContactsState', 'contacts', 'evenOnly', 'total'])

const actions: ContactsTableActions = {
  fetchContactsAction,
}

const withStore = connect(connector, actions)

function ContactsTable(props: ContactsTableProps) {
  const [page, setPage] = React.useState(1)

  function loadMore() {
    const nextPage = page + 1
    setPage(nextPage)
    props.fetchContactsAction(0, nextPage)
  }

  let content: React.ReactNode

  switch (props.fetchContactsState) {
    case ActionState.DONE:
      {
        content = props.contacts.map((contact) => (
          <CustomerRow key={contact.id} contact={contact} />
        ))
      }
      break
  }

  return (
    <InfiniteScroll
      dataLength={props.contacts.length}
      loader={<LoadingCustomers key={0} />}
      hasMore
      next={loadMore}
      scrollableTarget="contacts-modal-body"
    >
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <td>Country</td>
            <td>Name</td>
            <td>Phone</td>
          </tr>
        </thead>
        <tbody>
          {props.contacts
            .filter((contact) => {
              if (props.evenOnly) {
                return contact.id % 2 === 0
              }
              return true
            })
            .map((contact) => (
              <CustomerRow key={contact.id} contact={contact} />
            ))}
        </tbody>
      </Table>
    </InfiniteScroll>
  )
}

export default withStore(ContactsTable)
