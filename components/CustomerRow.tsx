import React from 'react'
import { Contact } from '../redux/state'

interface ContactRowProps {
  contact: Contact
}

export default function CustomerRow(props: ContactRowProps) {
  return (
    <tr>
      <th>{props.contact.id}</th>
      <td>{props.contact.country.iso}</td>
      <td>
        {props.contact.first_name} {props.contact.last_name}
      </td>
      <td>{props.contact.phone_number}</td>
    </tr>
  )
}
