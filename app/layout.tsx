import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Juno - SOC 2 Compliance Made Simple',
  description: 'Turn SOC 2 into growth. Get audit-ready fast. Build trust. Close deals. Scale with confidence.',
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
