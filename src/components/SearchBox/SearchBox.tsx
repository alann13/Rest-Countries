import React from 'react'
import { useSearchContext } from '@hooks/useSearch'
import {
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
} from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'

const SearchBox: React.FC = () => {
  const { searchTerm, setSearchTerm } = useSearchContext()
  const inputBackgroundColor = useColorModeValue('white', '#2B3844')
  const placeholderColor = useColorModeValue('#848484', 'white')

  return (
    <InputGroup w={['100%', '100%', '100%', '30rem']}>
      <InputLeftElement
        children={<Search2Icon color="#848484" />}
        pointerEvents="none"
        boxSize="12"
      />
      <Input
        backgroundColor={inputBackgroundColor}
        boxShadow="base"
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for a country..."
        size="lg"
        value={searchTerm}
        _focus={{ borderColor: 'none' }}
        _placeholder={{ color: placeholderColor }}
      />
    </InputGroup>
  )
}

export default SearchBox
