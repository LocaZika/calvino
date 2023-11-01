const windowScrollY: number = window.scrollY;
const stickyHeader = (): void => {
  const navbar: HTMLElement | null = document.getElementById('navbar');
  if (windowScrollY > 100){
    navbar?.classList.add('sticky');
  }else{
    navbar?.classList.remove('sticky');
  }
};
window.addEventListener('load', () => {
  window.addEventListener('scroll', stickyHeader);
});
