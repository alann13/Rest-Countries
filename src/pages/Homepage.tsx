import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import { Box, GridItem, Spinner, SimpleGrid } from '@chakra-ui/react'
import SearchBox from '@components/SearchBox/SearchBox'
import { useSearchContext } from '@hooks/useSearch'
import { Country } from '@models/Country'
import { COUNTRY_PATH } from '@utils/constants'
import { getApiData } from '@utils/http-helpers'
import Card from '@components/Card/Card'

const HomePage: React.FC = () => {
  const [apiPath] = useState<string>('all')
  const { searchTerm } = useSearchContext()
  const { data: countries, isLoading } = useQuery<Country[]>(
    'countriesData',
    () => getApiData(apiPath),
  )

  const bySearchedCountry = ({ name }: Country): boolean => {
    return name.toLowerCase().includes(searchTerm)
  }

  return (
    <>
      <Box as="section" mb={10}>
        <SearchBox />
      </Box>
      <Box as="section">
        <SimpleGrid
          as="ul"
          columns={[1, 1, 2, 3, 4]}
          gap={16}
          justifyItems={['center', 'center', 'center', 'normal']}
        >
          {isLoading ? (
            <Spinner thickness="4px" />
          ) : (
            countries
              ?.filter(bySearchedCountry)
              .map(({ name, capital, flag, population, region }, index) => (
                <GridItem as="li" key={index} listStyleType="none">
                  <Link to={`/${COUNTRY_PATH}/${name}`}>
                    <Card
                      capital={capital[0]}
                      cardHeading={name}
                      imgAlt={name}
                      imgUrl={flag}
                      population={population}
                      region={region}
                    />
                  </Link>
                </GridItem>
              ))
          )}
        </SimpleGrid>
      </Box>
    </>
  )
}

export default HomePage
