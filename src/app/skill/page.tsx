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
} from '@chakra-ui/react'

// import json from 'json/certification'

const Skill: NextPage = () => {
  const certificationList = [
    { id: 1, name: 'Java Silver 8', acquisitionDate: '2018/06', icon: 'ChatIcon' },
    { id: 2, name: '統計検定 2級', acquisitionDate: '2022/10' },
    { id: 3, name: 'Python データ分析エンジニア認定試験', acquisitionDate: '2023/04' },
  ]

  return (
    <>
      <VStack>
        <Avatar size="2xl" name="haljion" src="/img/icon.png"></Avatar>

        <Heading as="h2" size="3xl" noOfLines={1}>
          Skill
        </Heading>
        <Text>ペラペラ</Text>
        <Text>資格</Text>
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
      </VStack>
    </>
  )
}

export default Skill
