import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import { Inter, Roboto, Poppins } from 'next/font/google'
import Footer from '@/components/footer/Footer'
import NavbarTest from '@/components/navbar/NavBarTest'
import { ThemeProvider } from '@/context/ThemeContext'

const poppins = Poppins({ subsets: ['latin'], weight: "400" })

export const metadata = {
  title: 'Nextjs Blog',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={poppins.className}>
          <ThemeProvider>
            <div className='container'>
              <Navbar />
                {children}
              <Footer />
            </div>
          </ThemeProvider>
        </body>
    </html>
  )
}
