'use client'

import type { NextPage } from 'next'
import React from 'react'

import { careerList } from '../../consts/pageData'
import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Tag,
  VStack,
  Text,
  Box,
} from '../../components/common'
import { TimeIcon } from '@chakra-ui/icons'

const Career: NextPage = () => {
  return (
    <VStack>
      <Heading as="h2" size="3xl" noOfLines={1} color={'teal.800'} my={'20px'} py={'10px'}>
        Career
      </Heading>

      {careerList.map((career, index) => {
        return (
          <Card w="100%" my={'5px'} py={'5px'} key={index}>
            <CardHeader>
              <VStack align="nomal">
                <Heading as="h4" size="md">
                  {career.name}
                </Heading>
                <Box>
                  <Text fontSize="md">
                    <TimeIcon marginEnd="5px" />
                    <>{career.period}</>
                  </Text>
                </Box>
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
  )
}

export default Career
