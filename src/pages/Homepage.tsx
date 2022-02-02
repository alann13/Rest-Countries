import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import SearchBox from '../components/SearchBox/SearchBox'
import { Country } from '../models/Country'
import { getApiData } from '../utils/http-helpers'
import { COUNTRY_PATH } from '../utils/constants'
import { useSearchContext } from '../hooks/useSearch'

const HomePage: React.FC = () => {
  const [apiPath, setApiPath] = useState<string>('all')
  const { searchTerm } = useSearchContext()
  const { data: countries } = useQuery<Country[]>('countriesData', () => getApiData(apiPath))

  const bySearchedCountry = (country: Country): boolean => {
    return country.name.toLowerCase().includes(searchTerm)
  }

  return (
    <div>
      <SearchBox />
      <ul>
        {countries?.filter(bySearchedCountry).map((country, index) => (
          <li key={index}>
            <Link to={`/${COUNTRY_PATH}/${country.name}`}>{country.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default HomePage
