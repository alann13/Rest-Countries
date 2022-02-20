import React from 'react'
import { Box, Image, Heading, List, useColorModeValue } from '@chakra-ui/react'
import CardListItem from './CardInfo'

interface CardProps {
  capital: string
  cardHeading: string
  imgUrl: string
  imgAlt: string
  population: number
  region: string
}

const Card: React.FC<CardProps> = ({
  capital,
  cardHeading,
  imgAlt,
  imgUrl,
  population,
  region,
}) => {
  const cardDetails = [
    { item: 'population', itemValue: population.toLocaleString() },
    { item: 'region', itemValue: region },
    { item: 'capital', itemValue: capital },
  ]

  const cardBackgroundColor = useColorModeValue('white', '#2B3844')

  return (
    <Box
      backgroundColor={cardBackgroundColor}
      h={'21rem'}
      shadow="lg"
      w="16.5rem"
      _hover={{ shadow: '2xl' }}
    >
      <Image alt={imgAlt} h={'10rem'} src={imgUrl} w={'100%'} />
      <Box p={5}>
        <Heading as={'h2'} fontSize="1.125rem" fontWeight={'extrabold'} mb={5}>
          {cardHeading}
        </Heading>
        <List>
          {cardDetails.map(({ item, itemValue }) => (
            <CardListItem key={item} item={item} itemValue={itemValue} />
          ))}
        </List>
      </Box>
    </Box>
  )
}

export default Card
