import React from 'react'
import { Button } from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'

const BackButton: React.FC = () => {
  const navigate = useNavigate()
  return (
    <Button
      display="flex"
      leftIcon={<ArrowBackIcon />}
      onClick={() => navigate(-1)}
      p={0}
      textTransform="capitalize"
      variant="unstyled"
      _focus={{ shadow: '0' }}
    >
      back
    </Button>
  )
}

export default BackButton
