import React from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import { Box, Heading, Image, List, Spinner, Text, ListItem } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { Country } from '@models/Country'
import { getApiData, getBorderCountries } from '@utils/http-helpers'
import CardListItem from '@components/Card/CardInfo'
import BackButton from '@components/BackButton/BackButton'
import { formattedLanguages } from '@utils/general-helpers'
import { COUNTRY_PATH } from '@utils/constants'

const CountryPage: React.FC = () => {
  const { countryName } = useParams()
  const { data: countryData, isLoading } = useQuery<Country[]>(['countryData', countryName], () =>
    getApiData(`name/${countryName}`),
  )
  const country = countryData ? countryData[0] : null

  const { data: borderCountries } = useQuery<any[]>(
    'borderCountries',
    () => getBorderCountries(`${country?.borders.reduce((acc, curr) => (acc += curr + ','), '')}`),
    {
      enabled: !!country,
    },
  )

  const countryDetail = country
    ? [
        { item: 'native name', itemValue: country.nativeName },
        { item: 'population', itemValue: country.population.toLocaleString() },
        { item: 'region', itemValue: country.region },
        { item: 'sub region', itemValue: country.subregion },
        { item: 'capital', itemValue: country.capital[0] },
      ]
    : []

  const countryDetail2 = country
    ? [
        {
          item: 'top level domain',
          itemValue: country.topLevelDomain ? country.topLevelDomain[0] : '',
        },
        {
          item: 'currencies',
          itemValue: country.currencies[Object.keys(country.currencies)[0]].name,
        },
        {
          item: 'languages',
          itemValue: country ? formattedLanguages(country) : '',
        },
      ]
    : []

  return (
    <>
      <Box as="section" mb={5}>
        <BackButton />
      </Box>
      <Box as="section">
        {!isLoading && country ? (
          <Box
            alignItems={['start', 'start', 'center']}
            as="article"
            display="flex"
            flexDirection={['column', 'column', 'column', 'column', 'row']}
            justifyContent={['space-between']}
            w={['100%']}
          >
            {/* Left Side - Top Side Responsive */}
            <Image borderRadius="8px" src={country.flag} w={['100%', '100%', '35rem']} />

            {/* Right Side - Bottom Side Responsive */}
            <Box w={['35rem']} mt={[8, 8, 8, 8, 0]}>
              <Heading as="h2" mb={[6, 6, 6, 3, 3]}>
                {country.name}
              </Heading>
              <Box
                display={'flex'}
                flexDirection={['column', 'column', 'column', 'column', 'row']}
                justifyContent={'space-between'}
              >
                <List>
                  {countryDetail.map(({ item, itemValue }) => (
                    <CardListItem fontSize="1rem" key={item} item={item} itemValue={itemValue} />
                  ))}
                </List>
                <List mt={[6, 6, 6, 6, 0]}>
                  {countryDetail2.map(({ item, itemValue }) => (
                    <CardListItem fontSize="1rem" key={item} item={item} itemValue={itemValue} />
                  ))}
                </List>
              </Box>
              <Box mt={6}>
                <Text fontWeight="semibold" textTransform="capitalize">
                  border countries:
                </Text>
                <List display="flex" mt={3}>
                  {borderCountries?.map((borderCountry, index) => (
                    <ListItem
                      alignItems="center"
                      borderRadius="5px"
                      cursor="pointer"
                      display="flex"
                      fontSize="0.75rem"
                      justifyContent="center"
                      key={index}
                      mr={2}
                      minW="6rem"
                      p={3}
                      shadow="base"
                    >
                      <Link to={`/${COUNTRY_PATH}/${borderCountry.name.common}`}>
                        {borderCountry.name.common}
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </Box>
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
