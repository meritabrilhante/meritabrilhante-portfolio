'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './styles/theme/theme'

export default function Home() {
  return (
    <ChakraProvider theme={theme}>
      <h1>Inital Commit</h1>
    </ChakraProvider>
  )
}
