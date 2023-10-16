// app/providers.tsx
'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { Box, ChakraProvider } from '@chakra-ui/react'
import React from 'react'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider>
        <Box bgColor={'teal.50'} minH="max-content" h="100%">
          {children}
        </Box>
      </ChakraProvider>
    </CacheProvider>
  )
}
