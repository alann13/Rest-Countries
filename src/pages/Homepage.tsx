import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import { Box, List, ListItem } from '@chakra-ui/react'
import SearchBox from '@components/SearchBox/SearchBox'
import { useSearchContext } from '@hooks/useSearch'
import { Country } from '@models/Country'
import { COUNTRY_PATH } from '@utils/constants'
import { getApiData } from '@utils/http-helpers'

const HomePage: React.FC = () => {
  const [apiPath, setApiPath] = useState<string>('all')
  const { searchTerm } = useSearchContext()
  const { data: countries } = useQuery<Country[]>('countriesData', () => getApiData(apiPath))

  const bySearchedCountry = (country: Country): boolean => {
    return country.name.toLowerCase().includes(searchTerm)
  }

  return (
    <Box>
      <SearchBox />
      <List>
        {countries?.filter(bySearchedCountry).map((country, index) => (
          <ListItem key={index}>
            <Link to={`/${COUNTRY_PATH}/${country.name}`}>{country.name}</Link>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default HomePage
