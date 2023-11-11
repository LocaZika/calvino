'use client'
import Image from 'next/image';
import React from 'react';
import logo from '@imgs/logo.png';
import useSWR from 'swr';
import Link from 'next/link';
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap';
import headerStyle from '@styles/header.module.scss';
import { convertTelNumber } from '@ultils/string';
import HeaderMobile from '@components/layout/app.header.mobile';
import { useState, useEffect, useRef } from 'react';
import useScrollY from '@/hooks/useScrollY';
import { INavbar } from '@/datatypes/backend';


const HOST = process.env.NEXT_PUBLIC_HOST;
const fetcher = (url: string) => fetch(url).then(res => res.json());



export default function Header() {
  const {data, isLoading} = useSWR(`${HOST}/header`, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  });
  
  const scrollY = useScrollY();
  
  if(!data){
    return (
      <div>loading...</div>
    )
  }
  return (
    <header>
      <Navbar id='navbar' className={
        scrollY > 100 ?
        `${headerStyle['navbar']} ${headerStyle['sticky']}`:
        `${headerStyle['navbar']} `
      }>
        <Container fluid>
          <div className='d-flex w-100 align-items-center justify-content-between flex-wrap position-relative'>
            <div className={`${headerStyle['navbar__leftside']} d-flex align-items-center`}>
              <div className={headerStyle["navbar__leftside__logo"]}>
                <Link href={'/home'} className='nav-brand'>
                  <Image
                    src={logo}
                    alt='logo'
                    priority={true}
                  />
                </Link>
              </div>
              <Nav className={headerStyle['navbar__leftside__main-menu']}>
                <ul>
                  {
                    data?.navbar.map((item: INavbar)  => (
                      <li key={item.id}>
                        <Link href={item.url}>{item.name}</Link>
                      </li>
                    ))
                  }
                </ul>
              </Nav>
            </div>
            <div className={headerStyle['navbar__rightside']}>
              <Link href={`tel:${convertTelNumber(data?.callUs)}`} className={headerStyle["navbar__rightside__callUs"]}>
                call us: <span>{data?.callUs}</span>
              </Link>
              <Link href={data?.contact.url} className={headerStyle["navbar__rightside__contact"]}>
                {data?.contact.name}
              </Link>
            </div>
            <HeaderMobile
              navbar={data?.navbar}
              callUs={data?.callUs}
              contact={data?.contact}
              logo={logo}
              style={headerStyle}
            />
          </div>
        </Container>
      </Navbar>
    </header>
  )
}
