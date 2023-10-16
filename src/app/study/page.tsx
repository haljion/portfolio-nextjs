'use client'

import type { NextPage } from 'next'

import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Tag,
  VStack,
  Text,
  Box,
  CardFooter,
  Link,
} from '../../components/common'
import React from 'react'
import { studyList } from '../../consts/pageData'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const AboutMe: NextPage = () => {
  return (
    <>
      <VStack>
        <Heading as="h2" size="3xl" noOfLines={1} color={'teal.800'}>
          Study
        </Heading>
        {studyList.map((s) => {
          return (
            <Card w="100%">
              <CardHeader>
                <Heading size="md">{s.title}</Heading>
                <Box>
                  {s.tags.map((tag) => {
                    return (
                      <Tag size="md" variant="solid" colorScheme="teal" m="5px">
                        {tag}
                      </Tag>
                    )
                  })}
                </Box>
              </CardHeader>
              <CardBody>
                <Text>{s.Description}</Text>
              </CardBody>
              <CardFooter>
                {s.git ? (
                  <>
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                      height="30px"
                      width="30px"
                    />
                    <Link href={s.git} color="teal.500" marginRight="20px" isExternal>
                      学習リポジトリ
                      <ExternalLinkIcon mx="2px" />
                    </Link>
                  </>
                ) : (
                  <></>
                )}
                {s.link ? (
                  <Link href={s.link} color="teal.500" isExternal>
                    {s.title}
                    <ExternalLinkIcon mx="2px" />
                  </Link>
                ) : (
                  <></>
                )}
              </CardFooter>
            </Card>
          )
        })}
      </VStack>
    </>
  )
}

export default AboutMe
