import { ContactUs } from '@/components';
import { Hero, Service, AboutUs, Plan, ChooseUs, CaseStudy } from '@/components/home';
import { Metadata } from 'next';

const metadata: Metadata = {
  title: 'Home page',
  description: 'Home page Calvino'
}

export default async function Home() {
  const getPage = await fetch(`${process.env.NEXT_PUBLIC_HOST}/homepage`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const data = await getPage.json();
  if (undefined == data){
    <div>loading</div>
  }
  return (
    <div className="home">
      <Hero data={data.hero}/>
      <Service data={data.services} />
      <AboutUs data={data.about} />
      <Plan data={data.plans} />
      <ChooseUs data={data.chooseUs} />
      <CaseStudy data={data.caseStudy} />
      <ContactUs />
    </div>
  )
}
