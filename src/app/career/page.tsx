'use client'

import type { NextPage } from 'next'
import React from 'react'

import { careerList } from '../../consts/pageData'
import {
  Card,
  CardBody,
  CardHeader,
  HStack,
  Heading,
  Tag,
  VStack,
  Text,
  Box,
  SimpleGrid,
  Stack,
} from '../../components/common'

const Career: NextPage = () => {
  return (
    <VStack>
      <Heading as="h2" size="3xl" noOfLines={1} color={'teal.800'}>
        Career
      </Heading>
      <VStack m="20px">
        {careerList.map((career, index) => {
          return (
            <Card w="100%" key={index}>
              <CardHeader>
                <VStack align="nomal">
                  <Heading as="h4" size="md">
                    {career.name}
                  </Heading>
                  <Text fontSize="md">{career.period}</Text>
                </VStack>
              </CardHeader>
              <CardBody>
                <Box m="10px">
                  <Heading as="h5" size="sm">
                    概要
                  </Heading>
                  <Text>{career.detail}</Text>
                </Box>
                <Box m="10px">
                  <Heading as="h5" size="sm">
                    担当工程
                  </Heading>
                  <Box>
                    {career.process.map((p) => {
                      return (
                        <Tag size="md" variant="solid" colorScheme="teal" m="5px">
                          {p}
                        </Tag>
                      )
                    })}
                  </Box>
                </Box>
                <Box m="10px">
                  <Heading as="h5" size="sm">
                    使用技術
                  </Heading>
                  <Box>
                    {career.skill.map((s) => {
                      return (
                        <Tag size="md" variant="solid" colorScheme="teal" m="5px">
                          {s}
                        </Tag>
                      )
                    })}
                  </Box>
                </Box>
              </CardBody>
            </Card>
          )
        })}
      </VStack>
    </VStack>
  )
}

export default Career
