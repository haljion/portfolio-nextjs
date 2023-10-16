import Head from 'next/head'
import React from 'react'
import { ReactNode, FC } from 'react'

type Props = { children: ReactNode }

const ChildHead: FC<Props> = ({ children }) => {
  return <Head>{children}</Head>
}

export default ChildHead
