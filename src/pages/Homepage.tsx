import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import { Box, GridItem, Spinner } from '@chakra-ui/react'
import SearchBox from '@components/SearchBox/SearchBox'
import { useSearchContext } from '@hooks/useSearch'
import { Country } from '@models/Country'
import { COUNTRY_PATH } from '@utils/constants'
import { getApiData } from '@utils/http-helpers'
import Card from '@components/Card/Card'
import Dropdown from '@components/Dropdown/Dropdown'
import CardGrid from '@components/Layouts/CardGrid'

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

  if (isLoading) {
    return <Spinner thickness="4px" />
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

      {/* Country Cards Below */}
      <Box as="section">
        <CardGrid>
          {countries &&
            countries
              .filter(bySearchedCountry)
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
              ))}
        </CardGrid>
      </Box>
    </>
  )
}

export default HomePage
