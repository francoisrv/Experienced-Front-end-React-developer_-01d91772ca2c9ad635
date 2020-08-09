import axios from 'axios'
import { keys, pick } from 'lodash'
import { cacheAdapterEnhancer } from 'axios-extensions'
import { Contact } from '../redux/state'

const baseURL = 'https://api.dev.pastorsline.com/api'

const api = axios.create({
  adapter: cacheAdapterEnhancer(axios.defaults.adapter),
  baseURL,
})

interface FetchContactsOptions {
  page?: number
  country?: number
  query?: string
}

interface FetchParams {
  companyId: number
  page: number
  countryId?: number
  query?: string
}

export async function fetchContacts(
  options: FetchContactsOptions = {}
): Promise<{ total: number; contacts: Contact[] }> {
  const params: FetchParams = {
    companyId: 171,
    page: options.page || 1,
  }

  if (options.country) {
    params.countryId = options.country
  }

  if (options.query) {
    params.query = options.query
  }

  const response = await api.get('/contacts.json', {
    headers: {
      Authorization:
        'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxNzEiLCJleHAiOjE2MDM3ODM0Mzd9.3ievseHtX0t3roGh7nBuNsiaQeSjfiHWyyx_5GlOLXk',
    },
    params,
  })
  const { contacts } = response.data
  return {
    total: response.data.total,
    contacts: keys(contacts).map((id) =>
      pick(contacts[id], [
        'id',
        'country',
        'first_name',
        'last_name',
        'phone_number',
      ])
    ),
  }
}

export function fetchCountries() {}
