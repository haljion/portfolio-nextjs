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
} from '../../components/common'

const Career: NextPage = () => {
  return (
    <>
      <VStack>
        <Heading as="h2" size="3xl" noOfLines={1}>
          Career
        </Heading>
        <>しぼりこみ</>
        {careerList.map((career) => {
          return (
            <Card>
              <CardHeader>
                <VStack>
                  <Heading size="md">{career.name}</Heading>
                  <Text>{career.period}</Text>
                </VStack>
              </CardHeader>
              <CardBody>
                <Text>{career.detail}</Text>
                <Text>担当工程</Text>
                <HStack>
                  {career.process.map((p) => {
                    return (
                      <Tag size="md" variant="solid" colorScheme="red">
                        {p}
                      </Tag>
                    )
                  })}
                </HStack>
                <Text>使用技術</Text>
                <HStack>
                  {career.skill.map((s) => {
                    return (
                      <Tag size="md" variant="solid" colorScheme="teal">
                        {s}
                      </Tag>
                    )
                  })}
                </HStack>
              </CardBody>
            </Card>
          )
        })}
      </VStack>
    </>
  )
}

export default Career
