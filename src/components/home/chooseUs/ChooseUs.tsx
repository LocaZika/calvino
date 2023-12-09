import { Col, Container, Row } from 'react-bootstrap';
import chooseUsStyle from './chooseUs.module.scss';
import { nunito } from '@/app/fonts';
import Link from 'next/link';
import Image from 'next/image';
import { Carousel, Counter } from '@/components';


interface IBrand{
  id: string,
  path: string,
}

interface IChooseUs{
  data: {
    id: string,
    title: string,
    subTitle: string,
    completedProjects: number,
    specialisedEmployees: number,
    text: string,
    speaker: string,
  }
}

export default async function ChooseUs({data: {title, subTitle, specialisedEmployees, completedProjects, text, speaker}}: IChooseUs) {
  const getBrands = await fetch(`${process.env.NEXT_PUBLIC_HOST}/brands`, {
    method: "GET",
    headers: {
      'content-type': 'application/json'
    }
  })
  const brands: IBrand[] = await getBrands.json();
  
  if( undefined === brands ){
    return <div>loading</div>
  }
  return (
    <section className={chooseUsStyle['choose-us-area']}>
      <Container>
        <Row className='justify-content-between align-items-center mb-20 pb-25 border-bottom'>
          <Col md={8} lg={6} xl={7} xxl={5}>
            <div className="section-title">
              <span>{title}</span>
              <h2 className={nunito.className}>{subTitle}</h2>
            </div>
          </Col>
          <Col md={4} lg={6} xl={5} xxl={7}>
            <Link href={'/about'} className={chooseUsStyle['redirect-btn']}>explore more</Link>
          </Col>
        </Row>
        <Row className='justify-content-between align-items-end mb-20'>
          <Col md={10} lg={7} xl={5}>
            <Row className='mt-40'>
              <Col sm={5} md={6} lg={5} xl={5}>
                <div className={`${chooseUsStyle['single']} mb-30`}>
                  <div className={`${chooseUsStyle['single-counter']}`}>
                    <Counter
                      className={nunito.className}
                      value={completedProjects >= 450 ? 450 : completedProjects}
                      scrollSpyOnce
                      duration={2}
                    />
                    {
                      completedProjects > 450 ?
                        <span className={nunito.className}>&nbsp;+</span> :
                        null
                    }
                  </div>
                  <div className={chooseUsStyle['pera-counter']}>
                    <p>successfully completed projects</p>
                  </div>
                </div>
              </Col>
              <Col sm={5} md={6} lg={5} xl={5}>
                <div className={`${chooseUsStyle['single']} ${chooseUsStyle['emp']} mb-30`}>
                  <div className={`${chooseUsStyle['single-counter']}`}>
                    <Counter
                      className={nunito.className}
                      value={specialisedEmployees >= 860 ? 860 : specialisedEmployees}
                      scrollSpyOnce
                      duration={2}
                    />
                    {
                      specialisedEmployees > 860 ?
                        <span className={nunito.className}>&nbsp;+</span> :
                        null
                    }
                  </div>
                  <div className={chooseUsStyle['pera-counter']}>
                    <p>highly specialised employees</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col md={10} lg={5} xl={7}>
            <div className={chooseUsStyle['right-cap']}>
              <p>{text}</p>
              <p>{speaker}</p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col xl={12}>
            <div className={chooseUsStyle['brands-area']}>
              <Carousel ssr={true}>
                {
                  brands.map(({id, path}) => (
                    <Image key={id} src={path} alt='brand' width={147} height={53} />
                  ))
                }
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
