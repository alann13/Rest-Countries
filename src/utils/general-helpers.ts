import { Country } from '@models/Country'

// Rest Countries API gives a very weird structure for languages.
// This is to format it as follow: country1, country2, country3
export const formattedLanguages = (countryData: Country) => {
  const languages = Object.keys(countryData.languages).reduce((acc, curr, index, array) => {
    if (index === array.length - 1) {
      return (acc += `${countryData.languages[curr]}`)
    }

    return (acc += `${countryData.languages[curr]}, `)
  }, '')

  return languages
}
