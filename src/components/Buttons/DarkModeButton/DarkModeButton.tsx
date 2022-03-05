import React from 'react'
import { Button, useColorMode, ColorMode } from '@chakra-ui/react'
import { ColorModeEnum } from '@utils/enums/ColorMode'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

const DarkModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  const isLightMode = (colorMode: ColorMode): boolean => {
    return colorMode === ColorModeEnum.LIGHT
  }

  return (
    <Button
      display="flex"
      leftIcon={isLightMode(colorMode) ? <MoonIcon /> : <SunIcon />}
      onClick={() => toggleColorMode()}
      p={0}
      textTransform="capitalize"
      variant="unstyled"
      _focus={{ shadow: '0' }}
    >
      {`${isLightMode(colorMode) ? ColorModeEnum.DARK : ColorModeEnum.LIGHT} mode`}
    </Button>
  )
}

export default DarkModeButton
