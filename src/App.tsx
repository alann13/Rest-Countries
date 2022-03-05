import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { QueryClientProvider } from 'react-query'
import { Box } from '@chakra-ui/react'
import Nav from '@components/Nav/Nav'
import useSearch, { SearchContext } from '@hooks/useSearch'
import HomePage from '@pages/Homepage'
import CountryPage from '@pages/CountryPage'
import NotFoundPage from '@pages/NotFoundPage'
import { queryClient } from '@utils/react-query-helpers'
import { COUNTRY_PATH } from '@utils/constants'
import { Container, useColorModeValue } from '@chakra-ui/react'

const App: React.FC = () => {
  const search = useSearch()
  const bodyBackgroundColor = useColorModeValue('#F2F2F2', '#202C36')
  const headerBackgroundColor = useColorModeValue('white', '#2B3844')

  return (
    <QueryClientProvider client={queryClient}>
      <SearchContext.Provider value={search}>
        <BrowserRouter>
          <Box as="header" bg={headerBackgroundColor}>
            <Nav />
          </Box>
          <Box as="main" py={[5, 5, 5, 10]} bg={bodyBackgroundColor} minH="calc(100vh - 5rem)">
            <Container maxW={['80rem']}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path={`/${COUNTRY_PATH}/:countryName`} element={<CountryPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Container>
          </Box>
        </BrowserRouter>
      </SearchContext.Provider>
    </QueryClientProvider>
  )
}

export default App
