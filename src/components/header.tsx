'use client'

import type { NextPage } from 'next'

import { usePathname } from 'next/navigation'

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
  Center,
  ButtonGroup,
} from '@chakra-ui/react'

const Header: NextPage = () => {
  const pathname = usePathname()

  return (
    <>
      {pathname == '/' ? (
        <></>
      ) : (
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
              TOP
            </Button>
            <Button href="/aboutme" colorScheme="teal" as="a">
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
      )}
    </>
  )
}

export default Header
