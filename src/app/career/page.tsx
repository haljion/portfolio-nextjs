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

// import json from 'json/certification'

const Career: NextPage = () => {
  const CareerList = [
    {
      id: 1,
      name: 'カメラ案件',
      period: '2023/05~2023/11',
      detail: 'かめらWebアプリケーション開発',
      process: ['詳細設計', '開発', 'UT', 'IT'],
      skill: ['Next.js', 'React.js', 'JavaScript', 'Python'],
    },
    {
      id: 2,
      name: 'カメラ案件',
      period: '2023/05~2023/11',
      detail: 'かめらWebアプリケーション開発',
      process: ['詳細設計', '開発', 'UT', 'IT'],
      skill: ['Next.js', 'React.js', 'JavaScript', 'Python'],
    },
  ]

  return (
    <>
      <VStack>
        <Heading as="h2" size="3xl" noOfLines={1}>
          Career
        </Heading>
        <>しぼりこみ</>
        <HStack>
          {CareerList.map((career) => {
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
        </HStack>
      </VStack>
    </>
  )
}

export default Career
