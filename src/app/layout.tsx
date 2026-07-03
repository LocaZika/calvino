import './globals.scss'
import type { Metadata } from 'next';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@styles/themify-icons/themify-icons.css';
import { jost } from './fonts';
import { Header, Footer, BackTopBtn } from '@components';
import { getData } from './actions';

export const metadata: Metadata = {
  title: 'Calvino',
  description: 'create by zika',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const layoutData = await getData<ILayout>('/layout');

  if (!layoutData) return <div>Loading...</div>;

  const {footer, header} = layoutData;

  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/imgs/favicon.png" type="image/x-icon" />
      </head>
      <body className={jost.className} >
        <Header data={header} />
        {children}
        <Footer data={footer} />
        <BackTopBtn />
      </body>
    </html>
  )
}
