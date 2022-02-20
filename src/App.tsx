import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { QueryClientProvider } from 'react-query'
import { Box, ChakraProvider } from '@chakra-ui/react'
import Nav from '@components/Nav/Nav'
import useSearch, { SearchContext } from './hooks/useSearch'
import HomePage from './pages/Homepage'
import CountryPage from './pages/CountryPage'
import NotFoundPage from './pages/NotFoundPage'
import { queryClient } from './utils/react-query-helpers'
import { COUNTRY_PATH } from './utils/constants'
import { Container } from '@chakra-ui/react'
import { theme } from '@utils/theme'

const App: React.FC = () => {
  const search = useSearch()

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <SearchContext.Provider value={search}>
          <BrowserRouter>
            <Box as="header">
              <Nav />
            </Box>
            <Box
              as="main"
              py={[5, 5, 16]}
              backgroundColor={'#F2F2F2'}
              minH="calc(100vh - 5rem)"
            >
              <Container maxW={'80rem'}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route
                    path={`/${COUNTRY_PATH}/:countryName`}
                    element={<CountryPage />}
                  />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </Container>
            </Box>
          </BrowserRouter>
        </SearchContext.Provider>
      </ChakraProvider>
    </QueryClientProvider>
  )
}

export default App
