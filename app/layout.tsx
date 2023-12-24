import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from "./components/NavBar"
import Footer from "./components/Footer"
import Sidebar from './components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="winter">
      <body className={inter.className}>
        <div style={{ zIndex: 1000 /* or any value higher than your background video's z-index */ }}><Navbar /></div>


        {children}
        <Footer />
      </body>
    </html>
  )
}
