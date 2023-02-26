const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY;
  if (scrollPos > 100) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
});