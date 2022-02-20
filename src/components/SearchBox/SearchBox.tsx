import React from 'react'
import { useSearchContext } from '@hooks/useSearch'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'

const SearchBox: React.FC = () => {
  const { searchTerm, setSearchTerm } = useSearchContext()

  return (
    <InputGroup w={['100%', '100%', '30rem']}>
      <InputLeftElement children={<Search2Icon />} pointerEvents="none" />
      <Input
        backgroundColor={'white'}
        boxShadow="base"
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for a country..."
        value={searchTerm}
        _placeholder={{ color: '#848484' }}
      />
    </InputGroup>
  )
}

export default SearchBox
