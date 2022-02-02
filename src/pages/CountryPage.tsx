import React from 'react'
import { useParams } from 'react-router-dom'
import { getApiData } from '../utils/http-helpers'
import { useQuery } from 'react-query'
import { Country } from '../models/Country'

const CountryPage: React.FC = () => {
  const { countryName } = useParams()
  const { data, isLoading } = useQuery<Country[]>('countryData', () =>
    getApiData(`name/${countryName}`),
  )

  return <div>{!isLoading && data ? <div>{data[0].name}</div> : 'loading...'}</div>
}

export default CountryPage
