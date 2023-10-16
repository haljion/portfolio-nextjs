import { ReactNode } from 'react'

import { Box, Center, HStack, VStack } from '../components/common'
import { Providers } from '../components/common/providers'
import Header from '../components/header'
import React from 'react'
import Head from 'next/head'

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="ja">
      <head>
        <title>haljion's Portfolio</title>
      </head>
      <body>
        <Providers>
          <Box bg={'teal.50'} minHeight="100%" h="100%" w="100%">
            <VStack>
              <Header />

              <Box h="calc(100vh - 100px)" w="calc(100vw - 500px)">
                {children}
              </Box>
            </VStack>
          </Box>
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
