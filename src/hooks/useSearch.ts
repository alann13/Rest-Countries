import React, { useContext, useState } from 'react'

interface SearchContextDefaults {
  searchTerm: string
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>
}

export const SearchContext = React.createContext<SearchContextDefaults>({
  searchTerm: '',
  setSearchTerm: () => {},
})

const useSearch = () => {
  const [searchTerm, setSearchTerm] = useState<string>('')

  return { searchTerm, setSearchTerm }
}

export const useSearchContext = (): SearchContextDefaults => {
  return useContext(SearchContext)
}

export default useSearch
