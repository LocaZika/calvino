import './globals.css'
import type { Metadata } from 'next';
import 'bootstrap/dist/css/bootstrap.min.css';
import { jost } from './fonts';
import Header from '@/components/layout/app.header';
import Footer from '@/components/layout/app.footer';



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
      <body className={jost.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
