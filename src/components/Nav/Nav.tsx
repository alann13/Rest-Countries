import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Heading } from '@chakra-ui/react'
import DarkModeButton from '@components/Buttons/DarkModeButton/DarkModeButton'

const Nav: React.FC = () => {
  return (
    <Container
      alignItems="center"
      as="nav"
      display="flex"
      h="5rem"
      justifyContent="space-between"
      maxW="80rem"
    >
      <Link to="/">
        <Heading as="h1" fontWeight="extrabold" fontSize={['0.875rem', '0.875rem', '1.5rem']}>
          Where in the world?
        </Heading>
      </Link>
      <DarkModeButton />
    </Container>
  )
}

export default Nav
