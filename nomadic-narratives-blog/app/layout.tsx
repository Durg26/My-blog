import { Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nomadic Narratives',
  description: 'Adventures and stories from around the world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-cream text-coffee min-h-screen flex flex-col`}>
        <Nav />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}

