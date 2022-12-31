'use client'

import './globals.css'
import { FpjsProvider } from '@fingerprintjs/fingerprintjs-pro-react'

const fpjsPublicApiKey = process.env.NEXT_PUBLIC_FPJS_PUBLIC_API_KEY as string

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head />
      <FpjsProvider
        loadOptions={{
          apiKey: fpjsPublicApiKey,
          region: 'eu',
        }}>
        <body>{children}</body>
      </FpjsProvider>
    </html>
  )
}
