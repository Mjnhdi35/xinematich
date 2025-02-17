import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import '@xilematich/ui/src/app/globals.css'
import { ApolloProvider } from '@xilematich/network/src/config/apollo'
import { SessionProvider } from '@xilematich/ui/src/components/molecules/SessionProvider'
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Xilematich',
  description: 'Xilematich | Mdj',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <SessionProvider>
        <ApolloProvider>
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            {children}
          </body>
        </ApolloProvider>
      </SessionProvider>
    </html>
  )
}
