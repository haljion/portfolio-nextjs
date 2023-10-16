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
  List,
  ListIcon,
  ListItem,
  TagLabel,
  Box,
  Button,
  ButtonGroup,
  Link,
  CardFooter,
  Image,
} from '../components/common'
import { certificationList, skillList } from '../consts/pageData'
import React from 'react'
import { ChatIcon } from '@chakra-ui/icons'

const AboutMe: NextPage = () => {
  return (
    <>
      <VStack>
        <Heading as="h2" size="3xl" noOfLines={1} color={'teal.800'} my={'20px'} py={'10px'}>
          About me
        </Heading>
        <Image borderRadius="full" boxSize="200px" src="img/icon.jpeg" alt="@haljion" my={'10px'} />
        <Text color={'teal.800'} my={'10px'}>
          @haljion
        </Text>
        <Card w="100%" my={'5px'} py={'5px'}>
          <CardHeader>
            <Heading size="md">略歴</Heading>
          </CardHeader>
          <CardBody>
            <Text>2018年よりWebアプリケーション開発を中心としたエンジニアとして活動。</Text>
            <Text>直近では機械学習の分野に興味を持ち、積極的に学習中。</Text>
          </CardBody>
          <CardFooter>
            <Box>
              <Link href="/career" color="teal.500" marginRight="20px">
                経歴を見る
              </Link>
              <Link href="/study" color="teal.500">
                学習内容を見る
              </Link>
            </Box>
          </CardFooter>
        </Card>

        <Card w="100%" my={'5px'} py={'5px'}>
          <CardHeader>
            <Heading size="md">保有資格</Heading>
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

        <Card w="100%" my={'5px'} py={'5px'}>
          <CardHeader>
            <Heading size="md">スキル</Heading>
          </CardHeader>
          <CardBody>
            <Box padding={'10px'}>
              <Heading as="h5" size="sm">
                業務経験あり
              </Heading>
              <Box>
                {' '}
                {skillList.map((skill) => {
                  return skill.id == 1 ? (
                    <Tag size="md" variant="solid" colorScheme="teal" m="5px">
                      <TagLabel>{skill.name}</TagLabel>
                    </Tag>
                  ) : (
                    <></>
                  )
                })}
              </Box>
            </Box>
            <Box padding={'10px'}>
              <Heading as="h5" size="sm">
                使用経験あり
              </Heading>

              <Box>
                {skillList.map((skill) => {
                  return skill.id == 2 ? (
                    <Tag size="md" variant="solid" colorScheme="teal" m="5px">
                      {skill.name}
                    </Tag>
                  ) : (
                    <></>
                  )
                })}
              </Box>
            </Box>
          </CardBody>
          <CardFooter>
            <Box>
              <Link href="/products" color="teal.500" marginRight="20px">
                制作物を見る
              </Link>
            </Box>
          </CardFooter>
        </Card>

        <Card w="100%" my={'5px'} py={'5px'}>
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
