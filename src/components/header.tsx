'use client'

import type { NextPage } from 'next'

import {
  Heading,
  Box,
  Button,
  Text,
  Avatar,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Stack,
  HStack,
  VStack,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
} from '@chakra-ui/react'

const Header: NextPage = () => {
  return (
    <HStack>
      <Button href="/" colorScheme="teal" as="a">
        top
      </Button>
      <Button href="/aboutme" colorScheme="teal" as="a">
        about me
      </Button>
      <Button href="/skill" colorScheme="teal" as="a">
        skill
      </Button>
      <Button href="/career" colorScheme="teal" as="a">
        career
      </Button>
      <Button href="/products" colorScheme="teal" as="a">
        products
      </Button>
    </HStack>
  )
}

export default Header
