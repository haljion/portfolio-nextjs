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

import Image from 'next/image'

import { productList } from '../../consts/pageData'

const Products: NextPage = () => {
  return (
    <>
      <VStack>
        <Heading as="h2" size="3xl" noOfLines={1}>
          Products
        </Heading>
        <HStack>
          {productList.map((product) => {
            return (
              <Card>
                <CardHeader>
                  <Heading size="md">{product.name}</Heading>
                </CardHeader>
                <Image src={product.img} alt={product.name} width={1920} height={800} />
                <CardBody>
                  <Text>{product.detail}</Text>
                  <HStack>
                    {product.skill.map((s) => {
                      return (
                        <Tag size="md" variant="solid" colorScheme="teal">
                          {s}
                        </Tag>
                      )
                    })}
                  </HStack>
                </CardBody>

                <CardFooter>
                  <VStack>
                    <Text>{product.git}</Text>
                    <Text>{product.url}</Text>
                  </VStack>
                </CardFooter>
              </Card>
            )
          })}
        </HStack>
      </VStack>
    </>
  )
}

export default Products
