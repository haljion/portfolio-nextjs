import { ReactNode } from 'react'

import { Providers } from '../components/common/providers'
import Header from '../components/header'

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="ja">
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
