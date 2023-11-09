import {useState, useEffect} from 'react'

export default function useScrollY() {
  const [wScrollY, setWScrollY] = useState<number>(0);
  const handleScrollY = (): void => {
    setWScrollY(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener('load', () => {
      window.addEventListener('scroll', () => {
        handleScrollY();
      });
    });
    return window.removeEventListener('scroll', handleScrollY)
  }, [window.scrollY])
  return wScrollY;
}
