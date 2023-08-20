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

import { certificationList, skillList } from '../../consts/pageData'

const AboutMe: NextPage = () => {
  return (
    <>
      <VStack>
        <Heading as="h2" size="3xl" noOfLines={1}>
          About me
        </Heading>
        <Card>
          <CardHeader>
            <Heading size="md">Profile</Heading>
          </CardHeader>
          <CardBody>
            <VStack>
              <Avatar size="2xl" name="haljion" src="/img/icon.png"></Avatar>
              <Text>@haljion</Text>
              <HStack>
                <Avatar
                  size="md"
                  name="git"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                ></Avatar>
                <Avatar size="md" name="qiita" src="/img/icon.png"></Avatar>
                <Avatar
                  size="md"
                  name="kaggle"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kaggle/kaggle-original-wordmark.svg"
                ></Avatar>
              </HStack>
            </VStack>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <Heading size="md">About</Heading>
          </CardHeader>
          <CardBody>
            <Text>ペラペラ</Text>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <Heading size="md">資格</Heading>
          </CardHeader>
          <CardBody>
            <List>
              {certificationList.map((c) => {
                return (
                  <ListItem>
                    <ListIcon as={c.icon} color="green.500" />
                    {c.name}({c.acquisitionDate})
                  </ListItem>
                )
              })}
            </List>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <Heading size="md">スキル</Heading>
          </CardHeader>
          <CardBody>
            <List>
              {skillList.map((skill) => {
                return (
                  <HStack>
                    <Tag size="md" variant="solid" colorScheme="teal">
                      <TagLeftIcon as={skill.icon} />
                      <TagLabel>{skill.name}</TagLabel>
                    </Tag>
                  </HStack>
                )
              })}
            </List>
          </CardBody>
        </Card>
      </VStack>
    </>
  )
}

export default AboutMe
