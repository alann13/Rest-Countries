import React from 'react'
import { Button, Menu, MenuButton, MenuItem, MenuList, useColorModeValue } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

interface DropdownProps {
  selectHandler: (region: string) => void
}

const Dropdown: React.FC<DropdownProps> = ({ selectHandler }) => {
  const dropdownBackgroundColor = useColorModeValue('white', '#2B3844')
  const regions = ['all', 'africa', 'america', 'asia', 'europe', 'oceania']

  const selectRegion = (region: string): void => {
    selectHandler(region)
  }

  return (
    <Menu>
      <MenuButton
        as={Button}
        bg={dropdownBackgroundColor}
        rightIcon={<ChevronDownIcon />}
        shadow="base"
      >
        Filter by Region
      </MenuButton>
      <MenuList>
        {regions.map((region) => (
          <MenuItem key={region} onClick={() => selectRegion(region)} textTransform="capitalize">
            {region}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default Dropdown
