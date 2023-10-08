import './globals.css'
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '../components/layout/app.header';
import Footer from '../components/layout/app.footer';
import { Container } from 'react-bootstrap';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Calvino',
  description: 'create by zika',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Container>
          {children}
        </Container>
        <Footer />
      </body>
    </html>
  )
}
