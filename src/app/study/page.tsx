'use client'

import type { NextPage } from 'next'

import {
  Card,
  CardBody,
  CardHeader,
  HStack,
  Heading,
  Tag,
  VStack,
  Text,
  Avatar,
  List,
  ListIcon,
  ListItem,
  TagLabel,
  TagLeftIcon,
  ChatIcon,
  SimpleGrid,
  Box,
  Button,
  ButtonGroup,
} from '../../components/common'
import { certificationList, skillList } from '../../consts/pageData'
import { useRouter } from 'next/navigation'
import React from 'react'

const AboutMe: NextPage = () => {
  const router = useRouter()
  return (
    <>
      <VStack>
        <Heading as="h2" size="3xl" noOfLines={1} color={'teal.800'}>
          Study
        </Heading>
        <Card w="100%">
          <CardHeader>
            <Heading size="md">略歴</Heading>
          </CardHeader>
          <CardBody>
            <Text>2018年よりWebアプリケーション開発を中心としたエンジニアとして活動。</Text>
            <Text>直近では機械学習の分野に興味を持ち、積極的に学習中。</Text>
          </CardBody>
        </Card>

        <Card w="100%">
          <CardHeader>
            <Heading size="md">略歴</Heading>
          </CardHeader>
          <CardBody>
            <Text>2018年よりWebアプリケーション開発を中心としたエンジニアとして活動。</Text>
            <Text>直近では機械学習の分野に興味を持ち、積極的に学習中。</Text>
          </CardBody>
        </Card>

        <Card w="100%">
          <CardHeader>
            <Heading size="md">資格</Heading>
          </CardHeader>
          <CardBody>
            <List>
              {certificationList.map((c) => {
                return (
                  <ListItem>
                    <ListIcon as={ChatIcon} color="green.500" />
                    {c.name}({c.acquisitionDate})
                  </ListItem>
                )
              })}
            </List>
          </CardBody>
        </Card>

        <Card w="100%">
          <CardHeader>
            <Heading size="md">スキル</Heading>
          </CardHeader>
          <CardBody>
            <Box padding={'10px'}>
              <Heading as="h5" size="sm">
                業務経験あり
              </Heading>
              <SimpleGrid minChildWidth="100px" spacingX="10px" spacingY="5px">
                {skillList.map((skill) => {
                  return skill.id == 1 ? (
                    <Tag size="md" variant="solid" colorScheme="teal">
                      <TagLabel>{skill.name}</TagLabel>
                    </Tag>
                  ) : (
                    <></>
                  )
                })}
              </SimpleGrid>
            </Box>
            <Box padding={'10px'}>
              <Heading as="h5" size="sm">
                使用経験あり
              </Heading>
              <SimpleGrid minChildWidth="100px" spacingX="10px" spacingY="5px">
                {skillList.map((skill) => {
                  return skill.id == 2 ? (
                    <Tag size="md" variant="solid" colorScheme="teal">
                      <TagLabel>{skill.name}</TagLabel>
                    </Tag>
                  ) : (
                    <></>
                  )
                })}
              </SimpleGrid>
            </Box>
          </CardBody>
        </Card>

        <Card w="100%">
          <CardHeader>
            <Heading size="md">各種リンク</Heading>
          </CardHeader>
          <CardBody>
            <Box display="flex" alignItems="center" justifyContent="center" width="100%" py={12}>
              <ButtonGroup gap="4">
                <Button href="https://github.com/haljion" colorScheme="teal" as="a">
                  Github
                </Button>
                <Button href="https://qiita.com/haljion" colorScheme="teal" as="a">
                  Qiita
                </Button>
                <Button href="https://www.kaggle.com/haljion" colorScheme="teal" as="a">
                  Kaggle
                </Button>
              </ButtonGroup>
            </Box>
          </CardBody>
        </Card>
      </VStack>
    </>
  )
}

export default AboutMe
