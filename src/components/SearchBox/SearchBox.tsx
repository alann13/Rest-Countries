import React from 'react'
import { useSearchContext } from '@hooks/useSearch'

const SearchBox: React.FC = () => {
  const { searchTerm, setSearchTerm } = useSearchContext()

  // Searchbox is only used for filtering. Won't be submitting anything.
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
  }

  const handleChangeEvent = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(event.target.value)
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <label>Search</label>
      <input type="text" onChange={handleChangeEvent} value={searchTerm} />
    </form>
  )
}

export default SearchBox
