import { ReactNode } from 'react'

import { Box, Center, HStack, VStack } from '../components/common'
import { Providers } from '../components/common/providers'
import Header from '../components/header'

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="ja">
      <body>
        <Providers>
          <Box bg={'teal.50'} h="100%" w="100%">
            <Center>
              <VStack w="80vw">
                <Box h="100px">
                  <Header />
                </Box>

                <Box h="calc(100vh - 100px)">{children}</Box>
              </VStack>
            </Center>
          </Box>
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
