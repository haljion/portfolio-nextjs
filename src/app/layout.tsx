import { ReactNode } from 'react'

import { Box, VStack } from '../components/common'
import { Providers } from '../components/common/providers'
import Header from '../components/header'
import React from 'react'

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="ja">
      <head>
        <title>haljion's Portfolio</title>
      </head>
      <body>
        <Providers>
          <Box bgColor={'teal.50'}>
            <VStack>
              <Header />
              <Box w={{ base: '90vw', md: '70vw', lg: '60vw', xl: '50vw' }} pb="50px">
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
