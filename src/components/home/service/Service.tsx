import { Col, Container, Row } from 'react-bootstrap';
import serviceStyle from './service.module.scss';
import { nunito } from '@/app/fonts';
import {Card} from '@/components';
import { ICardData } from '@/datatypes/types';
import Image from 'next/image';
import shape1 from '@public/imgs/shapes/shape-1.png';
import shape2 from '@public/imgs/shapes/shape-2.png';

interface IService{
  data: {
    title: string,
    subTitle: string,
    items: ICardData[],
  }
}

export default function Service({data: {title, subTitle, items}}: IService) {

  return (
    <section className={`${serviceStyle['service']} position-relative`}>
      <Container>
        <Row className='justify-content-center'>
          <Col className='align-item-center' md={10} lg={8} xl={5}>
            <div className={`${nunito.className} mb-60 section-title text-center`}>
              <span>{title}</span>
              <h2>{subTitle}</h2>
            </div>
          </Col>
        </Row>
        <Row>
          {
            items?.map((item) => (
              <Col key={item.id} sm={6} md={6} lg={4} xl={3}>
                <Card data={item} />
              </Col>
            ))
          }
        </Row>
      </Container>
      <div className={`${serviceStyle['shape-1']} d-none d-xxl-block`}>
        <Image src={shape1} alt='shape' />
      </div>
      <div className={`${serviceStyle['shape-2']} d-none d-xl-block`}>
        <Image src={shape2} alt='shape' />
      </div>
    </section>
  )
}
