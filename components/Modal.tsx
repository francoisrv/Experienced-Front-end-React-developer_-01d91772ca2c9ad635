import BootstrapModal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { connect } from 'react-redux'
import { pick } from 'lodash'
import React from 'react'
import { Switch, Route } from 'react-router-dom'

import ReduxState from '../redux/state'
import { closeModalAction } from '../redux/actions/modal.actions'
import { PATHS } from '../paths'
import ContactsTable from './ContactsTable'
import LinkButton from './LinkButton'
import SearchInput from './SearchInput'
import { setEvenOnlyAction } from '../redux/actions/contacts.actions'

type ModalStore = Pick<ReduxState, 'currentModal'> &
  Pick<ReduxState, 'evenOnly'>

interface ModalActions {
  closeModalAction: typeof closeModalAction
  setEvenOnlyAction: typeof setEvenOnlyAction
}

type ModalProps = ModalStore & ModalActions

const connector = (state: ReduxState): ModalStore =>
  pick(state, ['currentModal', 'evenOnly'])

const actions: ModalActions = {
  closeModalAction,
  setEvenOnlyAction,
}

const withStore = connect(connector, actions)

function Modal(props: ModalProps) {
  const open = props.currentModal !== null

  function handleClose() {
    props.closeModalAction()
  }

  return (
    <BootstrapModal
      show={open}
      onHide={handleClose}
      centered
      scrollable
      size="lg"
    >
      <BootstrapModal.Header>
        <BootstrapModal.Title>Modal {props.currentModal}</BootstrapModal.Title>
      </BootstrapModal.Header>

      <SearchInput />

      <BootstrapModal.Body id="contacts-modal-body">
        <Switch>
          <Route path={PATHS.ALL_CONTACTS} exact component={ContactsTable} />
          <Route path={PATHS.US_CONTACTS} exact component={ContactsTable} />
        </Switch>
      </BootstrapModal.Body>

      <BootstrapModal.Footer>
        <LinkButton
          path={PATHS.ALL_CONTACTS}
          buttonProps={{ className: 'button-A' }}
        >
          All Contacts
        </LinkButton>
        <LinkButton
          path={PATHS.US_CONTACTS}
          buttonProps={{ className: 'button-B' }}
        >
          US Contacts
        </LinkButton>
        <Button
          variant="secondary"
          onClick={props.closeModalAction}
          className="button-C"
        >
          Close
        </Button>
        <Form.Check
          type="checkbox"
          label="Even only"
          onChange={props.setEvenOnlyAction}
          checked={props.evenOnly}
        />
      </BootstrapModal.Footer>
    </BootstrapModal>
  )
}

export default withStore(Modal)
