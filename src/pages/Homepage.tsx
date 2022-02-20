import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import {
  Box,
  Button,
  GridItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spinner,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import SearchBox from '@components/SearchBox/SearchBox'
import { useSearchContext } from '@hooks/useSearch'
import { Country } from '@models/Country'
import { COUNTRY_PATH } from '@utils/constants'
import { getApiData } from '@utils/http-helpers'
import Card from '@components/Card/Card'

const HomePage: React.FC = () => {
  const [apiPath, setApiPath] = useState<string>('all')
  const dropdownBackgroundColor = useColorModeValue('white', '#2B3844')
  const { searchTerm } = useSearchContext()
  const { data: countries, isLoading } = useQuery<Country[]>(
    ['countriesData', apiPath],
    () => getApiData(apiPath),
  )

  const bySearchedCountry = ({ name }: Country): boolean => {
    return name.toLowerCase().includes(searchTerm)
  }

  const regions = ['all', 'africa', 'america', 'asia', 'europe', 'oceania']

  const setRegion = (region: string): void => {
    setApiPath(region !== 'all' ? `/region/${region}` : region)
  }

  return (
    <>
      <Box as="section" mb={10} display="flex" justifyContent="space-between">
        <SearchBox />
        <Menu>
          <MenuButton
            as={Button}
            bg={dropdownBackgroundColor}
            rightIcon={<ChevronDownIcon />}
            shadow="base"
          >
            Filter by Region
          </MenuButton>
          <MenuList>
            {regions.map((region) => (
              <MenuItem
                key={region}
                onClick={() => setRegion(region)}
                textTransform="capitalize"
              >
                {region}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
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
