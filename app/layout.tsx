import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Travel',
  description: 'Travel UI/UX App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='md:px-0 px-5 overflow-x-hidden'>
        <Navbar/>
        <main>  
           {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}
