import { Country } from '@models/Country'
import { REST_COUNTRIES_BASE_URL } from './constants'

// Can't really put type to param as this is coming from a third party api.
const toFormattedCountryData = (country: any): Country => {
  const {
    borders,
    capital,
    currencies,
    flags,
    languages,
    name,
    population,
    region,
    subregion,
    tld,
  } = country

  return {
    borders,
    currencies,
    languages,
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

    const formattedCountriesData: Country[] = countryData.map(toFormattedCountryData)

    return formattedCountriesData
  } catch (error) {
    console.error(error)
    throw new Error()
  }
}

export const getBorderCountries = async (codes: any): Promise<any> => {
  try {
    const response = await fetch(`${REST_COUNTRIES_BASE_URL}/alpha?codes=${codes}`)
    const borderCountriesData = await response.json()
    console.log(borderCountriesData)
    return borderCountriesData
  } catch (error) {
    console.error(error)
    throw new Error()
  }
}
