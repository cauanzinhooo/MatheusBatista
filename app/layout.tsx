import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Matheus Batista | Gestor de Trafégo',
  description: 'As melhores soluções para seus anúncios e gestões.',
  icons: {
    icon: './favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="br">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
