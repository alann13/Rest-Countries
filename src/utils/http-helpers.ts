import { Country } from '@models/Country'
import { REST_COUNTRIES_BASE_URL } from './constants'

// Can't really put type to param as this is coming from a third party api.
const toFormattedCountryData = (country: any): Country => {
  const {
    borders,
    currencies,
    name,
    population,
    region,
    subregion,
    capital,
    tld,
    flags,
  } = country

  return {
    borders,
    currencies,
    name: name.common,
    nativeName: name.official,
    population,
    region,
    subregion,
    capital: capital ? capital : ['No capital'],
    topLevelDomain: tld,
    flag: flags.png,
  }
}

export const getApiData = async (path: string): Promise<Country[]> => {
  try {
    const response = await fetch(`${REST_COUNTRIES_BASE_URL}/${path}`)
    const countryData = await response.json()

    const formattedCountriesData: Country[] = countryData.map(
      toFormattedCountryData,
    )

    return formattedCountriesData
  } catch (error) {
    console.error(error)
    throw new Error()
  }
}
