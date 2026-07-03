import { HeroPage, AboutUs, ChooseUs, ContactUs } from "@components";
import { getData } from "@actions";

export default async function AboutPage() {
  const aboutPage = await getData<TAboutPage>('/aboutPage');
  if (!aboutPage){
    return null;
  }
  const { title, subTitle, about, chooseUs } = aboutPage;
  return (
    <section className='about'>
      <HeroPage title={title} subTitle={subTitle}/>
      <AboutUs data={about} />
      <ChooseUs data={chooseUs} />
      <ContactUs />
    </section>
  )
}
