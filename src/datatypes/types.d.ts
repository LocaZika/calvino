import { StaticImageData } from "next/image";

// API

interface IUrlData{
  url: string;
}
interface ILinkData {
  text: string,
  url: IUrlData,
}
interface IData{
  id: string,
  title: string,
  text?: string,
  link?: string,
}
// Header
interface INavbar {
  id: string;
  name: string;
  url: string;
}
interface IHeaderMobile{
  navbar: [],
  callUs: string,
  contact: {
    name: string,
    url: string,
  },
  logo: StaticImageData,
  style: {
    readonly [key: string]: string;
  },
}
// footer
interface IMenuCaption{
  id: string,
  name: string,
  url: string,
}
interface ICaption{
  id: string,
  title: string,
  menu:IMenuCaption[],
}
// Card
interface ICardData{
  id: string,
  title: string,
  img: string,
  content: string,
  url: string,
}
// Plan Card
interface IPlanCard{
  id: string,
  price: number,
  increaseTraffic: string,
  socialMediaMkt: boolean,
  freeOptimization: number,
  support: string,
  period: string,
  classification: string,
  path: string,
}
// Brands
interface IBrand{
  id: string,
  path: string,
}
interface ICaseImg{
  id: string,
  title: string,
  subTitle: string,
  path: string,
}