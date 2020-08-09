import React from 'react'
import BootstrapButton, { ButtonProps } from 'react-bootstrap/Button'
import { connect } from 'react-redux'

import { goToAction } from '../redux/actions/router.actions'
import { PATHS } from '../paths'

export interface LinkButtonOwnProps {
  path: PATHS
  buttonProps: ButtonProps
}

export interface LinkButtonActions {
  goToAction: typeof goToAction
}

export type LinkButtonProps = LinkButtonOwnProps & LinkButtonActions

const actions: LinkButtonActions = { goToAction }

const withStore = connect(null, actions)

function LinkButton(props: React.PropsWithChildren<LinkButtonProps>) {
  function handleClick() {
    props.goToAction(props.path)
  }

  return (
    <BootstrapButton onClick={handleClick} {...props.buttonProps}>
      {props.children}
    </BootstrapButton>
  )
}

export default withStore(LinkButton)
