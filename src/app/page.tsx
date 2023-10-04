'use client'
import type { NextPage } from 'next'
import React from 'react'

import { VStack, Text, Box, Button } from '../components/common'

const Home: NextPage = () => {
  return (
    <>
      <VStack>
        <Box bg={{ base: 'red.200', md: 'green.200' }}>test</Box>
        <Text>Welcome to haljion's portfolio!</Text>
        <Button href="/aboutme" colorScheme="teal" as="a">
          MORE ABOUT ME!
        </Button>
      </VStack>
    </>
  )
}

export default Home
