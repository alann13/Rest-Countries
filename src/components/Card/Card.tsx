import React from 'react'
import { Box, Image, Heading, List } from '@chakra-ui/react'
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

  return (
    <Box boxShadow="lg" h={'21rem'} mb={5} w="16.5rem">
      <Image alt={imgAlt} h={'10rem'} src={imgUrl} w={'100%'} />
      <Box p={5}>
        <Heading as={'h2'} fontSize="1.125rem" fontWeight={'extrabold'} mb={5}>
          {cardHeading}
        </Heading>
        <List>
          {cardDetails.map(({ item, itemValue }) => (
            <CardListItem item={item} itemValue={itemValue} />
          ))}
        </List>
      </Box>
    </Box>
  )
}

export default Card
