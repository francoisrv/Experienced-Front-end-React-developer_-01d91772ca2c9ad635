import Spinner from 'react-bootstrap/Spinner'
import React from 'react'
import { useVisible } from 'react-hooks-visible'

export default function LoadingCustomers() {
  const [targetRef, visible] = useVisible()
  console.log({ visible })
  return (
    <div className="loading-customers" ref={targetRef}>
      <Spinner animation="grow" role="status" variant="primary" />
      <span>Loading customers...</span>
    </div>
  )
}
