import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Danish Iqbal',
  description: "It's my portfolio website",
  generator: '@dan_i_11',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
