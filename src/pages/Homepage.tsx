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
import Dropdown from '@components/Dropdown/Dropdown'

const HomePage: React.FC = () => {
  const { searchTerm } = useSearchContext()
  const [apiPath, setApiPath] = useState<string>('all')

  const { data: countries, isLoading } = useQuery<Country[]>(['countriesData', apiPath], () =>
    getApiData(apiPath),
  )

  const bySearchedCountry = ({ name }: Country): boolean => {
    return name.toLowerCase().includes(searchTerm)
  }

  const setRegion = (region: string): void => {
    setApiPath(region !== 'all' ? `/region/${region}` : region)
  }

  return (
    <>
      <Box
        as="section"
        mb={10}
        display="flex"
        justifyContent="space-between"
        flexDirection={['column', 'column', 'column', 'row']}
      >
        <Box w={['100%', '30rem']}>
          <SearchBox />
        </Box>
        <Box mt={[5, 5, 5, 0]}>
          <Dropdown selectHandler={setRegion} />
        </Box>
      </Box>
      <Box as="section">
        <SimpleGrid
          as="ul"
          columns={[1, 1, 2, 3, 4]}
          gap={16}
          justifyItems={['center', 'center', 'center', 'center', 'normal']}
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
