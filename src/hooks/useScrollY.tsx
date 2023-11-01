import {useState, useEffect} from 'react'

export default function useScrollY() {
  const [wScrollY, setWScrollY] = useState<number>(0);
  useEffect(() => {
    window.addEventListener('load', () => {
      window.addEventListener('scroll', () => {
        setWScrollY(window.scrollY);
      });
    });
    console.log(wScrollY);
    
  }, [wScrollY])
  return wScrollY;
}
