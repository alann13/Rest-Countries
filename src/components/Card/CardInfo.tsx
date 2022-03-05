import React from 'react'
import { ListItem, Text } from '@chakra-ui/react'

interface CardListItemProps {
  fontSize?: string
  item: string
  itemValue: string
}

const CardListItem: React.FC<CardListItemProps> = ({ fontSize, item, itemValue }) => {
  return (
    <ListItem display="flex" fontSize={fontSize ? fontSize : '0.875rem'} mb={1}>
      <Text fontWeight="semibold" textTransform="capitalize">
        {item}:&nbsp;
      </Text>
      <Text>{itemValue}</Text>
    </ListItem>
  )
}

export default CardListItem
