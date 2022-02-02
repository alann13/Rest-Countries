import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { QueryClientProvider } from 'react-query'
import Nav from './components/Nav/Nav'
import { useSearchContext, SearchContext } from './hooks/useSearch'
import HomePage from './pages/Homepage'
import CountryPage from './pages/CountryPage'
import NotFoundPage from './pages/NotFoundPage'
import { queryClient } from './utils/react-query-helpers'
import { COUNTRY_PATH } from './utils/constants'

const App: React.FC = () => {
  const { searchTerm, setSearchTerm } = useSearchContext()

  return (
    <QueryClientProvider client={queryClient}>
      <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
        <BrowserRouter>
          <header>
            <Nav />
          </header>
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path={`/${COUNTRY_PATH}/:countryName`} element={<CountryPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
        </BrowserRouter>
      </SearchContext.Provider>
    </QueryClientProvider>
  )
}

export default App
