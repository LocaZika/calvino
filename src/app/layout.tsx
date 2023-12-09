import './globals.scss'
import type { Metadata } from 'next';
import 'bootstrap/dist/css/bootstrap.min.css';
import { jost } from './fonts';
import Header from '@/components/layout/app.header';
import Footer from '@/components/layout/app.footer';
import BackTopBtn from '@/components/layout/app.backTop';



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
      <body className={jost.className} >
        <Header />
        {children}
        <Footer />
        <BackTopBtn />
      </body>
    </html>
  )
}
