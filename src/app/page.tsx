'use client'

import type { NextPage } from 'next'
import { useRouter } from 'next/navigation'
import React from 'react'

import {
  VStack,
  Text,
  Card,
  CardBody,
  Heading,
  Image,
  HStack,
  CalendarIcon,
} from '../components/common'
import { pageList } from '../consts/pageData'

const Home: NextPage = () => {
  const router = useRouter()

  return (
    <>
      <VStack>
        <Heading as="h2" size="3xl" noOfLines={1} color={'teal.800'}>
          haljion's portfolio
        </Heading>
        {pageList.map((page) => {
          return (
            <Card
              onClick={() => {
                router.push(page.link)
              }}
              cursor="pointer"
              w="100%"
              margin="20px"
            >
              <CardBody>
                <HStack>
                  {page.icon == 'calendar' ? <CalendarIcon h="70px" w="70px" /> : <></>}
                  <Heading as="h2" size="2xl">
                    {page.title}
                  </Heading>
                </HStack>
              </CardBody>
            </Card>
          )
        })}
      </VStack>
    </>
  )
}

export default Home
