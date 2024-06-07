import { montserrat } from '@/config/fonts.ts'
import { metaData } from '@/config/meta-data.ts'
import TanstackQueryProvider from '@/providers/tanstack-query-provider.tsx'
import { GlobalStyle } from '../styles/globals.ts'

export const metadata = metaData

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <GlobalStyle />
      <html lang="en">
        <body className={montserrat.className}>
          <TanstackQueryProvider>{children}</TanstackQueryProvider>
        </body>
      </html>
    </>
  )
}
