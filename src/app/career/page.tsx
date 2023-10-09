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
} from '../../components/common'

const Career: NextPage = () => {
  return (
    <VStack>
      <Heading as="h2" size="3xl" noOfLines={1} color={'teal.800'}>
        Career
      </Heading>
      <SimpleGrid columns={{ lg: 2, md: 1 }} spacingX="20px" spacingY="20px">
        {careerList.map((career, index) => {
          return (
            <Card align="normal" key={index}>
              <CardHeader>
                <VStack>
                  <Heading as="h3" size="lg">
                    {career.name}
                  </Heading>
                  <Text fontSize="md">{career.period}</Text>
                </VStack>
              </CardHeader>
              <CardBody>
                <Box padding={'10px'}>
                  <Heading as="h4" size="md">
                    概要
                  </Heading>
                  <Text>{career.detail}</Text>
                </Box>
                <Box padding={'10px'}>
                  <Heading as="h4" size="md">
                    担当工程
                  </Heading>
                  <HStack>
                    {career.process.map((p) => {
                      return (
                        <Tag size="md" variant="solid" colorScheme="teal">
                          {p}
                        </Tag>
                      )
                    })}
                  </HStack>
                </Box>
                <Box padding={'10px'}>
                  <Heading as="h4" size="md">
                    使用技術
                  </Heading>
                  <HStack>
                    {career.skill.map((s) => {
                      return (
                        <Tag size="md" variant="solid" colorScheme="teal">
                          {s}
                        </Tag>
                      )
                    })}
                  </HStack>
                </Box>
              </CardBody>
            </Card>
          )
        })}
      </SimpleGrid>
    </VStack>
  )
}

export default Career
