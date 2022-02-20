import React from 'react'
import { useQuery } from 'react-query'
import { Box, Button, Heading, Image, List, Spinner } from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'
import { useParams, useNavigate } from 'react-router-dom'
import { Country } from '@models/Country'
import { getApiData } from '@utils/http-helpers'
import CardListItem from '@components/Card/CardInfo'

const CountryPage: React.FC = () => {
  const navigate = useNavigate()
  const { countryName } = useParams()
  const { data, isLoading } = useQuery<Country[]>('countryData', () =>
    getApiData(`name/${countryName}`),
  )
  const country = data ? data[0] : null

  const countryDetail = country
    ? [
        { item: 'native name', itemValue: country.nativeName },
        { item: 'population', itemValue: country.population.toLocaleString() },
        { item: 'region', itemValue: country.region },
        { item: 'sub region', itemValue: country.subregion },
        { item: 'capital', itemValue: country.capital[0] },
        {
          item: 'top level domain',
          itemValue: country.topLevelDomain[0],
        },
        {
          item: 'currencies',
          itemValue:
            country.currencies[Object.keys(country.currencies)[0]].name,
        },
      ]
    : []

  return (
    <>
      <Box as="section" mb={5}>
        <Button
          display="flex"
          leftIcon={<ArrowBackIcon />}
          onClick={() => navigate(-1)}
          p={0}
          textTransform="capitalize"
          variant="unstyled"
        >
          back
        </Button>
      </Box>
      <Box as="section">
        {!isLoading && country ? (
          <Box as="article" display="flex">
            <Image src={country.flag} w="35rem" />
            <Box>
              <Heading as="h2">{country.name}</Heading>
              <List>
                {countryDetail.map(({ item, itemValue }) => (
                  <CardListItem key={item} item={item} itemValue={itemValue} />
                ))}
              </List>
            </Box>
          </Box>
        ) : (
          <Spinner thickness="4px" />
        )}
      </Box>
    </>
  )
}

export default CountryPage
