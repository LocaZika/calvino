import { StaticImageData } from "next/image";

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