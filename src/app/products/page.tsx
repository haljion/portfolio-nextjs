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
  Heading,
  Tag,
  VStack,
  Text,
  Box,
  Link,
} from '../../components/common'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Products: NextPage = () => {
  return (
    <>
      <VStack>
        <Heading as="h2" size="3xl" noOfLines={1} color={'teal.800'} my={'20px'} py={'10px'}>
          Products
        </Heading>
        {productList.map((product, index) => {
          return (
            <Card w="100%" my={'5px'} py={'5px'} key={index}>
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
                  {product.release ? <></> : <Text color={'red'}>＊公開停止中</Text>}
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
                {product.git.map((g, index) => {
                  return (
                    <>
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                        height="30px"
                        width="30px"
                      />
                      <Link href={g} color="teal.500" marginRight="20px" isExternal>
                        リポジトリ{index + 1}
                        <ExternalLinkIcon mx="2px" />
                      </Link>
                    </>
                  )
                })}
                <Box>
                  <Link href={product.url} color="teal.500" marginRight="20px" isExternal>
                    {product.url}
                    <ExternalLinkIcon mx="2px" />
                  </Link>
                </Box>
              </CardFooter>
            </Card>
          )
        })}
      </VStack>
    </>
  )
}

export default Products
