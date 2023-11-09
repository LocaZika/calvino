import React from 'react';
import heroStyle from '@components/home/hero/hero.module.scss';
import useScrollY from '@/hooks/useScrollY';

export default function Hero() {
  const scrollY = useScrollY();
  
  return (
    // <div className={`${heroStyle['slider-area']} position-relative`}>
    //   <div className={
    //     `${heroStyle['slider-bg1']}
    //      ${heroStyle['slider-height']}`
    //   }></div>
    // </div>
    <div style={{height: '1000px'}}></div>
  )
}
