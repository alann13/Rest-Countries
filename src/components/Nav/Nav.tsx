import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Container, Heading, useColorMode, ColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { ColorModeEnum } from '@utils/enums/ColorMode'

const Nav: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  const isLightMode = (colorMode: ColorMode): boolean => {
    return colorMode === ColorModeEnum.LIGHT
  }

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
      <Button
        display="flex"
        leftIcon={isLightMode(colorMode) ? <MoonIcon /> : <SunIcon />}
        onClick={() => toggleColorMode()}
        p={0}
        textTransform="capitalize"
        variant="unstyled"
      >
        {`${isLightMode(colorMode) ? ColorModeEnum.DARK : ColorModeEnum.LIGHT} mode`}
      </Button>
    </Container>
  )
}

export default Nav
