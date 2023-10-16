'use client'

import type { NextPage } from 'next'

import { Box, Button, ButtonGroup } from '@chakra-ui/react'
import React from 'react'

const Header: NextPage = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="100%"
      py={12}
      h="100px"
      w="100%"
      bg={'teal.800'}
    >
      <ButtonGroup gap="4">
        <Button href="/" colorScheme="teal" as="a">
          about me
        </Button>
        <Button href="/career" colorScheme="teal" as="a">
          career
        </Button>
        <Button href="/study" colorScheme="teal" as="a">
          study
        </Button>
        <Button href="/products" colorScheme="teal" as="a">
          products
        </Button>
      </ButtonGroup>
    </Box>
  )
}

export default Header
