import React from 'react'
import Button from 'react-bootstrap/Button'

import 'bootstrap/dist/css/bootstrap.min.css'

import LinkButton from './LinkButton'
import { PATHS } from '../paths'
import Modal from './Modal'

export default function App() {
  return (
    <main>
      <LinkButton path={PATHS.ALL_CONTACTS}>Modal A</LinkButton>
      <LinkButton path={PATHS.US_CONTACTS}>Modal B</LinkButton>
      <Modal />
    </main>
  )
}
