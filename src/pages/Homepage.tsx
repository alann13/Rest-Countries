import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { getApiData } from '../utils/http-helpers'
import { Link } from 'react-router-dom'
import { Country } from '../models/Country'
import { COUNTRY_PATH } from '../utils/constants'

const HomePage: React.FC = () => {
  const [apiPath, setApiPath] = useState<string>('all')
  const { data: countries } = useQuery<Country[]>('countriesData', () => getApiData(apiPath))

  return (
    <div>
      <ul>
        {countries?.map((country, index) => (
          <li key={index}>
            <Link to={`/${COUNTRY_PATH}/${country.name}`}>{country.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default HomePage
