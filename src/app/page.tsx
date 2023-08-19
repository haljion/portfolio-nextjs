'use client'
import type { NextPage } from 'next'
import { Heading, Box, Button, Text, Avatar, Stack, HStack, VStack } from '@chakra-ui/react'

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
