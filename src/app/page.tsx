'use client'

import type { NextPage } from 'next'
import { useRouter } from 'next/navigation'
import React from 'react'

import { VStack, Text, Card, CardBody, Heading, Image, HStack } from '../components/common'

const Home: NextPage = () => {
  const router = useRouter()

  return (
    <>
      <VStack>
        <Heading as="h2" size="3xl" noOfLines={1} color={'teal.800'}>
          haljion's portfolio
        </Heading>
        <Card
          onClick={() => {
            router.push('/aboutme')
          }}
          cursor="pointer"
          w="100%"
          margin="20px"
        >
          <CardBody>
            <HStack>
              <Image src="/img/icon.png" alt="aboutme" />
              <Text>プロフィール・スキル</Text>
            </HStack>
          </CardBody>
        </Card>
        <Card
          onClick={() => {
            router.push('/career')
          }}
          cursor="pointer"
          w="100%"
          margin="20px"
        >
          <CardBody>
            <HStack>
              <Image src="/img/icon.png" h="100px" w="100px" alt="career" />
              <Text>経歴</Text>
            </HStack>
          </CardBody>
        </Card>
        <Card
          onClick={() => {
            router.push('/products')
          }}
          cursor="pointer"
          w="100%"
          margin="20px"
        >
          <CardBody>
            <HStack>
              <Image src="/img/icon.png" alt="products" />
              <Text>制作物</Text>
            </HStack>
          </CardBody>
        </Card>
      </VStack>
    </>
  )
}

export default Home
