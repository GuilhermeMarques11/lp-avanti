// Add Products to Carousel
function addProductsToCarousel() {
  const numberOfProducts = 6;
  const carousels = document.querySelectorAll('.carousel');

  carousels.forEach((carousel) => {
    const carouselItem = carousel.querySelector('.carousel__item');

    for (let i = 0; i < numberOfProducts; i++) {
      const newProduct = carouselItem.cloneNode(true);
      carousel.appendChild(newProduct);
    }
  });
}

addProductsToCarousel();

document.addEventListener('DOMContentLoaded', () => {
  function carousel() {
    const swiper = new Swiper('.swiper', {
      direction: 'horizontal',
      loop: false,
      slidesPerView: 5,
      spaceBetween: 10,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'bullets',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        300: {
          slidesPerView: 2,
        },
        480: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
      },
    });
  }

  carousel();
});
