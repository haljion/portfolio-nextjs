'use client'

import Image from 'next/image'
import type { NextPage } from 'next'
import React from 'react'

import { productList } from '../../consts/pageData'
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  HStack,
  Heading,
  Tag,
  VStack,
  Text,
  SimpleGrid,
  Box,
  Link,
  ExternalLinkIcon,
} from '../../components/common'

const Products: NextPage = () => {
  return (
    <>
      <VStack>
        <Heading as="h2" size="3xl" noOfLines={1} color={'teal.800'}>
          Products
        </Heading>
        <Box>
          {productList.map((product, index) => {
            return (
              <Card key={index} m="5px">
                <CardHeader>
                  <VStack>
                    <Heading as="h3" size="lg">
                      {product.name}
                    </Heading>
                    <Text fontSize="md">Webアプリケーション</Text>
                  </VStack>
                </CardHeader>
                <Image src={product.img} alt={product.name} width={1920} height={800} />
                <CardBody>
                  <Box padding={'10px'}>
                    <Heading as="h4" size="md">
                      概要
                    </Heading>
                    <Text>{product.detail}</Text>
                  </Box>

                  <Box padding={'10px'}>
                    <Heading as="h4" size="md">
                      使用技術
                    </Heading>
                    <Box>
                      {product.skill.map((s) => {
                        return (
                          <Tag size="md" variant="solid" colorScheme="teal" m="5px">
                            {s}
                          </Tag>
                        )
                      })}
                    </Box>
                  </Box>
                </CardBody>

                <CardFooter>
                  {product.git.map((g) => {
                    return (
                      <>
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                          height="30px"
                          width="30px"
                        />
                        <Link href={g} color="teal.500" marginRight="20px" isExternal>
                          リポジトリ
                          <ExternalLinkIcon mx="2px" />
                        </Link>
                      </>
                    )
                  })}

                  <Text>{product.url}</Text>
                </CardFooter>
              </Card>
            )
          })}
        </Box>
      </VStack>
    </>
  )
}

export default Products
