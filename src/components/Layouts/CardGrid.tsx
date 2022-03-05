import React from 'react'
import { SimpleGrid } from '@chakra-ui/react'

const CardGrid: React.FC = ({ children }) => {
  return (
    <SimpleGrid
      as="ul"
      columns={[1, 1, 2, 3, 4]}
      gap={16}
      justifyItems={['center', 'center', 'center', 'center', 'normal']}
    >
      {children}
    </SimpleGrid>
  )
}

export default CardGrid
