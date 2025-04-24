const goTop = document.getElementById('back-to-top');

window.onscroll = () => {
  if (document.documentElement.scrollTop > 100) {
    goTop.classList.add('active');
  } else {
    goTop.classList.remove('active');
  }
};

goTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
