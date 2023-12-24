import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'en-shoot',
  description: 'en-shoot a game to practice English words',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
