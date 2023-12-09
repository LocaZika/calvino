import heroStyle from '@components/home/hero/hero.module.scss';
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';
import { nunito } from '@/app/fonts';
import { IData } from '@/datatypes/types';

interface IProps extends IData{
  theme: string,
}
interface IHero {
  data: IProps;
}
export default function Hero({data}: IHero) {
  return (
    <div className={`${heroStyle['slider-area']} position-relative`}>
      <div className={
        `${heroStyle['slider-area__slider-bg1']} ${heroStyle['slider-area__slider-height']} ${heroStyle['slider-area__slider-flex-center']}`
      }>
        <Container>
          <Row className='align-items-center'>
            <Col md={6} lg={6} xl={5} xxl={4}>
              <div className={heroStyle['slider-area__hero-caption']}>
                <span>{data.theme}</span>
                <h1 className={nunito.className}>{data.title}</h1>
                <p>{data.text}</p>
                <Link href={'/services'} className={heroStyle['slider-area__hero-caption__link']}>{data.link}</Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}
