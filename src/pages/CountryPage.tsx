import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { Country } from '@models/Country'
import { getApiData } from '@utils/http-helpers'

const CountryPage: React.FC = () => {
  const { countryName } = useParams()
  const { data, isLoading } = useQuery<Country[]>('countryData', () =>
    getApiData(`name/${countryName}`),
  )

  return <div>{!isLoading && data ? <div>{data[0].name}</div> : 'loading...'}</div>
}

export default CountryPage
